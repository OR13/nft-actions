const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const getWeb3 = async (providerOrUrl, mnemonic, derivationPath) => {
  const provider = new HDWalletProvider({
    mnemonic,
    providerOrUrl,
    numberOfAddresses: 1,
    shareNonce: true,
    derivationPath,
  });
  const web3 = new Web3(provider);
  return web3;
};

const getAccounts = async (web3) => {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getContract = async (web3, artifact, contractAddress) => {
  const contractInstance = new web3.eth.Contract(artifact.abi, contractAddress);
  return contractInstance;
};

const awardItem = async (options = {}) => {
  const result = {};
  const web3 = await getWeb3(
    options.providerOrUrl,
    options.mnemonic,
    options.derivationPath
  );
  const [account] = await getAccounts(web3);
  const contract = await getContract(web3, options.artifact, options.address);
  const tx = await contract.methods
    .awardItem(account, options.tokenUri)
    .send({ from: account });
  console.log(JSON.stringify(tx, null, 2));
  result.tx = tx;
  return result;
};

module.exports = awardItem;
