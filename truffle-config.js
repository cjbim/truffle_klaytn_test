const HDWalletProvider = require('truffle-hdwallet-provider-klaytn');
require('dotenv').config();
const { BAOBAB_PRIVATE_KEY } = process.env;
console.log(BAOBAB_PRIVATE_KEY)
const URL = 'https://api.baobab.klaytn.net:8651';

module.exports = {
	networks: {
		ganache: {
			host: '127.0.0.1', // Localhost (default: none)
			port: 8545, // Standard Ethereum port (default: none)
			network_id: '*', // Any network (default: none)
		},

		baobab: {
			provider: new HDWalletProvider(BAOBAB_PRIVATE_KEY, URL),
			network_id: 1001,
			gas: 50000000,
			maxFeePerGas: 25000000000,
     		maxPriorityFeePerGas: 25000000000,
		},

 	}
};
