const { awardItem } = require(".");

describe("awardItem", () => {
  it("should award an item", async () => {
    const response = await awardItem({
      contract: "0x123",
    });
    expect(response.contract).toBe("0x123");
  });
});
