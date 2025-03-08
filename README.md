### Tron TRX Wallet

This repository provides a simple Node.js script to generate a new Tron (TRX) wallet using the tronweb library.

- Generates a new Tron (TRX) account
- Displays the address, private key, and public key
- Uses async/await for better readability

# Installation

Make sure you have Node.js installed, then run:

```
git clone https://github.com/erkankavas/nodejs-tron-trx-wallet.git
cd nodejs-tron-trx-wallet
npm install tronweb
```

# Usage
Run the script to generate a new Tron wallet:

```
node app.js
```
The output will display:
```
Address: Txxxxxxxxxxxxxxxxxxxxxxxxxxxx
Private Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Public Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- TronWeb → Connects to the Tron blockchain via TronGrid.
- createAccount() → Generates a new account asynchronously.
- Logs → Outputs the address, private key, and public key.

> Never share your private key with anyone!
This script is for educational purposes. Use a secure method to store private keys in production.

This project is licensed under the MIT License. Feel free to use and modify it.
