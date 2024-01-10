import React, { useEffect, useState } from "react";
import { Container, createStyles, SimpleGrid, Skeleton, TextInput, Button } from "@mantine/core";
import { Text, Title } from "@mantine/core";

import { blockChainSDK, CHAIN_NAME, orderbookSDK } from "@/sdk/immutable";
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
    // Fetch data only if contractAddressInput has a value
    if (contractAddressInput) {
      fetchData();
    }
  }, [contractAddressInput]); // Add contractAddressInput to the dependency array

  const fetchData = async () => {
    try {
      const response = await orderbookSDK.listListings({
        sellItemContractAddress: "0xee4d2e6d5fb8f3c19eed6a7541bace1682c438ec",
        pageSize: 200,
      });
      console.log("response", response)
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
      fetchData();
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
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
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
                contractAddress={c.sell[0].contractAddress}
                image={c.type}
                description={c.type}
                name={c.type}
                updatedAt={c.type}
              />
            ))}
          </SimpleGrid>
        ) : null}
      </Container>
    </>
  );
}
