import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Group, Textarea, Title } from "@mantine/core";
import { Web3Context } from "@/contexts/Web3ProviderContext";
import { v1 as sequenceCoreV1 } from "@0xsequence/core";
import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { walletContracts } from "@0xsequence/abi";
import { BigNumber, BigNumberish, ethers } from "ethers";

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
const CHAIN_ID = "13473";

const PASSPORT_ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNhYVl5dGR3d2UwMzJzMXIzVElyOSJ9.eyJlbWFpbCI6ImtlbmxleS5iYXN0YXJpQGltbXV0YWJsZS5jb20iLCJjbGllbnRfbmFtZSI6IlBhc3Nwb3J0IFNhbXBsZSBBcHBsaWNhdGlvbiAtIFNhbmRib3giLCJvcmciOiI5NTk2ZTgyNi0zZWYwLTRmN2QtODMwZi1kMzI2M2NmNDU1ZDAiLCJlbnZpcm9ubWVudF9pZCI6IjA4ZDQ0YjQzLTI1M2UtNDY5NC04NDIyLThjM2Y4ODAwN2E4ZiIsImNsaWVudF9vcmciOiJhZTNjYTk1NS05NWU4LTQzYjUtOGJkNS1iOGM3NjRhMzRhYmUiLCJldGhlcl9rZXkiOiIweDkwMWJmZDUxNDdmYmUxNDA2NzA3MjU5YzZjMDliY2NjM2JmOTMyYzIiLCJzdGFya19rZXkiOiIweDAzNzkxNjk5N2JlYTgxNTBhMTRhODljYThlODMxYzBmODA5OWFiNjk5MTJiZGI0Mzk4N2M1MTkwMTM2NmYwN2MiLCJ1c2VyX2FkbWluX2tleSI6IjB4YWJlNDMwYjY4M2IxOWEyNWE0YzQ2N2VkZmU1YTI0YjUzYjhjZDBjZSIsImlteF9ldGhfYWRkcmVzcyI6IjB4OTAxYmZkNTE0N2ZiZTE0MDY3MDcyNTljNmMwOWJjY2MzYmY5MzJjMiIsImlteF9zdGFya19hZGRyZXNzIjoiMHgwMzc5MTY5OTdiZWE4MTUwYTE0YTg5Y2E4ZTgzMWMwZjgwOTlhYjY5OTEyYmRiNDM5ODdjNTE5MDEzNjZmMDdjIiwiaW14X3VzZXJfYWRtaW5fYWRkcmVzcyI6IjB4YWJlNDMwYjY4M2IxOWEyNWE0YzQ2N2VkZmU1YTI0YjUzYjhjZDBjZSIsInprZXZtX2V0aF9hZGRyZXNzIjoiMHg5MDFiZmQ1MTQ3ZmJlMTQwNjcwNzI1OWM2YzA5YmNjYzNiZjkzMmMyIiwiemtldm1fdXNlcl9hZG1pbl9hZGRyZXNzIjoiMHhhYmU0MzBiNjgzYjE5YTI1YTRjNDY3ZWRmZTVhMjRiNTNiOGNkMGNlIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmltbXV0YWJsZS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDg4MjM1MDU1MDg0NzcwODE1OTEiLCJhdWQiOlsicGxhdGZvcm1fYXBpIiwiaHR0cHM6Ly9wcm9kLmltbXV0YWJsZS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzA3ODY3ODQwLCJleHAiOjE3MDc5NTQyNDAsImF6cCI6Im1qdENMOG10MDZCdGJ4U2twMnZicllTdEtXblhWWmZvIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCB0cmFuc2FjdCBvZmZsaW5lX2FjY2VzcyJ9.JLH8ugPbvGNH-liyg4_PSYNf5NXs54bR9O5VX7myqFXjM-_rn_TpAPXaRVkG_q1u48W8FUXqvWHJfl25uaKgT4x2zYvSu4MTdqhr6i3DVktvlXw_p2Z4twkWPNkaAZ3PhbOf_tLwZcDWixbf4JgKsZTmhkKqw5C-niIFy_vBtKna3c6qdJLfE2NjkOg3u1pdijEuo0OURIfb1VV9TpHi5oRiZ8ka596Da-SpaVCPOCz8ovo7ZzAPlAKKVbiJ3S1t-63NNvBXVtaNUsZVr6ECwOGXN_Tzo2U_0KZMs7ShrE0lXkLiOzUFYBS3wYqCMWWTpukUq6zWCEwON9I5oIwd7A";

