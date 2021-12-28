import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xCfB5a306d9171a2f56bE76b9940e437fd4484ad6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Game controller",
        description: "This NFT will give you access to GAMEDAO!",
        image: readFileSync("/Users/huangbentai/Documents/GitHub/buildspace-dao-starter/scripts/assets/Game controllers.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()