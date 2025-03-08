const { TronWeb } = require('tronweb'); // Fix import

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

async function generateAccount() {
    try {
        const account = await tronWeb.createAccount();
        console.log("Address:", account.address.base58);
        console.log("Private Key:", account.privateKey);
        console.log("Public Key:", account.publicKey);
    } catch (error) {
        console.error("Error generating account:", error);
    }
}

generateAccount();