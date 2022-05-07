/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { ethers } from "hardhat";

describe("GithubActionsNFT", function () {
  it("should be deployable", async function () {
    const GithubActionsNFT = await ethers.getContractFactory(
      "GithubActionsNFT"
    );
    const myTokens = await GithubActionsNFT.deploy();
    await myTokens.deployed();
    expect(await myTokens.name()).to.equal("GithubActionsNFT");
    expect(await myTokens.symbol()).to.equal("GithubActionsNFT");
  });

  it("should allow mint of tokenURI", async function () {
    const GithubActionsNFT = await ethers.getContractFactory(
      "GithubActionsNFT"
    );
    const myTokens = await GithubActionsNFT.deploy();
    await myTokens.deployed();
    const [owner] = await ethers.getSigners();

    const commit = "86dcdca628f56f3242c851f46c2ffc2ba8075fca";
    const tx = await myTokens.awardItem(
      owner.address,
      "https://example.com/" + commit
    );
    expect(tx.hash).not.to.be.undefined;
  });

  it("should reject attempts to mint same tokenURI twice", async function () {
    const GithubActionsNFT = await ethers.getContractFactory(
      "GithubActionsNFT"
    );
    const myTokens = await GithubActionsNFT.deploy();
    await myTokens.deployed();
    const [owner] = await ethers.getSigners();
    const commit = "86dcdca628f56f3242c851f46c2ffc2ba8075fca";
    const tx1 = await myTokens.awardItem(
      owner.address,
      "https://example.com/" + commit
    );
    expect(tx1.hash).not.to.be.undefined;
    try {
      await myTokens.awardItem(owner.address, "https://example.com/" + commit);
    } catch (e: any) {
      expect(e.message).to.equal(
        "VM Exception while processing transaction: reverted with reason string 'Already minted'"
      );
    }
  });
});
