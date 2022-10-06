import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const editionDrop = await sdk.getEditionDrop("0x1D6288E8C07CEB1cAa82c1BA4fcC856E7536b2D8");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to TreadDAO!",
                image: readFileSync("scripts/assets/trend.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
