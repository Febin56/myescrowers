require('babel-register')

var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "finish nothing ribbon today scout tobacco ivory staff quote wasp lecture spend";

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6700000
    },
    test: {
      host: '172.17.172.120',
      port: 8545,
      network_id: '*',
      gas: 4700000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/EtNq2cv60m36VxoZxwpo")
      },
      network_id: 3,
      gas: 4700000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 400
    }
  }
}

