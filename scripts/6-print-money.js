import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x1E151360bde4E24e60B84D4F359fDd09768b0f2f");

(async () => {
    try {
        const amount = 1_000_000;
        await token.mintToSelf(amount)
        const totalSupply = await token.totalSupply();
        console.log("✅ There now is", totalSupply.displayValue, "$TREND in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();
