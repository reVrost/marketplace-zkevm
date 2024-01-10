import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  createStyles,
  SimpleGrid,
  Skeleton,
  TextInput,
} from "@mantine/core";
import { Text, Title } from "@mantine/core";

import {
  blockChainSDK,
  CHAIN_NAME,
  orderbookSDK,
  passportSDK,
} from "@/sdk/immutable";
import { CollectionButton } from "../CollectionButton/CollectionButton";

const style = createStyles((theme: any) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan("md")]: {
      fontSize: 50,
    },
  },
}));

export function Welcome() {
  const { classes } = style();
  const [collections, setCollections] = useState<any>([]);
  const [contractAddressInput, setContractAddressInput] = useState("");

  useEffect(() => {
    if (window.location.search.includes("?code=")) {
      passportSDK.loginCallback();
    }

    // Fetch data only if contractAddressInput has a value
    if (contractAddressInput) {
      fetchData(contractAddressInput);
    }
  }, [contractAddressInput]); // Add contractAddressInput to the dependency array

  const fetchData = async (contractAddress: string) => {
    try {
      const response = await blockChainSDK.listCollections({
        chainName: CHAIN_NAME,
        contractAddress: [contractAddress],
      });
      setCollections(response.result);
    } catch (error) {
      console.error("Error fetching collections:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContractAddressInput(event.target.value);
  };

  const handleSearch = () => {
    // Fetch data only if contractAddressInput has a value
    if (contractAddressInput) {
      fetchData(contractAddressInput);
    }
  };

  return (
    <>
      <Title className={classes.title} align="center" mt={50}>
        <Text inherit variant="gradient" component="span" color="pink">
          Marketplace
        </Text>
      </Title>
      <Container size="lg">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <TextInput
            value={contractAddressInput}
            onChange={handleInputChange}
            placeholder="Enter Contract Address"
            style={{ marginRight: "10px" }}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {contractAddressInput && collections.length > 0 ? (
          <SimpleGrid cols={3}>
            {collections.map((c: any, index: number) => (
              <CollectionButton
                key={`col-${index}`}
                contractAddress={c.contract_address}
                image={c.image}
                description={c.description}
                name={c.name}
                updatedAt={c.updated_at}
              />
            ))}
          </SimpleGrid>
        ) : null}
      </Container>
    </>
  );
}
