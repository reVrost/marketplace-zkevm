import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
	Center,
	Container,
	Grid,
	Group,
	Skeleton,
	Stack,
	Tabs,
	TextInput,
	Button,
} from "@mantine/core";
import { IconMessageCircle, IconPhoto } from "@tabler/icons-react";

import { blockChainSDK, CHAIN_NAME, orderbookSDK } from "@/sdk/immutable";
import { NFTCard } from "@/components/NFTCard/NFTCard";
import { Web3Context } from "@/contexts/Web3ProviderContext";
import { orderbook } from "@imtbl/sdk";
import { CollectionInfo } from "@/components/CollectionInfo/CollectionInfo";
import { Oops } from "@/components/Oops/Oops";

interface CollectionData {
	nfts: any;
	collection: any;
	listings: orderbook.Order[];
  floor: string;
}

export default function NFTPage() {
	const router = useRouter();
	const { address } = router.query;
	// All the NFTS details within a collection
	const [data, setData] = useState<CollectionData>({
		nfts: [],
		collection: undefined,
		listings: [],
    floor: "0",
	});

	const [filterValue, setFilterValue] = useState(""); // State to hold the filter value

	const { nfts, collection, listings, floor } = data;

	const { web3Provider, userAddress } = useContext(Web3Context);
	console.log("TEST");

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log("test");
				// Collections
				const cres = await blockChainSDK.getCollection({
					chainName: CHAIN_NAME,
					contractAddress: String(address),
				});

				// NFTS
				const nres = await blockChainSDK.listNFTs({
					chainName: CHAIN_NAME,
					contractAddress: String(address),
					pageSize: 200,
				});

				// Listings
				const lres = await orderbookSDK.listListings({
					status: orderbook.OrderStatusName.ACTIVE,
					sellItemContractAddress: String(address),
					sortDirection: "asc",
				});
				console.log(nres);
				console.log(cres);
				console.log(lres);

				// TODO: display listings as 'my listings'
				const filteredListings: orderbook.Order[] = lres.result;
				// if (userAddress) {
				//   filteredListings = lres.result.filter(
				//     (l) => l.accountAddress !== userAddress!.toLowerCase()
				//   );
				// }

				setData({
					listings: filteredListings,
					collection: cres.result,
					nfts: nres.result,
          floor: lres.result[0].buy[0].amount,
				});
			} catch (error) {
				console.error("Error fetching collections:", error);
			}
		};

		if (userAddress) {
			fetchData();
		}
	}, [userAddress]);

	if (listings === undefined || collection === undefined) {
		return (
			<Container>
				<Skeleton height={50} circle mb="xl" />
				<Skeleton height={8} radius="xl" />
				<Skeleton height={8} mt={6} radius="xl" />
				<Skeleton height={8} mt={6} width="70%" radius="xl" />
			</Container>
		);
	}

	const listingsFull = listings.map((x: orderbook.Order) => {
		const nft = nfts.find((n: any) => n.token_id === x.sell[0].tokenId);

		return nft === undefined ? undefined : Object.assign({}, x, nft, { order_id: x.id });
	});

	const listingsWithDetails = listingsFull.filter((listing) => listing !== undefined);

	const { name, description, image, updated_at } = collection;
	const floorPrice = Number(floor) / 1e18;

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilterValue(event.target.value);
	};

  const handleResetClick = async () => {
    // Reset the listings to the original state
    const lres = await orderbookSDK.listListings({
      status: orderbook.OrderStatusName.ACTIVE,
      sellItemContractAddress: String(address),
      sortDirection: "asc",
    });

    setData({
      ...data,
      listings: lres.result // Assuming 'listingsFull' holds the original unfiltered listings
    });
    setFilterValue(""); // Reset the filter input value
  };

	const handleFilterClick = () => {
    // Convert filterValue to a number (assuming it's a price ceiling)
		const priceCeiling = parseFloat(filterValue);

    // Filter listings with details where the sell price is less than the entered price
    const filteredListings = listingsWithDetails.filter((listing: any) => {
    const listingPrice = parseFloat(listing.price); // Assuming 'price' is the property to filter

			// Filter condition: Show items with a sell price less than or equal to the entered price
			return !isNaN(priceCeiling) && listingPrice <= priceCeiling;
    });

		setData({
			...data,
			listings: filteredListings,
		});
	};

	return (
		<Container size="md">
			<Stack>
				<CollectionInfo
					title="Collection"
					name={name}
					description={description}
					avatar={image}
					created={`Created at ${new Date(updated_at).toLocaleString()}`}
					floorPrice={String(floorPrice)}
				/>
				<Grid>
					<div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
						<TextInput
							value={filterValue}
							onChange={handleFilterChange}
							placeholder="Enter price ceiling"
							style={{ marginRight: "10px" }}
						/>
						<Button onClick={handleFilterClick}>Filter</Button>
            <Button onClick={handleResetClick}>Reset</Button>
					</div>

					<Grid.Col xs={12}>
						<Tabs radius="md" defaultValue="gallery">
							<Tabs.List>
								<Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>
									Listings
								</Tabs.Tab>
								<Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>
									Offers
								</Tabs.Tab>
							</Tabs.List>

							<Tabs.Panel value="gallery" pt="xs">
								{listingsWithDetails.length > 0 ? (
									<Group mt="sm">
										{listingsWithDetails.map((x: any, index) => (
											<NFTCard key={`nft-${index}`} {...x} />
										))}
									</Group>
								) : (
									<Center>
										<Oops />
									</Center>
								)}
							</Tabs.Panel>

							<Tabs.Panel value="messages" pt="xs">
								Offers coming soon!
							</Tabs.Panel>
						</Tabs>
					</Grid.Col>
				</Grid>
			</Stack>
		</Container>
	);
}
