const exchangeABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"name": "min_trx",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "tokenToTrxTransferInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "trx_bought",
				"type": "uint256"
			},
			{
				"name": "max_tokens",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "tokenToTrxTransferOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "min_liquidity",
				"type": "uint256"
			},
			{
				"name": "max_tokens",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "addLiquidity",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "min_tokens",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "trxToTokenSwapInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "trxToTokenTransferOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "input_amount",
				"type": "uint256"
			},
			{
				"name": "input_reserve",
				"type": "uint256"
			},
			{
				"name": "output_reserve",
				"type": "uint256"
			}
		],
		"name": "getInputPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			}
		],
		"name": "getTokenToTrxInputPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "factoryAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "trx_sold",
				"type": "uint256"
			}
		],
		"name": "getTrxToTokenInputPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			},
			{
				"name": "max_tokens_sold",
				"type": "uint256"
			},
			{
				"name": "max_trx_sold",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "exchange_addr",
				"type": "address"
			}
		],
		"name": "tokenToExchangeTransferOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"name": "min_trx",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "tokenToTrxSwapInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "trx_bought",
				"type": "uint256"
			},
			{
				"name": "max_tokens",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "tokenToTrxSwapOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			}
		],
		"name": "getTrxToTokenOutputPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "trxToTokenSwapOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			},
			{
				"name": "max_tokens_sold",
				"type": "uint256"
			},
			{
				"name": "max_trx_sold",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "token_addr",
				"type": "address"
			}
		],
		"name": "tokenToTokenSwapOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"name": "min_tokens_bought",
				"type": "uint256"
			},
			{
				"name": "min_trx_bought",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "exchange_addr",
				"type": "address"
			}
		],
		"name": "tokenToExchangeSwapInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "min_tokens",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "trxToTokenTransferInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"name": "min_tokens_bought",
				"type": "uint256"
			},
			{
				"name": "min_trx_bought",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "token_addr",
				"type": "address"
			}
		],
		"name": "tokenToTokenSwapInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			},
			{
				"name": "max_tokens_sold",
				"type": "uint256"
			},
			{
				"name": "max_trx_sold",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "exchange_addr",
				"type": "address"
			}
		],
		"name": "tokenToExchangeSwapOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"name": "min_tokens_bought",
				"type": "uint256"
			},
			{
				"name": "min_trx_bought",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "exchange_addr",
				"type": "address"
			}
		],
		"name": "tokenToExchangeTransferInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "trx_bought",
				"type": "uint256"
			}
		],
		"name": "getTokenToTrxOutputPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_bought",
				"type": "uint256"
			},
			{
				"name": "max_tokens_sold",
				"type": "uint256"
			},
			{
				"name": "max_trx_sold",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "token_addr",
				"type": "address"
			}
		],
		"name": "tokenToTokenTransferOutput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"name": "min_tokens_bought",
				"type": "uint256"
			},
			{
				"name": "min_trx_bought",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			},
			{
				"name": "recipient",
				"type": "address"
			},
			{
				"name": "token_addr",
				"type": "address"
			}
		],
		"name": "tokenToTokenTransferInput",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "min_trx",
				"type": "uint256"
			},
			{
				"name": "min_tokens",
				"type": "uint256"
			},
			{
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidity",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "output_amount",
				"type": "uint256"
			},
			{
				"name": "input_reserve",
				"type": "uint256"
			},
			{
				"name": "output_reserve",
				"type": "uint256"
			}
		],
		"name": "getOutputPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "trx_sold",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "tokens_bought",
				"type": "uint256"
			}
		],
		"name": "TokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "tokens_sold",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "trx_bought",
				"type": "uint256"
			}
		],
		"name": "TrxPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "trx_amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "token_amount",
				"type": "uint256"
			}
		],
		"name": "AddLiquidity",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "provider",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "trx_amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "token_amount",
				"type": "uint256"
			}
		],
		"name": "RemoveLiquidity",
		"type": "event"
	}
]

export default exchangeABI;