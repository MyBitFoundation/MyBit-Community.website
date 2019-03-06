const NFTStore = artifacts.require("NFTStore");

module.exports = function(deployer) {
  deployer.deploy(NFTStore, 'MyBit Community Membership', 'MYB-MCM');
};
