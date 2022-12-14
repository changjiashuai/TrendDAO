import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "Magic Trend DAO",
            voting_token_address: "0x1E151360bde4E24e60B84D4F359fDd09768b0f2f",
            voting_delay_in_blocks: 0,
            voting_period_in_blocks: 6570,
            voting_quorum_fraction: 0,
            proposal_token_threshold: 0,
        });

        console.log(
            "✅ Successfully deployed vote contract, address:",
            voteContractAddress,
        );
    } catch (error) {
        console.error("Failed to deploy vote contract", error);
    }
})();
