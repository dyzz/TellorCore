require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider");

 //const mnemonic = process.env.ETH_MNEMONIC;
 const accessToken = process.env.WEB3_INFURA_PROJECT_ID;
 const mnemonic = "nick lucian brenda kevin sam fiscal patch fly damp ocean produce wish";


// ganache-cli -m "nick lucian brenda kevin sam fiscal patch fly damp ocean produce wish" -l 12000000 --allowUnlimitedContractSize
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 12000000, // default ganache-cli value
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider("d13dc98a245bd29193d5b41203a1d3a4ae564257d60e00d6f68d120ef6b796c5", `https://rinkeby.infura.io/v3/${accessToken}`),
      network_id: 4,
<<<<<<< HEAD
      gas: 9500000,
=======
      gas: 10000000,
>>>>>>> da9d237c1bf735a52cc5375a7334aab309e4fdfe
      gasPrice: 8000000000,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider("3a10b4bc1258e8bfefb95b498fb8c0f0cd6964a811eabca87df5630bcacd7216", `https://mainnet.infura.io/v3/${accessToken}`),
      network_id: 1,
      gas: 200000,
      gasPrice: 8000000000,
    },
    mocha: {
      enableTimeouts: false,
      before_timeout: 210000, // Here is 2min but can be whatever timeout is suitable for you.
    },
  }
};