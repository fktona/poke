// Types for the existing Card interface
export type Card = {
  title: string;
  setTitle: string;
  imageUrl: string;
  gradeLabel?: string;
  price: string; // formatted currency
  isTrendUp: boolean;
  trendPercent: string; // e.g. "+1.2%" or "-0.5%"
  href: string;
};

// Types for Alchemy NFT API response
export type AlchemyNFT = {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  balance: string;
  title: string;
  description: string;
  tokenUri: {
    gateway: string;
    raw: string;
  };
  media: Array<{
    gateway: string;
    thumbnail: string;
    raw: string;
    format: string;
    bytes: number;
  }>;
  metadata: {
    image?: string;
    name?: string;
    description?: string;
    attributes?: Array<{
      trait_type: string;
      value: string | number;
      display_type?: string;
      max_value?: number;
    }>;
    collection_name?: string;
    tokenID?: number;
    website?: string;
  };
  timeLastUpdated: string;
  contractMetadata: {
    name: string;
    symbol: string;
    totalSupply: string;
    tokenType: string;
    contractDeployer: string;
    deployedBlockNumber: number;
    openSea?: {
      collectionName: string;
      collectionSlug: string;
      imageUrl?: string;
    };
  };
  spamInfo: {
    isSpam: string;
    classifications: string[];
  };
  error?: string;
};

export type AlchemyResponse = {
  ownedNfts: AlchemyNFT[];
  pageKey?: string;
  totalCount: number;
  blockHash: string;
};

// Function to fetch NFTs from Alchemy API
export async function fetchNFTs(): Promise<Card[]> {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' }
  };

  try {
    const response = await fetch(
      'https://polygon-mainnet.g.alchemy.com/v2/jp1-ZFXhySNm6QE3YzqiU/getNFTsForOwner?owner=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&withMetadata=true&pageSize=100',
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: AlchemyResponse = await response.json();
    
    // Transform Alchemy NFTs to Card format
    return data.ownedNfts
      .filter(nft => !nft.error && nft.media && nft.media.length > 0) // Filter out NFTs with errors or missing media
      .map((nft, index) => {
        // Generate a mock price (since NFT prices aren't in the API response)
        const basePrice = Math.random() * 1000 + 50;
        const price = `$${basePrice.toFixed(2)}`;
        
        // Generate mock trend data
        const trendValue = (Math.random() - 0.5) * 10; // -5% to +5%
        const isTrendUp = trendValue >= 0;
        const trendPercent = `${isTrendUp ? '+' : ''}${trendValue.toFixed(1)}%`;

        return {
          title: nft.title || nft.metadata?.name || `NFT #${parseInt(nft.id.tokenId, 16)}`,
          setTitle: nft.contractMetadata.name || 'Unknown Collection',
          imageUrl: nft.media[0]?.gateway || nft.metadata?.image || '',
          gradeLabel: nft.id.tokenMetadata.tokenType,
          price,
          isTrendUp,
          trendPercent,
          href: nft.metadata?.website || `https://opensea.io/assets/matic/${nft.contract.address}/${parseInt(nft.id.tokenId, 16)}`,
        };
      })
      .slice(0, 20); // Limit to 20 items for performance
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    // Return empty array on error
    return [];
  }
}

// Export the fetch function as the main data source
export const getCards = fetchNFTs;
