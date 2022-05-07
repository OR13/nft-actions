const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    contract: core.getInput("contract"),
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
