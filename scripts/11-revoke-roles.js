import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x1E151360bde4E24e60B84D4F359fDd09768b0f2f");

(async () => {
    try {
        const allRoles = await token.roles.getAll();

        console.log("👀 Roles that exist right now:", allRoles);

        // Revoke all the superpowers your wallet had over the ERC-20 contract.
        await token.roles.setAll({admin: [], minter: []});
        console.log(
            "🎉 Roles after revoking ourselves",
            await token.roles.getAll()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO treasury", error);
    }
})();