const PASSPORT_SCW = "0x901bfd5147fbe1406707259c6c09bccc3bf932c2";

export default function Assets() {
  const { web3Provider, userAddress } = useContext(Web3Context);

  const [payload, setPayload] = useState("");

  useEffect(() => {
    if (!web3Provider || !userAddress) return;
  }, [web3Provider, userAddress]);

  const handlePayloadChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPayload(event.target.value);
  };

  const handleSign = async () => {
    const client = new Magic("pk_live_10F423798A540ED7", {
      extensions: [new OpenIdExtension() as any],
      network: "mainnet", // We always connect to mainnet to ensure addresses are the same across envs
    });
    client.preload();
    // const signature = await web3Provider!.getSigner().signMessage(message);
    const response = await client.openid.loginWithOIDC({
      jwt: PASSPORT_ACCESS_TOKEN,
      providerId: "fSMzaRQ4O7p4fttl7pCyGVtJS_G70P8SNsLXtPPGHo0=",
    });
    console.log(response);
    const signer = new Web3Provider(
      client.rpcProvider as unknown as any,
    ).getSigner();

    const nonce = 1;
    const userAddress = PASSPORT_SCW;
    const targetAddr = "0x3e290FE8F2A5dB60A81cb47EA296e0299048Dd71";
    const txs = [
      {
        delegateCall: false,
        revertOnError: false,
        gasLimit: BigNumber.from(100000),
        target: targetAddr,
        value: BigNumber.from(1),
        data: "0x",
      },
    ];

    const signature = await signAndEncodeExecute(
      txs,
      nonce,
      userAddress,
      signer,
    );

    const { transactionId } = await guardianEvaluateTx(nonce, userAddress, txs);
    console.log("transactionId", transactionId);
    const approveResponse =
      await guardianApprovePendingTransaction(transactionId);
    console.log(approveResponse);
    setSigned(signature);
  };

  const [signed, setSigned] = useState("");

  return (
    <Container size="sm">
      <Title size="h1" sx={{ marginBottom: "1.5rem" }}>
        Magic sign
      </Title>
      <Group>
        <Textarea
          autosize
          minRows={20}
          maxRows={20}
          value={payload}
          onChange={handlePayloadChange}
        ></Textarea>
        <Button onClick={handleSign}>Sign message</Button>
        <Textarea autosize minRows={20} maxRows={20} value={signed}></Textarea>
      </Group>
    </Container>
  );
}

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

const signAndEncodeExecute = async (
  txs: MetaTransaction[],
  nonce: Number,
  walletAddress: string,
  signer: JsonRpcSigner,
) => {
  // Get the hash
  const digest = digestOfTransactionsAndNonce(BigNumber.from(nonce), txs);
  const completePayload = encodeMessageSubDigest(
    BigNumber.from(CHAIN_ID),
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

interface MetaTransaction {
  delegateCall: boolean;
  revertOnError: boolean;
  gasLimit: BigNumber;
  target: string;
  value: BigNumber;
  data: string;
}

import axios from "axios";

export async function guardianEvaluateTx(
  nonce: Number,
  scw: String,
  metaTransactions: MetaTransaction[],
) {
  const headers = {
    Authorization: `Bearer ${PASSPORT_ACCESS_TOKEN}`,
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
    chainId: CHAIN_ID,
    transactionData: {
      nonce: nonce.toString(),
      userAddress: scw,
      metaTransactions: mappedTxs,
    },
  };

  try {
    const response = await axios.post(
      `https://guardian.sandbox.imtbl.com/guardian/v1/transactions/evm/evaluate`,
      payload,
      { headers: headers },
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function guardianApprovePendingTransaction(transactionID: string) {
  const headers = {
    Authorization: `Bearer ${PASSPORT_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };

  const requestBody = {
    chainID: CHAIN_ID,
    chainType: "evm",
    // otp: otp,
  };

  try {
    const response = await axios.post(
      `https://guardian.sandbox.imtbl.com/guardian/v1/transactions/${transactionID}/approve`,
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
