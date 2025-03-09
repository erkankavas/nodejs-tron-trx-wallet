const { TronWeb } = require('tronweb'); // Fix import

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

async function checkBalance(address) {
    try {
        let balance = await tronWeb.trx.getBalance(address);
        console.log(`Balance of ${address}: ${balance / 1e6} TRX`);
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

checkBalance("TP323zbQPZ2Nk7Z6FijPEfQD9qyHUvWS1M");