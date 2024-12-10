module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
      gas: 12000000,
      gasPrice: 20000000000 // 20 gwei
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
      gas: 12000000,
      gasPrice: 20000000000 // 20 gwei
    }
  },
  compilers: {
    solc: {
      version: "0.8.21",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  mocha: {
    timeout: 100000
  }
};
