const path = require("path");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  },
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  compilers: {
    solc: {
      version: '0.5.2',
    },
  },
};
