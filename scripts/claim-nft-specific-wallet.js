import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x1D6288E8C07CEB1cAa82c1BA4fcC856E7536b2D8");

const address = "0xe671414DBF752A91B0a19a97c86951A8bB3cf878"; // address of the wallet you want to claim the NFTs
const tokenId = 0; // the id of the NFT you want to claim
const quantity = 1; // how many NFTs you want to claim

const tx = await editionDrop.claimTo(address, tokenId, quantity);
const receipt = tx.receipt; // the transaction receipt
console.log("receipt:", receipt);
