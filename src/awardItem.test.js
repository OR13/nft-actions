const { awardItem } = require(".");
// 2 minute timeout for test, want to wait for full transaction
jest.setTimeout(2 * 60 * 1000);

describe.skip("awardItem", () => {
  it("should award an item", async () => {
    const response = await awardItem({
      providerOrUrl: process.env.WEB3_PROVIDER,
      mnemonic: process.env.MNEMONIC,
      derivationPath: process.env.HD_PATH,
      address: "0xa2E49db1a0707a1fFCcF061fB13168B176755CE8",
      artifact: require("../docs/GithubActionsNFT.json"),
      tokenUri: "https://or13.github.io/nft-actions/example.json?dev=0",
    });
    epxect(response).toBeDefined();
    // console.log(JSON.stringify(response, null, 2));
    // {
    //   "tx": {
    //     "transactionHash": "0x960bd6f0ac05e1df335521d8dccb75ecdd2151b95da867beb9f5ec80db9c97de",
    //     "blockHash": "0x3146d776b3485af28fad384e040eec2f2c183b1c27b4f8df9ec0b301d89d618f",
    //     "blockNumber": 12249462,
    //     "contractAddress": null,
    //     "cumulativeGasUsed": 286775,
    //     "effectiveGasPrice": 2500000011,
    //     "from": "0x3ba6ab697180c18096b2d3fcad41c46ac3002543",
    //     "gasUsed": 184163,
    //     "logsBloom": "0x00001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000002088040000000000000000000000000008000000000000000000040000000000000000000000000000020000000000000000000800000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000002000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000",
    //     "status": true,
    //     "to": "0xa2e49db1a0707a1ffccf061fb13168b176755ce8",
    //     "transactionIndex": 3,
    //     "type": "0x2",
    //     "events": {
    //       "Transfer": {
    //         "address": "0xa2E49db1a0707a1fFCcF061fB13168B176755CE8",
    //         "blockNumber": 12249462,
    //         "transactionHash": "0x960bd6f0ac05e1df335521d8dccb75ecdd2151b95da867beb9f5ec80db9c97de",
    //         "transactionIndex": 3,
    //         "blockHash": "0x3146d776b3485af28fad384e040eec2f2c183b1c27b4f8df9ec0b301d89d618f",
    //         "logIndex": 0,
    //         "removed": false,
    //         "id": "log_997bafbf",
    //         "returnValues": {
    //           "0": "0x0000000000000000000000000000000000000000",
    //           "1": "0x3ba6AB697180C18096B2D3fcad41C46ac3002543",
    //           "2": "1",
    //           "from": "0x0000000000000000000000000000000000000000",
    //           "to": "0x3ba6AB697180C18096B2D3fcad41C46ac3002543",
    //           "tokenId": "1"
    //         },
    //         "event": "Transfer",
    //         "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    //         "raw": {
    //           "data": "0x",
    //           "topics": [
    //             "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    //             "0x0000000000000000000000000000000000000000000000000000000000000000",
    //             "0x0000000000000000000000003ba6ab697180c18096b2d3fcad41c46ac3002543",
    //             "0x0000000000000000000000000000000000000000000000000000000000000001"
    //           ]
    //         }
    //       }
    //     }
    //   }
    // }
  });
});
