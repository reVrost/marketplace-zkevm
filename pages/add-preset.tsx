import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { Web3Context } from "@/contexts/Web3ProviderContext";
import { ethers } from "ethers";
import { ERC1155ABI, factoryABI, ffABI } from "@/abi/abi";

export default function Assets() {
  const { web3Provider, userAddress } = useContext(Web3Context);

  // const [hardware, setHardware] = useState("trezor");
  // const [rpcUrl, setRpcUrl] = useState("https://rpc.testnet.immutable.com");
  const [init, setInit] = useState("");
  const [factoryPath, setFactoryPath] = useState(
    "~/code/immutable/contract-factory/presets/ImmutableERC1155.json",
  );
  const [contractFactoryAddress, setContractFactoryAddress] = useState(
    "0x3CC6ee9c987458a0D9f69e49c87816F7DAcA2c19",
  );
  const [presetName, setPresetName] = useState("ImmutableERC1155");
  const [walletIndex, setWalletIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddPreset = async () => {
    if (!userAddress) alert("No user address");
    setIsLoading(true);

    try {
      // const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      const signer = web3Provider!.getSigner();
      const configuration = {
        presetAdder: await signer.getAddress(),
        contractFactoryAddress: contractFactoryAddress,
        pathToABI: factoryPath,
        initSelector: init,
      };
      console.log(
        `Adding Preset with configuration: ${JSON.stringify(configuration)}`,
      );

      // await validateAdderBalance(signer);

      const factory = new ethers.Contract(
        contractFactoryAddress,
        ffABI,
        signer,
      );

      const contractName = presetName;
      if (!contractName) {
        throw new Error(
          `ABI at ${configuration.pathToABI} does not have a contractName`,
        );
      }
      const bytecode = ERC1155ABI.bytecode;
      if (!bytecode) {
        throw new Error(
          `ABI at ${configuration.pathToABI} does not have a bytecode`,
        );
      }

      const presetBytecode = ethers.utils.arrayify(bytecode);
      const bytecodeChunks = splitIntoChunks(presetBytecode);
      console.log(
        `Split bytecode for preset ${contractName} into ${bytecodeChunks.length} chunks`,
      );
      for (const chunkIdx in bytecodeChunks) {
        console.log(
          `Submitting chunk ${chunkIdx} with size ${bytecodeChunks[chunkIdx].length}...`,
        );
        const prepareTx = await factory.preparePresetBytecode(
          contractName,
          bytecodeChunks[chunkIdx],
          {
            maxPriorityFeePerGas: 105000000000,
            maxFeePerGas: 105000000000,
            gasLimit: 10000000,
          },
        );
        console.log(
          `Sent PrepareTx: ${prepareTx.hash}... Waiting for inclusion`,
        );
        await prepareTx.wait();
        console.log(
          `Prepared Bytecode chunk ${chunkIdx} with size ${bytecodeChunks[chunkIdx].length} included in tx: ${prepareTx.hash}`,
        );
      }

      const initSelector = ethers.utils.hexZeroPad(
        ethers.utils.hexlify(
          ethers.utils.toUtf8Bytes(configuration.initSelector),
        ),
        4,
      );
      console.log(
        `Adding Preset with name ${contractName} and initSelector ${initSelector}`,
      );
      const finaliseTx = await factory.addPreset(contractName, initSelector, {
        maxPriorityFeePerGas: 105000000000,
        maxFeePerGas: 105000000000,
      });
      console.log(`Waiting for Tx: ${finaliseTx.hash} to be included...`);
      await finaliseTx.wait();
      console.log(`Preset Finalised and Ready in tx: ${finaliseTx.hash}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container size="xl">
      <Title size="h1" sx={{ marginBottom: "1.5rem" }}>
        (HUB) Add preset
      </Title>
      <Stack>
        <SimpleGrid cols={3}>
          <TextInput
            label="Preset Name"
            value={presetName}
            onChange={(e) => setPresetName(e.currentTarget.value)}
          />
          <TextInput
            label="Factory Path"
            placeholder="1"
            value={factoryPath}
            onChange={(e) => setFactoryPath(e.currentTarget.value)}
          />
          <TextInput
            label="Contract Factory Address"
            placeholder="0x"
            value={contractFactoryAddress}
            onChange={(e) => setContractFactoryAddress(e.currentTarget.value)}
          />
          <TextInput
            label="Init"
            placeholder=""
            value={init}
            onChange={(e) => setInit(e.currentTarget.value)}
          />
        </SimpleGrid>
        <Button onClick={handleAddPreset} loading={isLoading}>
          Add preset
        </Button>
      </Stack>
    </Container>
  );
}

function splitIntoChunks(str: Uint8Array, chunkSize = 10000) {
  let chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}

async function validateAdderBalance(wallet: ethers.Signer) {
  const totalFeePerGas: ethers.BigNumber = ethers.BigNumber.from(105000000000);
  const totalFee = totalFeePerGas.mul(60_000_000);

  const presetAdderBalance = await wallet.getBalance();
  if (presetAdderBalance.lt(totalFee.mul(2))) {
    throw new Error(
      `Preset Adder Balance too low: ${presetAdderBalance.toString()}. Required: ${totalFee
        .mul(2)
        .toString()}`,
    );
  }

  console.log(
    `Maximum IMX Required (overestimated): ${totalFee.toString()} | Preset Adder Balance: ${presetAdderBalance.toString()}`,
  );
}
