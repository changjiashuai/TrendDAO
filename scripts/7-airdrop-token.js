import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x1D6288E8C07CEB1cAa82c1BA4fcC856E7536b2D8");
const token = sdk.getToken("0x1E151360bde4E24e60B84D4F359fDd09768b0f2f");

(async () => {
    try {
        const walletAddresses = (await editionDrop).history.getAllClaimerAddresses(0);
        if ((await walletAddresses).length === 0) {
            console.log("No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!");
            process.exit(0);
        }

        const airdropTargets = (await (walletAddresses)).map((address) => {
            // Pick a random # between 1000 and 10000
            const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

            const airdropTarget = {
                toAddress: address,
                amount: randomAmount,
            };

            return airdropTarget;
        });

        // Call transferBatch on all our airdrop targets.
        console.log("🌈 Starting airdrop...");
        await (await token).transferBatch(airdropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    } catch (error) {
        console.error("Failed to airdrop tokens", error);
    }
})();
