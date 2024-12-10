const GeoToken = artifacts.require("GeoToken");

module.exports = async function (callback) {
    try {
        // Implanta o contrato GeoToken
        const instance = await GeoToken.new();
        console.log("Contrato implantado no endereço:", instance.address);
        callback();
    } catch (error) {
        console.error("Erro ao implantar o contrato:", error);
        callback(error);
    }
};
