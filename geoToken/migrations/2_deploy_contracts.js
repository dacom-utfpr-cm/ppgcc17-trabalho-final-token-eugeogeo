const GeoToken = artifacts.require("GeoToken");

module.exports = function (deployer) {
    deployer.deploy(GeoToken);
};
