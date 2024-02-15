import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  JsonInput,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { Web3Context } from "@/contexts/Web3ProviderContext";
import { v1 as sequenceCoreV1 } from "@0xsequence/core";
import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { walletContracts } from "@0xsequence/abi";
import { BigNumber, BigNumberish, ethers } from "ethers";
import axios from "axios";
import { passportSDK } from "@/sdk/immutable";

interface MetaTransaction {
  delegateCall: boolean;
  revertOnError: boolean;
  gasLimit: BigNumber;
  target: string;
  value: BigNumber;
  data: string;
}

interface ChainConfig {
  chainId: string;
  guardianURL: string;
  passportURL: string;
  magicPublishableKey: string;
  magicProviderId: string;
}

const SIGNATURE_WEIGHT = 1; // Weight of a single signature in the multi-sig
const TRANSACTION_SIGNATURE_THRESHOLD = 1; // Total required weight in the multi-sig for a transaction
const ETH_SIGN_FLAG = "02";
const ETH_SIGN_PREFIX = "\x19\x01";
const META_TRANSACTIONS_TYPE = `tuple(
  bool delegateCall,
  bool revertOnError,
  uint256 gasLimit,
  address target,
  uint256 value,
  bytes data
)[]`;

const CHAIN_ID = "eip155:13473";

enum Environment {
  Sandbox = "sandbox",
  Dev = "dev",
}

const config = {
  [Environment.Sandbox]: {
    chainId: "eip155:13473",
    guardianURL: "${guardianURL}",
    passportURL: "https://passport.sandbox.imtbl.com",
    magicPublishableKey: "pk_test_10F423798A540ED7",
    magicProviderId: "fSMzaRQ4O7p4fttl7pCyGVtJS_G70P8SNsLXtPPGHo0=",
  },
  [Environment.Dev]: {
    chainId: "eip155:15003",
    guardianURL: "https://guardian.dev.imtbl.com",
    passportURL: "https://passport.dev.imtbl.com",
    magicPublishableKey: "pk_live_4058236363130CA9",
    magicProviderId: "C9odf7hU4EQ5EufcfgYfcBaT5V6LhocXyiPRhIjw2EY=",
  },
};

