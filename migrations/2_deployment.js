const EventContract = artifacts.require("./EventEmitter.sol");

module.exports = function(deployer) {
    deployer.deploy(EventContract);
};