const gazua20Address = "TENDUS7TFEYAyqaWpbi4y1cWLLqYXmvDey";
const gazuaSwapContract = "TPJz9YPDCnSjKEhreAcbzSK743z2pd27rS";

const Utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = tronWeb.contract().at(gazua20Address);
    },
};