export default function Assets() {
  const { web3Provider, userAddress } = useContext(Web3Context);

  const [targetAddress, setTargetAddress] = useState(
    "0x3e290FE8F2A5dB60A81cb47EA296e0299048Dd71",
  );
  const [userAddr, setUserAddr] = useState(
    userAddress || "0x901bfd5147fbe1406707259c6c09bccc3bf932c2",
  );
  const [nonce, setNonce] = useState(1);
  const [startingValue, setStartingValue] = useState(1);
  const [data, setData] = useState("0x");
  const [numberOfPayloads, setNumberOfPayloads] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  // Choose your environment
  const chosenConfig = config[Environment.Dev];
  const { magicProviderId, magicPublishableKey } = chosenConfig;

  const handleSign = async () => {
    if (!userAddress) alert("No user address");
    setIsLoading(true);
    try {
      const client = new Magic(magicPublishableKey, {
        extensions: [new OpenIdExtension() as any],
        network: "mainnet", // We always connect to mainnet to ensure addresses are the same across envs
      });
      client.preload();
      const response = await client.openid.loginWithOIDC({
        jwt: accessToken,
        providerId: magicProviderId,
      });
      console.log(response);
      const signer = new Web3Provider(
        client.rpcProvider as unknown as any,
      ).getSigner();

      const signatures = await generatePayload(
        chosenConfig,
        accessToken,
        signer,
        userAddr,
        targetAddress,
        startingValue,
        nonce,
        numberOfPayloads,
      );

      setSigned(JSON.stringify(signatures));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [signed, setSigned] = useState("");

  const getAccessToken = async () => {
    setAccessToken((await passportSDK.getAccessToken()) || "CANT GET TOKEN");
  };

  return (
    <Container size="xl">
      <Title size="h1" sx={{ marginBottom: "1.5rem" }}>
        Magic sign
      </Title>
      <Stack>
        <Textarea
          label="Access token"
          value={accessToken}
          onChange={(e) => setAccessToken(e.currentTarget.value)}
          minRows={5}
        />
        <SimpleGrid cols={4}>
          <div /> <div /> <div />{" "}
          <Button onClick={getAccessToken}>Get new token</Button>
        </SimpleGrid>
        <SimpleGrid cols={3}>
          <TextInput
            label="User SCW"
            value={userAddr}
            onChange={(e) => setUserAddr(e.currentTarget.value)}
          />
          <TextInput
            label="Target tx"
            value={targetAddress}
            placeholder="0x3e290FE8F2A5dB60A81cb47EA296e0299048Dd71"
            onChange={(e) => setTargetAddress(e.currentTarget.value)}
          />
          <TextInput
            label="Number of payloads"
            placeholder="10"
            value={numberOfPayloads}
            onChange={(e) =>
              setNumberOfPayloads(parseInt(e.currentTarget.value, 10) || 1)
            }
          />
          <TextInput
            label="Starting Nonce"
            placeholder="1"
            value={nonce}
            onChange={(e) => setNonce(parseInt(e.currentTarget.value, 10))}
          />
          <TextInput
            label="Starting Value"
            placeholder="1"
            value={startingValue}
            onChange={(e) =>
              setStartingValue(parseInt(e.currentTarget.value, 10))
            }
          />
          <TextInput
            label="Data"
            placeholder="0x"
            value={data}
            onChange={(e) => setData(e.currentTarget.value)}
          />
        </SimpleGrid>
        <Button onClick={handleSign} loading={isLoading}>
          Sign message
        </Button>
        <JsonInput
          autosize
          minRows={20}
          maxRows={20}
          value={signed}
          validationError="Invalid JSON"
          formatOnBlur
        ></JsonInput>
      </Stack>
    </Container>
  );
}

const generatePayload = async (
  config: ChainConfig,
  idToken: string,
  signer: JsonRpcSigner,
  userAddr: string,
  targetAddress: string,
  startingValue: number,
  startingNonce: number,
  numberOfPayloads: number,
) => {
  const signatures = {} as Record<string, string>;
  const { chainId } = config;
  for (let i = 0; i < numberOfPayloads; i++) {
    const txs = [
      {
        delegateCall: false,
        revertOnError: false,
        gasLimit: BigNumber.from(100000),
        target: targetAddress,
        value: BigNumber.from(startingValue + i),
        data: "0x",
      },
    ];
    const nonce = startingNonce + i;
    const signature = await signAndEncodeExecute(
      chainId,
      txs,
      nonce,
      userAddr,
      signer,
    );
    // Saves to guardian
    const { transactionId } = await guardianEvaluateTx(
      config,
      idToken,
      nonce,
      userAddr,
      txs,
    );

    // Approve
    await guardianApprovePendingTransaction(config, idToken, transactionId);

    signatures[transactionId] = signature;
  }
  return signatures;
};

export function digestOfTransactionsAndNonce(
  nonce: BigNumberish,
  normalisedTransactions: MetaTransaction[],
) {
  const packMetaTransactionsNonceData = ethers.utils.defaultAbiCoder.encode(
    ["uint256", META_TRANSACTIONS_TYPE],
    [nonce, normalisedTransactions],
  );
  return ethers.utils.keccak256(packMetaTransactionsNonceData);
}

const getBigNumberFromString = (input: string): BigNumber => {
  // Split the string by ':'
  const parts = input.split(":");

  // Extract the numeric part and convert it to a BigNumber
  const numericPart = parts[1];
  const bigNumber = BigNumber.from(parseInt(numericPart));

  return bigNumber;
};

const signAndEncodeExecute = async (
  chainId: string,
  txs: MetaTransaction[],
  nonce: Number,
  walletAddress: string,
  signer: JsonRpcSigner,
) => {
  // Get the hash
  const digest = digestOfTransactionsAndNonce(BigNumber.from(nonce), txs);
  const completePayload = encodeMessageSubDigest(
    getBigNumberFromString(chainId),
    walletAddress,
    digest,
  );

  const hash = ethers.utils.keccak256(completePayload);

  // Sign the digest
  const hashArray = ethers.utils.arrayify(hash);
  const ethsigNoType = await signer.signMessage(hashArray);
  const signedDigest = `${ethsigNoType}${ETH_SIGN_FLAG}`;

  // Add metadata
  const encodedSignature = sequenceCoreV1.signature.encodeSignature({
    version: 1,
    threshold: TRANSACTION_SIGNATURE_THRESHOLD,
    signers: [
      {
        isDynamic: false,
        unrecovered: true,
        weight: SIGNATURE_WEIGHT,
        signature: signedDigest,
      },
    ],
  });

  // Encode the transaction;
  const walletInterface = new ethers.utils.Interface(
    walletContracts.mainModule.abi,
  );
  return walletInterface.encodeFunctionData(
    walletInterface.getFunction("execute"),
    [txs, nonce, encodedSignature],
  );
};

const encodeMessageSubDigest = (
  chainId: BigNumber,
  walletAddress: string,
  digest: string,
): string =>
  ethers.utils.solidityPack(
    ["string", "uint256", "address", "bytes32"],
    [ETH_SIGN_PREFIX, chainId, walletAddress, digest],
  );

export async function guardianEvaluateTx(
  config: ChainConfig,
  idToken: string,
  nonce: Number,
  scw: String,
  metaTransactions: MetaTransaction[],
) {
  const { guardianURL, chainId } = config;
  const headers = {
    Authorization: `Bearer ${idToken}`,
    "Content-Type": "application/json",
  };

  const mappedTxs = metaTransactions.map((t) => ({
    delegateCall: t.delegateCall,
    revertOnError: t.revertOnError,
    gasLimit: t.gasLimit.toString(),
    target: t.target,
    value: t.value.toString(),
    data: t.data,
  }));
  const payload = {
    chainType: "evm",
    chainId,
    transactionData: {
      nonce: nonce.toString(),
      userAddress: scw,
      metaTransactions: mappedTxs,
    },
  };

  try {
    const response = await axios.post(
      `${guardianURL}/guardian/v1/transactions/evm/evaluate`,
      payload,
      { headers: headers },
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function guardianApprovePendingTransaction(
  config: ChainConfig,
  idToken: string,
  transactionID: string,
) {
  const { guardianURL, chainId } = config;
  const headers = {
    Authorization: `Bearer ${idToken}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    chainId,
    chainType: "evm",
    // otp: otp,
  };

  try {
    const response = await axios.post(
      `${guardianURL}/guardian/v1/transactions/${transactionID}/approve`,
      requestBody,
      { headers: headers },
    );
    console.log("response", response.status);
    return response.status === 204;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
