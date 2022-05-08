const path = require("path");
const fs = require("fs");
const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    providerOrUrl: core.getInput("web3-provider"),
    mnemonic: core.getInput("mnemonic"),
    derivationPath: core.getInput("derivation-path"),

    address: core.getInput("address"),
    artifact: JSON.parse(
      fs.readFileSync(path.resolve(core.getInput("artifact"))).toString()
    ),
    tokenUri: core.getInput("token-uri"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    const response = await lib.awardItem(opts);
    core.setOutput("json", JSON.stringify(response));
    core.setOutput("text", "Unsupported");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
