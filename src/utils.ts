import { Benefit1, Benefit2, Benefit3, Benefit4 } from "./components/Icons";

export const listBenefits = () => {
  const data = [
    {
      name: "On-Chain Artistry",
      description:
        "Experience the magic of on-chain art creation. Each GoYieldNFT is generated directly on the blockchain, ensuring authenticity and immutability, and providing a unique piece of digital artistry.",
      icon: Benefit1,
    },
    {
      name: "Efficient Contract Structure",
      description:
        "Leveraging the power of Algorand's Box Storage, we've streamlined our contract structure similar to the ERC721 standard on Ethereum. This means there's just one contract for each NFT collection, simplifying interactions and ensuring a seamless experience for collectors.",
      icon: Benefit2,
    },
    {
      name: "Passive Income",
      description:
        "Holders of GoYieldNFTs enjoy a passive income stream. In Phase One, 50% of proceeds are allocated to Folk-Finance, generating interest which is then shared with random NFT holders. This innovative approach allows you to earn simply by holding onto your NFT.",
      icon: Benefit3,
    },
    {
      name: "Community-Centric Ecosystem",
      description:
        "As our community grows, so do the benefits. With your support, we're committed to building an inclusive NFT marketplace on the Algorand blockchain. When the marketplace is established, 50% of the revenue generated will be distributed among all NFT holders, creating a sustainable and rewarding ecosystem for everyone involved.",
      icon: Benefit4,
    },
  ];
  return data;
};