# kyberSwapExample

Work under progress. 

Clone the repo and run http-server to start a node server then open localhost:port in your browser.

Make sure MetaMask is unlocked and Ropsten network is selected with some ETH already present in the account.

Fill in a small ETH amount like 0.01 in the text field and press the swap button.

It tries to call Kyber smart-contract's [trade](https://github.com/KyberNetwork/smart-contracts/blob/master/integration.md) function. Problem right now is that I am not able to verify if transactions on Ropsten are going anywhere (Etherscan is not showing anything, MetaMask says transaction has been confirmed) and also if the function call is correct as I don't see any OMG tokens coming back to my wallet.

All of the source code is in index.html
