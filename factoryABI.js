const factoryABI = [
    {
        "outputs": [
            {
                "type": "address"
            }
        ],
        "constant": true,
        "inputs": [
            {
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getExchange",
        "stateMutability": "View",
        "type": "Function"
    },
    {
        "outputs": [
            {
                "type": "address"
            }
        ],
        "inputs": [
            {
                "name": "token",
                "type": "address"
            }
        ],
        "name": "createExchange",
        "stateMutability": "Nonpayable",
        "type": "Function"
    },
    {
        "outputs": [
            {
                "type": "address"
            }
        ],
        "constant": true,
        "name": "exchangeTemplate",
        "stateMutability": "View",
        "type": "Function"
    },
    {
        "inputs": [
            {
                "name": "template",
                "type": "address"
            }
        ],
        "name": "initializeFactory",
        "stateMutability": "Nonpayable",
        "type": "Function"
    },
    {
        "outputs": [
            {
                "type": "address"
            }
        ],
        "constant": true,
        "inputs": [
            {
                "name": "exchange",
                "type": "address"
            }
        ],
        "name": "getToken",
        "stateMutability": "View",
        "type": "Function"
    },
    {
        "outputs": [
            {
                "type": "uint256"
            }
        ],
        "constant": true,
        "name": "tokenCount",
        "stateMutability": "View",
        "type": "Function"
    },
    {
        "outputs": [
            {
                "type": "address"
            }
        ],
        "constant": true,
        "inputs": [
            {
                "name": "token_id",
                "type": "uint256"
            }
        ],
        "name": "getTokenWithId",
        "stateMutability": "View",
        "type": "Function"
    },
    {
        "inputs": [
            {
                "indexed": true,
                "name": "token",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "exchange",
                "type": "address"
            }
        ],
        "name": "NewExchange",
        "type": "Event"
    }
]

export default factoryABI;