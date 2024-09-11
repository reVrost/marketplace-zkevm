export const ERC1155ABI = {
  _format: "hh-sol-artifact-1",
  contractName: "ImmutableERC1155",
  sourceName: "contracts/token/erc1155/preset/ImmutableERC1155.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "string",
          name: "name_",
          type: "string",
        },
        {
          internalType: "string",
          name: "baseURI_",
          type: "string",
        },
        {
          internalType: "string",
          name: "contractURI_",
          type: "string",
        },
        {
          internalType: "address",
          name: "_operatorAllowlist",
          type: "address",
        },
        {
          internalType: "address",
          name: "_receiver",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "_feeNumerator",
          type: "uint96",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "AllowlistDoesNotImplementIOperatorAllowlist",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
      ],
      name: "ApproveTargetNotInAllowlist",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ApproverNotInAllowlist",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "CallerNotInAllowlist",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidShortString",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidSignature",
      type: "error",
    },
    {
      inputs: [],
      name: "PermitExpired",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "str",
          type: "string",
        },
      ],
      name: "StringTooLong",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
      ],
      name: "TransferFromNotInAllowlist",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "TransferToNotInAllowlist",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldRegistry",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newRegistry",
          type: "address",
        },
      ],
      name: "OperatorAllowlistRegistryUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "TransferBatch",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TransferSingle",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "value",
          type: "string",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "URI",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MINTER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "accounts",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
      ],
      name: "balanceOfBatch",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "baseURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "burnBatch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "contractURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "fields",
          type: "bytes1",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "version",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "verifyingContract",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256[]",
          name: "extensions",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAdmins",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getRoleMember",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "grantMinterRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "nonces",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "operatorAllowlist",
      outputs: [
        {
          internalType: "contract IOperatorAllowlist",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "sig",
          type: "bytes",
        },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "revokeMinterRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "salePrice",
          type: "uint256",
        },
      ],
      name: "royaltyInfo",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeBatchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeMintBatch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "baseURI_",
          type: "string",
        },
      ],
      name: "setBaseURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "contractURI_",
          type: "string",
        },
      ],
      name: "setContractURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "feeNumerator",
          type: "uint96",
        },
      ],
      name: "setDefaultRoyaltyReceiver",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "feeNumerator",
          type: "uint96",
        },
      ],
      name: "setNFTRoyaltyReceiver",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "tokenIds",
          type: "uint256[]",
        },
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "feeNumerator",
          type: "uint96",
        },
      ],
      name: "setNFTRoyaltyReceiverBatch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "uri",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode:
    "0x6101806040527f3f43a9c6bafb5c7aab4e0cfe239dc5d4c15caf0381c6104188191f78a6640bd8610160523480156200003757600080fd5b5060405162004c1738038062004c178339810160408190526200005a9162000654565b86868686868686858581604051806040016040528060018152602001603160f81b8152508262000090816200019f60201b60201c565b506200009e826004620001b1565b61012052620000af816005620001b1565b61014052815160208084019190912060e052815190820120610100524660a0526200013d60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250620001569050600088620001ea565b62000162828262000215565b6200016d836200031a565b600b6200017b8582620007cf565b50600c6200018a8682620007cf565b50505050505050505050505050505062000919565b6003620001ad8282620007cf565b5050565b6000602083511015620001d157620001c98362000413565b9050620001e4565b81620001de8482620007cf565b5060ff90505b92915050565b620001f6828262000456565b6000828152600a60205260409020620002109082620004fa565b505050565b6127106001600160601b0382161115620002895760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646044820152692073616c65507269636560b01b60648201526084015b60405180910390fd5b6001600160a01b038216620002e15760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c696420726563656976657200000000000000604482015260640162000280565b604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600755565b6040516301ffc9a760e01b81526305a3b80960e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa15801562000366573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200038c91906200089b565b620003aa5760405163d6f93fb760e01b815260040160405180910390fd5b600054604080516001600160a01b03928316815291831660208301527f3edc37a14cc8047c7c8a3f354311efe86c14848efd4e3765a3e1e57eea04ea76910160405180910390a1600080546001600160a01b0319166001600160a01b0392909216919091179055565b600080829050601f8151111562000441578260405163305a27a960e01b8152600401620002809190620008bf565b80516200044e82620008f4565b179392505050565b60008281526009602090815260408083206001600160a01b038516845290915290205460ff16620001ad5760008281526009602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620004b63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000511836001600160a01b03841662000518565b9392505050565b60008181526001830160205260408120546200056157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001e4565b506000620001e4565b80516001600160a01b03811681146200058257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005ba578181015183820152602001620005a0565b50506000910152565b600082601f830112620005d557600080fd5b81516001600160401b0380821115620005f257620005f262000587565b604051601f8301601f19908116603f011681019082821181831017156200061d576200061d62000587565b816040528381528660208588010111156200063757600080fd5b6200064a8460208301602089016200059d565b9695505050505050565b600080600080600080600060e0888a0312156200067057600080fd5b6200067b886200056a565b60208901519097506001600160401b03808211156200069957600080fd5b620006a78b838c01620005c3565b975060408a0151915080821115620006be57600080fd5b620006cc8b838c01620005c3565b965060608a0151915080821115620006e357600080fd5b50620006f28a828b01620005c3565b94505062000703608089016200056a565b92506200071360a089016200056a565b60c08901519092506001600160601b03811681146200073157600080fd5b8091505092959891949750929550565b600181811c908216806200075657607f821691505b6020821081036200077757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021057600081815260208120601f850160051c81016020861015620007a65750805b601f850160051c820191505b81811015620007c757828155600101620007b2565b505050505050565b81516001600160401b03811115620007eb57620007eb62000587565b6200080381620007fc845462000741565b846200077d565b602080601f8311600181146200083b5760008415620008225750858301515b600019600386901b1c1916600185901b178555620007c7565b600085815260208120601f198616915b828110156200086c578886015182559484019460019091019084016200084b565b50858210156200088b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620008ae57600080fd5b815180151581146200051157600080fd5b6020815260008251806020840152620008e08160408501602087016200059d565b601f01601f19169190910160400192915050565b80516020808301519190811015620007775760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051610160516142986200097f6000396000611ba701526000610c6a01526000610c3f015260006114d8015260006114b00152600061140b015260006114350152600061145f01526142986000f3fe608060405234801561001057600080fd5b506004361061023c5760003560e01c80636c0360eb1161013b578063bd85b039116100b8578063d6b0b3f11161007c578063d6b0b3f11461056a578063e8a3d4851461057d578063e985e9c514610585578063f242432a146105c1578063f5298aca146105d457600080fd5b8063bd85b039146104fc578063c39dfed81461051c578063ca15c8731461052f578063d539139314610542578063d547741f1461055757600080fd5b806391d14854116100ff57806391d14854146104a8578063938e3d7b146104bb578063a217fddf146104ce578063a22cb465146104d6578063a7012816146104e957600080fd5b80636c0360eb146104365780637ecebe001461043e57806384b0196e14610467578063885e7a08146104825780639010d07c1461049557600080fd5b80633644e515116101c95780634f558e791161018d5780634f558e79146103c857806355f804b3146103ea5780635cfa9297146103fd57806369e2f0fb146104105780636b20c4541461042357600080fd5b80633644e5151461036757806336568abe1461036f5780633dd1eb6114610382578063439aed34146103955780634e1273f4146103a857600080fd5b806329326f291161021057806329326f29146102cd5780632a55205a146102f85780632eb2c2d61461032a5780632f2ff15d1461033f57806331ae450b1461035257600080fd5b8062fdd58e1461024157806301ffc9a7146102675780630e89341c1461028a578063248a9ca3146102aa575b600080fd5b61025461024f3660046131e5565b6105e7565b6040519081526020015b60405180910390f35b61027a610275366004613225565b610682565b604051901515815260200161025e565b61029d610298366004613242565b61068d565b60405161025e91906132ab565b6102546102b8366004613242565b60009081526009602052604090206001015490565b6000546102e0906001600160a01b031681565b6040516001600160a01b03909116815260200161025e565b61030b6103063660046132be565b610721565b604080516001600160a01b03909316835260208301919091520161025e565b61033d610338366004613433565b6107cf565b005b61033d61034d3660046134dc565b61081b565b61035a610845565b60405161025e9190613508565b6102546108f3565b61033d61037d3660046134dc565b610902565b61033d610390366004613555565b610980565b61033d6103a3366004613587565b6109a3565b6103bb6103b63660046135c3565b6109cc565b60405161025e91906136c8565b61027a6103d6366004613242565b6000908152600d6020526040902054151590565b61033d6103f83660046136db565b610af5565b61033d61040b36600461372b565b610b15565b61033d61041e366004613555565b610b39565b61033d61043136600461378b565b610b5c565b61029d610b9f565b61025461044c366004613555565b6001600160a01b031660009081526006602052604090205490565b61046f610c31565b60405161025e97969594939291906137fe565b61033d61049036600461386e565b610cba565b6102e06104a33660046132be565b610ccf565b61027a6104b63660046134dc565b610cee565b61033d6104c93660046136db565b610d19565b610254600081565b61033d6104e43660046138a6565b610d30565b61033d6104f7366004613921565b610e81565b61025461050a366004613242565b6000908152600d602052604090205490565b61033d61052a366004613985565b610ee1565b61025461053d366004613242565b610f72565b6102546a4d494e5445525f524f4c4560a81b81565b61033d6105653660046134dc565b610f89565b61033d610578366004613a27565b610fae565b61029d611092565b61027a610593366004613a94565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b61033d6105cf366004613abe565b611120565b61033d6105e2366004613b16565b611165565b60006001600160a01b0383166106575760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b5060008181526001602090815260408083206001600160a01b03861684529091529020545b92915050565b600061067c826111a8565b6060600c805461069c90613b49565b80601f01602080910402602001604051908101604052809291908181526020018280546106c890613b49565b80156107155780601f106106ea57610100808354040283529160200191610715565b820191906000526020600020905b8154815290600101906020018083116106f857829003601f168201915b50505050509050919050565b60008281526008602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b03169282019290925282916107965750604080518082019091526007546001600160a01b0381168252600160a01b90046001600160601b031660208201525b6020810151600090612710906107b5906001600160601b031687613b99565b6107bf9190613bb0565b91519350909150505b9250929050565b6001600160a01b0385163314806107eb57506107eb8533610593565b6108075760405162461bcd60e51b815260040161064e90613bd2565b61081485858585856111cd565b5050505050565b600082815260096020526040902060010154610836816113cf565b61084083836113dc565b505050565b6060600061085281610f72565b90506000816001600160401b0381111561086e5761086e6132e0565b604051908082528060200260200182016040528015610897578160200160208202803683370190505b50905060005b828110156108ec576108b0600082610ccf565b8282815181106108c2576108c2613c20565b6001600160a01b0390921660209283029190910190910152806108e481613c36565b91505061089d565b5092915050565b60006108fd6113fe565b905090565b6001600160a01b03811633146109725760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161064e565b61097c828261152c565b5050565b600061098b816113cf565b61097c6a4d494e5445525f524f4c4560a81b8361081b565b6a4d494e5445525f524f4c4560a81b6109bb816113cf565b6109c684848461154e565b50505050565b60608151835114610a315760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b606482015260840161064e565b600083516001600160401b03811115610a4c57610a4c6132e0565b604051908082528060200260200182016040528015610a75578160200160208202803683370190505b50905060005b8451811015610aed57610ac0858281518110610a9957610a99613c20565b6020026020010151858381518110610ab357610ab3613c20565b60200260200101516105e7565b828281518110610ad257610ad2613c20565b6020908102919091010152610ae681613c36565b9050610a7b565b509392505050565b6000610b00816113cf565b610b0982611619565b600c6108408382613c95565b6a4d494e5445525f524f4c4560a81b610b2d816113cf565b61081485858585611625565b6000610b44816113cf565b61097c6a4d494e5445525f524f4c4560a81b83610f89565b6001600160a01b038316331480610b785750610b788333610593565b610b945760405162461bcd60e51b815260040161064e90613bd2565b610840838383611707565b6060600c8054610bae90613b49565b80601f0160208091040260200160405190810160405280929190818152602001828054610bda90613b49565b8015610c275780601f10610bfc57610100808354040283529160200191610c27565b820191906000526020600020905b815481529060010190602001808311610c0a57829003601f168201915b5050505050905090565b600060608082808083610c657f000000000000000000000000000000000000000000000000000000000000000060046118a6565b610c907f000000000000000000000000000000000000000000000000000000000000000060056118a6565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6000610cc5816113cf565b6108408383611951565b6000828152600a60205260408120610ce79083611a0b565b9392505050565b60009182526009602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000610d24816113cf565b600b6108408382613c95565b81333b15801590610daa57506000546040516305a3b80960e01b81523360048201526001600160a01b03909116906305a3b80990602401602060405180830381865afa158015610d84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da89190613d54565b155b15610dca5760405163f6fa4cbd60e01b815233600482015260240161064e565b6001600160a01b0381163b15801590610e4e57506000546040516305a3b80960e01b81526001600160a01b038381166004830152909116906305a3b80990602401602060405180830381865afa158015610e28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4c9190613d54565b155b15610e77576040516341b8d58160e11b81526001600160a01b038216600482015260240161064e565b6108408383611a17565b6a4d494e5445525f524f4c4560a81b610e99816113cf565b60005b84811015610ed957610ec7868683818110610eb957610eb9613c20565b90506020020135858561154e565b80610ed181613c36565b915050610e9c565b505050505050565b6a4d494e5445525f524f4c4560a81b610ef9816113cf565b610f698787878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808b0282810182019093528a82529093508a925089918291850190849080828437600092019190915250889250611a22915050565b50505050505050565b6000818152600a6020526040812061067c90611b7d565b600082815260096020526040902060010154610fa4816113cf565b610840838361152c565b42821015610fcf5760405163068568f360e21b815260040160405180910390fd5b6000610fdd85878686611b87565b9050610fea868284611c39565b1561100057610ffa868686611d43565b50610814565b60008251604003611047576110408261101c8560006020611e23565b61102590613d71565b6110328660206040611e23565b61103b90613d71565b611f30565b9050611073565b825160410361105a576110408284611f4d565b604051638baa579f60e01b815260040160405180910390fd5b61107d8188611f69565b1561105a5761108d878787611d43565b610f69565b600b805461109f90613b49565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb90613b49565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b505050505081565b6001600160a01b03851633148061113c575061113c8533610593565b6111585760405162461bcd60e51b815260040161064e90613bd2565b6108148585858585611f90565b6001600160a01b03831633148061118157506111818333610593565b61119d5760405162461bcd60e51b815260040161064e90613bd2565b610840838383612192565b60006001600160e01b03198216635a05180f60e01b148061067c575061067c826122ae565b848433321480159061124857506000546040516305a3b80960e01b81523360048201526001600160a01b03909116906305a3b80990602401602060405180830381865afa158015611222573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112469190613d54565b155b156112685760405163937db65f60e01b815233600482015260240161064e565b6001600160a01b0382163b158015906112ec57506000546040516305a3b80960e01b81526001600160a01b038481166004830152909116906305a3b80990602401602060405180830381865afa1580156112c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ea9190613d54565b155b156113155760405163f934453160e01b81526001600160a01b038316600482015260240161064e565b6001600160a01b0381163b1580159061139957506000546040516305a3b80960e01b81526001600160a01b038381166004830152909116906305a3b80990602401602060405180830381865afa158015611373573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113979190613d54565b155b156113c257604051632a67242160e11b81526001600160a01b038216600482015260240161064e565b610f6987878787876122d3565b6113d98133612478565b50565b6113e682826124d1565b6000828152600a602052604090206108409082612557565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561145757507f000000000000000000000000000000000000000000000000000000000000000046145b1561148157507f000000000000000000000000000000000000000000000000000000000000000090565b6108fd604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b90565b611536828261256c565b6000828152600a6020526040902061084090826125d3565b6127106001600160601b03821611156115795760405162461bcd60e51b815260040161064e90613d95565b6001600160a01b0382166115cf5760405162461bcd60e51b815260206004820152601b60248201527f455243323938313a20496e76616c696420706172616d65746572730000000000604482015260640161064e565b6040805180820182526001600160a01b0393841681526001600160601b0392831660208083019182526000968752600890529190942093519051909116600160a01b029116179055565b600361097c8282613c95565b6001600160a01b03841661164b5760405162461bcd60e51b815260040161064e90613ddf565b336000611657856125e8565b90506000611664856125e8565b905061167583600089858589612633565b60008681526001602090815260408083206001600160a01b038b168452909152812080548792906116a7908490613e20565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610f69836000898989896127ac565b6001600160a01b03831661172d5760405162461bcd60e51b815260040161064e90613e33565b805182511461174e5760405162461bcd60e51b815260040161064e90613e76565b600033905061177181856000868660405180602001604052806000815250612633565b60005b835181101561183957600084828151811061179157611791613c20565b6020026020010151905060008483815181106117af576117af613c20565b60209081029190910181015160008481526001835260408082206001600160a01b038c1683529093529190912054909150818110156118005760405162461bcd60e51b815260040161064e90613ebe565b60009283526001602090815260408085206001600160a01b038b168652909152909220910390558061183181613c36565b915050611774565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161188a929190613f02565b60405180910390a46040805160208101909152600090526109c6565b606060ff83146118c0576118b983612907565b905061067c565b8180546118cc90613b49565b80601f01602080910402602001604051908101604052809291908181526020018280546118f890613b49565b80156119455780601f1061191a57610100808354040283529160200191611945565b820191906000526020600020905b81548152906001019060200180831161192857829003601f168201915b5050505050905061067c565b6127106001600160601b038216111561197c5760405162461bcd60e51b815260040161064e90613d95565b6001600160a01b0382166119d25760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c696420726563656976657200000000000000604482015260640161064e565b604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600755565b6000610ce78383612946565b61097c338383611d43565b6001600160a01b038416611a485760405162461bcd60e51b815260040161064e90613ddf565b8151835114611a695760405162461bcd60e51b815260040161064e90613e76565b33611a7981600087878787612633565b60005b8451811015611b1557838181518110611a9757611a97613c20565b602002602001015160016000878481518110611ab557611ab5613c20565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254611afd9190613e20565b90915550819050611b0d81613c36565b915050611a7c565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611b66929190613f02565b60405180910390a461081481600087878787612970565b600061067c825490565b6001600160a01b03831660009081526006602052604081208054611c30917f00000000000000000000000000000000000000000000000000000000000000009187918991889187611bd783613c36565b909155506040805160208101969096526001600160a01b03948516908601529290911660608401521515608083015260a082015260c0810184905260e00160405160208183030381529060405280519060200120612a2b565b95945050505050565b6000806000856001600160a01b0316631626ba7e60e01b8686604051602401611c63929190613f27565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611ca19190613f40565b600060405180830381855afa9150503d8060008114611cdc576040519150601f19603f3d011682016040523d82523d6000602084013e611ce1565b606091505b5091509150818015611cf4575080516020145b15611d3757600081806020019051810190611d0f9190613f5c565b90506374eca2c160e11b6001600160e01b0319821601611d355760019350505050610ce7565b505b50600095945050505050565b816001600160a01b0316836001600160a01b031603611db65760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b606482015260840161064e565b6001600160a01b03838116600081815260026020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b606081611e3181601f613e20565b1015611e705760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015260640161064e565b611e7a8284613e20565b84511015611ebe5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015260640161064e565b606082158015611edd5760405191506000825260208201604052611f27565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f16578051835260209283019201611efe565b5050858452601f01601f1916604052505b50949350505050565b6000806000611f40868686612a58565b91509150611f2781612a91565b6000806000611f5c8585612bdb565b91509150610aed81612a91565b60006001600160a01b03831615801590610ce75750506001600160a01b0391821691161490565b848433321480159061200b57506000546040516305a3b80960e01b81523360048201526001600160a01b03909116906305a3b80990602401602060405180830381865afa158015611fe5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120099190613d54565b155b1561202b5760405163937db65f60e01b815233600482015260240161064e565b6001600160a01b0382163b158015906120af57506000546040516305a3b80960e01b81526001600160a01b038481166004830152909116906305a3b80990602401602060405180830381865afa158015612089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ad9190613d54565b155b156120d85760405163f934453160e01b81526001600160a01b038316600482015260240161064e565b6001600160a01b0381163b1580159061215c57506000546040516305a3b80960e01b81526001600160a01b038381166004830152909116906305a3b80990602401602060405180830381865afa158015612136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215a9190613d54565b155b1561218557604051632a67242160e11b81526001600160a01b038216600482015260240161064e565b610f698787878787612c1d565b6001600160a01b0383166121b85760405162461bcd60e51b815260040161064e90613e33565b3360006121c4846125e8565b905060006121d1846125e8565b90506121f183876000858560405180602001604052806000815250612633565b60008581526001602090815260408083206001600160a01b038a168452909152902054848110156122345760405162461bcd60e51b815260040161064e90613ebe565b60008681526001602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4604080516020810190915260009052610f69565b60006001600160e01b03198216637965db0b60e01b148061067c575061067c82612d59565b81518351146122f45760405162461bcd60e51b815260040161064e90613e76565b6001600160a01b03841661231a5760405162461bcd60e51b815260040161064e90613f79565b33612329818787878787612633565b60005b845181101561241257600085828151811061234957612349613c20565b60200260200101519050600085838151811061236757612367613c20565b60209081029190910181015160008481526001835260408082206001600160a01b038e1683529093529190912054909150818110156123b85760405162461bcd60e51b815260040161064e90613fbe565b60008381526001602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906123f7908490613e20565b925050819055505050508061240b90613c36565b905061232c565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051612462929190613f02565b60405180910390a4610ed9818787878787612970565b6124828282610cee565b61097c5761248f81612d7e565b61249a836020612d90565b6040516020016124ab929190614008565b60408051601f198184030181529082905262461bcd60e51b825261064e916004016132ab565b6124db8282610cee565b61097c5760008281526009602090815260408083206001600160a01b03851684529091529020805460ff191660011790556125133390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610ce7836001600160a01b038416612f2b565b6125768282610cee565b1561097c5760008281526009602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610ce7836001600160a01b038416612f7a565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061262257612622613c20565b602090810291909101015292915050565b6001600160a01b0385166126ba5760005b83518110156126b85782818151811061265f5761265f613c20565b6020026020010151600d600086848151811061267d5761267d613c20565b6020026020010151815260200190815260200160002060008282546126a29190613e20565b909155506126b1905081613c36565b9050612644565b505b6001600160a01b038416610ed95760005b8351811015610f695760008482815181106126e8576126e8613c20565b60200260200101519050600084838151811061270657612706613c20565b602002602001015190506000600d6000848152602001908152602001600020549050818110156127895760405162461bcd60e51b815260206004820152602860248201527f455243313135353a206275726e20616d6f756e74206578636565647320746f74604482015267616c537570706c7960c01b606482015260840161064e565b6000928352600d6020526040909220910390556127a581613c36565b90506126cb565b6001600160a01b0384163b15610ed95760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906127f0908990899088908890889060040161407d565b6020604051808303816000875af192505050801561282b575060408051601f3d908101601f1916820190925261282891810190613f5c565b60015b6128d7576128376140c2565b806308c379a003612870575061284b6140dd565b806128565750612872565b8060405162461bcd60e51b815260040161064e91906132ab565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606482015260840161064e565b6001600160e01b0319811663f23a6e6160e01b14610f695760405162461bcd60e51b815260040161064e90614166565b606060006129148361306d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600082600001828154811061295d5761295d613c20565b9060005260206000200154905092915050565b6001600160a01b0384163b15610ed95760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906129b490899089908890889088906004016141ae565b6020604051808303816000875af19250505080156129ef575060408051601f3d908101601f191682019092526129ec91810190613f5c565b60015b6129fb576128376140c2565b6001600160e01b0319811663bc197c8160e01b14610f695760405162461bcd60e51b815260040161064e90614166565b600061067c612a386113fe565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806001600160ff1b03831681612a7560ff86901c601b613e20565b9050612a8387828885613095565b935093505050935093915050565b6000816004811115612aa557612aa561420c565b03612aad5750565b6001816004811115612ac157612ac161420c565b03612b0e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161064e565b6002816004811115612b2257612b2261420c565b03612b6f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161064e565b6003816004811115612b8357612b8361420c565b036113d95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161064e565b6000808251604103612c115760208301516040840151606085015160001a612c0587828585613095565b945094505050506107c8565b506000905060026107c8565b6001600160a01b038416612c435760405162461bcd60e51b815260040161064e90613f79565b336000612c4f856125e8565b90506000612c5c856125e8565b9050612c6c838989858589612633565b60008681526001602090815260408083206001600160a01b038c16845290915290205485811015612caf5760405162461bcd60e51b815260040161064e90613fbe565b60008781526001602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290612cee908490613e20565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612d4e848a8a8a8a8a6127ac565b505050505050505050565b60006001600160e01b0319821663152a902d60e11b148061067c575061067c82613159565b606061067c6001600160a01b03831660145b60606000612d9f836002613b99565b612daa906002613e20565b6001600160401b03811115612dc157612dc16132e0565b6040519080825280601f01601f191660200182016040528015612deb576020820181803683370190505b509050600360fc1b81600081518110612e0657612e06613c20565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612e3557612e35613c20565b60200101906001600160f81b031916908160001a9053506000612e59846002613b99565b612e64906001613e20565b90505b6001811115612edc576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612e9857612e98613c20565b1a60f81b828281518110612eae57612eae613c20565b60200101906001600160f81b031916908160001a90535060049490941c93612ed581614222565b9050612e67565b508315610ce75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161064e565b6000818152600183016020526040812054612f725750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561067c565b50600061067c565b60008181526001830160205260408120548015613063576000612f9e600183614239565b8554909150600090612fb290600190614239565b9050818114613017576000866000018281548110612fd257612fd2613c20565b9060005260206000200154905080876000018481548110612ff557612ff5613c20565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806130285761302861424c565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061067c565b600091505061067c565b600060ff8216601f81111561067c57604051632cd44ac360e21b815260040160405180910390fd5b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156130cc5750600090506003613150565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613120573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661314957600060019250925050613150565b9150600090505b94509492505050565b60006001600160e01b0319821663278eba3960e21b148061067c575061067c8260006001600160e01b03198216636cdb3d1360e11b14806131aa57506001600160e01b031982166303a24d0760e21b145b8061067c57506301ffc9a760e01b6001600160e01b031983161461067c565b80356001600160a01b03811681146131e057600080fd5b919050565b600080604083850312156131f857600080fd5b613201836131c9565b946020939093013593505050565b6001600160e01b0319811681146113d957600080fd5b60006020828403121561323757600080fd5b8135610ce78161320f565b60006020828403121561325457600080fd5b5035919050565b60005b8381101561327657818101518382015260200161325e565b50506000910152565b6000815180845261329781602086016020860161325b565b601f01601f19169290920160200192915050565b602081526000610ce7602083018461327f565b600080604083850312156132d157600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b038111828210171561331b5761331b6132e0565b6040525050565b60006001600160401b0382111561333b5761333b6132e0565b5060051b60200190565b600082601f83011261335657600080fd5b8135602061336382613322565b60405161337082826132f6565b83815260059390931b850182019282810191508684111561339057600080fd5b8286015b848110156133ab5780358352918301918301613394565b509695505050505050565b60006001600160401b038311156133cf576133cf6132e0565b6040516133e6601f8501601f1916602001826132f6565b8091508381528484840111156133fb57600080fd5b83836020830137600060208583010152509392505050565b600082601f83011261342457600080fd5b610ce7838335602085016133b6565b600080600080600060a0868803121561344b57600080fd5b613454866131c9565b9450613462602087016131c9565b935060408601356001600160401b038082111561347e57600080fd5b61348a89838a01613345565b945060608801359150808211156134a057600080fd5b6134ac89838a01613345565b935060808801359150808211156134c257600080fd5b506134cf88828901613413565b9150509295509295909350565b600080604083850312156134ef57600080fd5b823591506134ff602084016131c9565b90509250929050565b6020808252825182820181905260009190848201906040850190845b818110156135495783516001600160a01b031683529284019291840191600101613524565b50909695505050505050565b60006020828403121561356757600080fd5b610ce7826131c9565b80356001600160601b03811681146131e057600080fd5b60008060006060848603121561359c57600080fd5b833592506135ac602085016131c9565b91506135ba60408501613570565b90509250925092565b600080604083850312156135d657600080fd5b82356001600160401b03808211156135ed57600080fd5b818501915085601f83011261360157600080fd5b8135602061360e82613322565b60405161361b82826132f6565b83815260059390931b850182019282810191508984111561363b57600080fd5b948201945b8386101561366057613651866131c9565b82529482019490820190613640565b9650508601359250508082111561367657600080fd5b5061368385828601613345565b9150509250929050565b600081518084526020808501945080840160005b838110156136bd578151875295820195908201906001016136a1565b509495945050505050565b602081526000610ce7602083018461368d565b6000602082840312156136ed57600080fd5b81356001600160401b0381111561370357600080fd5b8201601f8101841361371457600080fd5b613723848235602084016133b6565b949350505050565b6000806000806080858703121561374157600080fd5b61374a856131c9565b9350602085013592506040850135915060608501356001600160401b0381111561377357600080fd5b61377f87828801613413565b91505092959194509250565b6000806000606084860312156137a057600080fd5b6137a9846131c9565b925060208401356001600160401b03808211156137c557600080fd5b6137d187838801613345565b935060408601359150808211156137e757600080fd5b506137f486828701613345565b9150509250925092565b60ff60f81b8816815260e06020820152600061381d60e083018961327f565b828103604084015261382f818961327f565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501529050613860818561368d565b9a9950505050505050505050565b6000806040838503121561388157600080fd5b61388a836131c9565b91506134ff60208401613570565b80151581146113d957600080fd5b600080604083850312156138b957600080fd5b6138c2836131c9565b915060208301356138d281613898565b809150509250929050565b60008083601f8401126138ef57600080fd5b5081356001600160401b0381111561390657600080fd5b6020830191508360208260051b85010111156107c857600080fd5b6000806000806060858703121561393757600080fd5b84356001600160401b0381111561394d57600080fd5b613959878288016138dd565b909550935061396c9050602086016131c9565b915061397a60408601613570565b905092959194509250565b6000806000806000806080878903121561399e57600080fd5b6139a7876131c9565b955060208701356001600160401b03808211156139c357600080fd5b6139cf8a838b016138dd565b909750955060408901359150808211156139e857600080fd5b6139f48a838b016138dd565b90955093506060890135915080821115613a0d57600080fd5b50613a1a89828a01613413565b9150509295509295509295565b600080600080600060a08688031215613a3f57600080fd5b613a48866131c9565b9450613a56602087016131c9565b93506040860135613a6681613898565b92506060860135915060808601356001600160401b03811115613a8857600080fd5b6134cf88828901613413565b60008060408385031215613aa757600080fd5b613ab0836131c9565b91506134ff602084016131c9565b600080600080600060a08688031215613ad657600080fd5b613adf866131c9565b9450613aed602087016131c9565b9350604086013592506060860135915060808601356001600160401b03811115613a8857600080fd5b600080600060608486031215613b2b57600080fd5b613b34846131c9565b95602085013595506040909401359392505050565b600181811c90821680613b5d57607f821691505b602082108103613b7d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761067c5761067c613b83565b600082613bcd57634e487b7160e01b600052601260045260246000fd5b500490565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060018201613c4857613c48613b83565b5060010190565b601f82111561084057600081815260208120601f850160051c81016020861015613c765750805b601f850160051c820191505b81811015610ed957828155600101613c82565b81516001600160401b03811115613cae57613cae6132e0565b613cc281613cbc8454613b49565b84613c4f565b602080601f831160018114613cf75760008415613cdf5750858301515b600019600386901b1c1916600185901b178555610ed9565b600085815260208120601f198616915b82811015613d2657888601518255948401946001909101908401613d07565b5085821015613d445787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215613d6657600080fd5b8151610ce781613898565b80516020808301519190811015613b7d5760001960209190910360031b1b16919050565b6020808252602a908201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646040820152692073616c65507269636560b01b606082015260800190565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b8082018082111561067c5761067c613b83565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b604081526000613f15604083018561368d565b8281036020840152611c30818561368d565b828152604060208201526000613723604083018461327f565b60008251613f5281846020870161325b565b9190910192915050565b600060208284031215613f6e57600080fd5b8151610ce78161320f565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161404081601785016020880161325b565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161407181602884016020880161325b565b01602801949350505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906140b79083018461327f565b979650505050505050565b600060033d11156115295760046000803e5060005160e01c90565b600060443d10156140eb5790565b6040516003193d81016004833e81513d6001600160401b03816024840111818411171561411a57505050505090565b82850191508151818111156141325750505050505090565b843d870101602082850101111561414c5750505050505090565b61415b602082860101876132f6565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b0386811682528516602082015260a0604082018190526000906141da9083018661368d565b82810360608401526141ec818661368d565b90508281036080840152614200818561327f565b98975050505050505050565b634e487b7160e01b600052602160045260246000fd5b60008161423157614231613b83565b506000190190565b8181038181111561067c5761067c613b83565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220431919222104d7b0d73bf58dd996b793da398d05030dbd5bfd9f9d228840c6c864736f6c63430008130033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061023c5760003560e01c80636c0360eb1161013b578063bd85b039116100b8578063d6b0b3f11161007c578063d6b0b3f11461056a578063e8a3d4851461057d578063e985e9c514610585578063f242432a146105c1578063f5298aca146105d457600080fd5b8063bd85b039146104fc578063c39dfed81461051c578063ca15c8731461052f578063d539139314610542578063d547741f1461055757600080fd5b806391d14854116100ff57806391d14854146104a8578063938e3d7b146104bb578063a217fddf146104ce578063a22cb465146104d6578063a7012816146104e957600080fd5b80636c0360eb146104365780637ecebe001461043e57806384b0196e14610467578063885e7a08146104825780639010d07c1461049557600080fd5b80633644e515116101c95780634f558e791161018d5780634f558e79146103c857806355f804b3146103ea5780635cfa9297146103fd57806369e2f0fb146104105780636b20c4541461042357600080fd5b80633644e5151461036757806336568abe1461036f5780633dd1eb6114610382578063439aed34146103955780634e1273f4146103a857600080fd5b806329326f291161021057806329326f29146102cd5780632a55205a146102f85780632eb2c2d61461032a5780632f2ff15d1461033f57806331ae450b1461035257600080fd5b8062fdd58e1461024157806301ffc9a7146102675780630e89341c1461028a578063248a9ca3146102aa575b600080fd5b61025461024f3660046131e5565b6105e7565b6040519081526020015b60405180910390f35b61027a610275366004613225565b610682565b604051901515815260200161025e565b61029d610298366004613242565b61068d565b60405161025e91906132ab565b6102546102b8366004613242565b60009081526009602052604090206001015490565b6000546102e0906001600160a01b031681565b6040516001600160a01b03909116815260200161025e565b61030b6103063660046132be565b610721565b604080516001600160a01b03909316835260208301919091520161025e565b61033d610338366004613433565b6107cf565b005b61033d61034d3660046134dc565b61081b565b61035a610845565b60405161025e9190613508565b6102546108f3565b61033d61037d3660046134dc565b610902565b61033d610390366004613555565b610980565b61033d6103a3366004613587565b6109a3565b6103bb6103b63660046135c3565b6109cc565b60405161025e91906136c8565b61027a6103d6366004613242565b6000908152600d6020526040902054151590565b61033d6103f83660046136db565b610af5565b61033d61040b36600461372b565b610b15565b61033d61041e366004613555565b610b39565b61033d61043136600461378b565b610b5c565b61029d610b9f565b61025461044c366004613555565b6001600160a01b031660009081526006602052604090205490565b61046f610c31565b60405161025e97969594939291906137fe565b61033d61049036600461386e565b610cba565b6102e06104a33660046132be565b610ccf565b61027a6104b63660046134dc565b610cee565b61033d6104c93660046136db565b610d19565b610254600081565b61033d6104e43660046138a6565b610d30565b61033d6104f7366004613921565b610e81565b61025461050a366004613242565b6000908152600d602052604090205490565b61033d61052a366004613985565b610ee1565b61025461053d366004613242565b610f72565b6102546a4d494e5445525f524f4c4560a81b81565b61033d6105653660046134dc565b610f89565b61033d610578366004613a27565b610fae565b61029d611092565b61027a610593366004613a94565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b61033d6105cf366004613abe565b611120565b61033d6105e2366004613b16565b611165565b60006001600160a01b0383166106575760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b5060008181526001602090815260408083206001600160a01b03861684529091529020545b92915050565b600061067c826111a8565b6060600c805461069c90613b49565b80601f01602080910402602001604051908101604052809291908181526020018280546106c890613b49565b80156107155780601f106106ea57610100808354040283529160200191610715565b820191906000526020600020905b8154815290600101906020018083116106f857829003601f168201915b50505050509050919050565b60008281526008602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b03169282019290925282916107965750604080518082019091526007546001600160a01b0381168252600160a01b90046001600160601b031660208201525b6020810151600090612710906107b5906001600160601b031687613b99565b6107bf9190613bb0565b91519350909150505b9250929050565b6001600160a01b0385163314806107eb57506107eb8533610593565b6108075760405162461bcd60e51b815260040161064e90613bd2565b61081485858585856111cd565b5050505050565b600082815260096020526040902060010154610836816113cf565b61084083836113dc565b505050565b6060600061085281610f72565b90506000816001600160401b0381111561086e5761086e6132e0565b604051908082528060200260200182016040528015610897578160200160208202803683370190505b50905060005b828110156108ec576108b0600082610ccf565b8282815181106108c2576108c2613c20565b6001600160a01b0390921660209283029190910190910152806108e481613c36565b91505061089d565b5092915050565b60006108fd6113fe565b905090565b6001600160a01b03811633146109725760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161064e565b61097c828261152c565b5050565b600061098b816113cf565b61097c6a4d494e5445525f524f4c4560a81b8361081b565b6a4d494e5445525f524f4c4560a81b6109bb816113cf565b6109c684848461154e565b50505050565b60608151835114610a315760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b606482015260840161064e565b600083516001600160401b03811115610a4c57610a4c6132e0565b604051908082528060200260200182016040528015610a75578160200160208202803683370190505b50905060005b8451811015610aed57610ac0858281518110610a9957610a99613c20565b6020026020010151858381518110610ab357610ab3613c20565b60200260200101516105e7565b828281518110610ad257610ad2613c20565b6020908102919091010152610ae681613c36565b9050610a7b565b509392505050565b6000610b00816113cf565b610b0982611619565b600c6108408382613c95565b6a4d494e5445525f524f4c4560a81b610b2d816113cf565b61081485858585611625565b6000610b44816113cf565b61097c6a4d494e5445525f524f4c4560a81b83610f89565b6001600160a01b038316331480610b785750610b788333610593565b610b945760405162461bcd60e51b815260040161064e90613bd2565b610840838383611707565b6060600c8054610bae90613b49565b80601f0160208091040260200160405190810160405280929190818152602001828054610bda90613b49565b8015610c275780601f10610bfc57610100808354040283529160200191610c27565b820191906000526020600020905b815481529060010190602001808311610c0a57829003601f168201915b5050505050905090565b600060608082808083610c657f000000000000000000000000000000000000000000000000000000000000000060046118a6565b610c907f000000000000000000000000000000000000000000000000000000000000000060056118a6565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6000610cc5816113cf565b6108408383611951565b6000828152600a60205260408120610ce79083611a0b565b9392505050565b60009182526009602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000610d24816113cf565b600b6108408382613c95565b81333b15801590610daa57506000546040516305a3b80960e01b81523360048201526001600160a01b03909116906305a3b80990602401602060405180830381865afa158015610d84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da89190613d54565b155b15610dca5760405163f6fa4cbd60e01b815233600482015260240161064e565b6001600160a01b0381163b15801590610e4e57506000546040516305a3b80960e01b81526001600160a01b038381166004830152909116906305a3b80990602401602060405180830381865afa158015610e28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4c9190613d54565b155b15610e77576040516341b8d58160e11b81526001600160a01b038216600482015260240161064e565b6108408383611a17565b6a4d494e5445525f524f4c4560a81b610e99816113cf565b60005b84811015610ed957610ec7868683818110610eb957610eb9613c20565b90506020020135858561154e565b80610ed181613c36565b915050610e9c565b505050505050565b6a4d494e5445525f524f4c4560a81b610ef9816113cf565b610f698787878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808b0282810182019093528a82529093508a925089918291850190849080828437600092019190915250889250611a22915050565b50505050505050565b6000818152600a6020526040812061067c90611b7d565b600082815260096020526040902060010154610fa4816113cf565b610840838361152c565b42821015610fcf5760405163068568f360e21b815260040160405180910390fd5b6000610fdd85878686611b87565b9050610fea868284611c39565b1561100057610ffa868686611d43565b50610814565b60008251604003611047576110408261101c8560006020611e23565b61102590613d71565b6110328660206040611e23565b61103b90613d71565b611f30565b9050611073565b825160410361105a576110408284611f4d565b604051638baa579f60e01b815260040160405180910390fd5b61107d8188611f69565b1561105a5761108d878787611d43565b610f69565b600b805461109f90613b49565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb90613b49565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b505050505081565b6001600160a01b03851633148061113c575061113c8533610593565b6111585760405162461bcd60e51b815260040161064e90613bd2565b6108148585858585611f90565b6001600160a01b03831633148061118157506111818333610593565b61119d5760405162461bcd60e51b815260040161064e90613bd2565b610840838383612192565b60006001600160e01b03198216635a05180f60e01b148061067c575061067c826122ae565b848433321480159061124857506000546040516305a3b80960e01b81523360048201526001600160a01b03909116906305a3b80990602401602060405180830381865afa158015611222573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112469190613d54565b155b156112685760405163937db65f60e01b815233600482015260240161064e565b6001600160a01b0382163b158015906112ec57506000546040516305a3b80960e01b81526001600160a01b038481166004830152909116906305a3b80990602401602060405180830381865afa1580156112c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ea9190613d54565b155b156113155760405163f934453160e01b81526001600160a01b038316600482015260240161064e565b6001600160a01b0381163b1580159061139957506000546040516305a3b80960e01b81526001600160a01b038381166004830152909116906305a3b80990602401602060405180830381865afa158015611373573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113979190613d54565b155b156113c257604051632a67242160e11b81526001600160a01b038216600482015260240161064e565b610f6987878787876122d3565b6113d98133612478565b50565b6113e682826124d1565b6000828152600a602052604090206108409082612557565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561145757507f000000000000000000000000000000000000000000000000000000000000000046145b1561148157507f000000000000000000000000000000000000000000000000000000000000000090565b6108fd604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b90565b611536828261256c565b6000828152600a6020526040902061084090826125d3565b6127106001600160601b03821611156115795760405162461bcd60e51b815260040161064e90613d95565b6001600160a01b0382166115cf5760405162461bcd60e51b815260206004820152601b60248201527f455243323938313a20496e76616c696420706172616d65746572730000000000604482015260640161064e565b6040805180820182526001600160a01b0393841681526001600160601b0392831660208083019182526000968752600890529190942093519051909116600160a01b029116179055565b600361097c8282613c95565b6001600160a01b03841661164b5760405162461bcd60e51b815260040161064e90613ddf565b336000611657856125e8565b90506000611664856125e8565b905061167583600089858589612633565b60008681526001602090815260408083206001600160a01b038b168452909152812080548792906116a7908490613e20565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610f69836000898989896127ac565b6001600160a01b03831661172d5760405162461bcd60e51b815260040161064e90613e33565b805182511461174e5760405162461bcd60e51b815260040161064e90613e76565b600033905061177181856000868660405180602001604052806000815250612633565b60005b835181101561183957600084828151811061179157611791613c20565b6020026020010151905060008483815181106117af576117af613c20565b60209081029190910181015160008481526001835260408082206001600160a01b038c1683529093529190912054909150818110156118005760405162461bcd60e51b815260040161064e90613ebe565b60009283526001602090815260408085206001600160a01b038b168652909152909220910390558061183181613c36565b915050611774565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161188a929190613f02565b60405180910390a46040805160208101909152600090526109c6565b606060ff83146118c0576118b983612907565b905061067c565b8180546118cc90613b49565b80601f01602080910402602001604051908101604052809291908181526020018280546118f890613b49565b80156119455780601f1061191a57610100808354040283529160200191611945565b820191906000526020600020905b81548152906001019060200180831161192857829003601f168201915b5050505050905061067c565b6127106001600160601b038216111561197c5760405162461bcd60e51b815260040161064e90613d95565b6001600160a01b0382166119d25760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c696420726563656976657200000000000000604482015260640161064e565b604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600755565b6000610ce78383612946565b61097c338383611d43565b6001600160a01b038416611a485760405162461bcd60e51b815260040161064e90613ddf565b8151835114611a695760405162461bcd60e51b815260040161064e90613e76565b33611a7981600087878787612633565b60005b8451811015611b1557838181518110611a9757611a97613c20565b602002602001015160016000878481518110611ab557611ab5613c20565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254611afd9190613e20565b90915550819050611b0d81613c36565b915050611a7c565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611b66929190613f02565b60405180910390a461081481600087878787612970565b600061067c825490565b6001600160a01b03831660009081526006602052604081208054611c30917f00000000000000000000000000000000000000000000000000000000000000009187918991889187611bd783613c36565b909155506040805160208101969096526001600160a01b03948516908601529290911660608401521515608083015260a082015260c0810184905260e00160405160208183030381529060405280519060200120612a2b565b95945050505050565b6000806000856001600160a01b0316631626ba7e60e01b8686604051602401611c63929190613f27565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611ca19190613f40565b600060405180830381855afa9150503d8060008114611cdc576040519150601f19603f3d011682016040523d82523d6000602084013e611ce1565b606091505b5091509150818015611cf4575080516020145b15611d3757600081806020019051810190611d0f9190613f5c565b90506374eca2c160e11b6001600160e01b0319821601611d355760019350505050610ce7565b505b50600095945050505050565b816001600160a01b0316836001600160a01b031603611db65760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b606482015260840161064e565b6001600160a01b03838116600081815260026020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b606081611e3181601f613e20565b1015611e705760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015260640161064e565b611e7a8284613e20565b84511015611ebe5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015260640161064e565b606082158015611edd5760405191506000825260208201604052611f27565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f16578051835260209283019201611efe565b5050858452601f01601f1916604052505b50949350505050565b6000806000611f40868686612a58565b91509150611f2781612a91565b6000806000611f5c8585612bdb565b91509150610aed81612a91565b60006001600160a01b03831615801590610ce75750506001600160a01b0391821691161490565b848433321480159061200b57506000546040516305a3b80960e01b81523360048201526001600160a01b03909116906305a3b80990602401602060405180830381865afa158015611fe5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120099190613d54565b155b1561202b5760405163937db65f60e01b815233600482015260240161064e565b6001600160a01b0382163b158015906120af57506000546040516305a3b80960e01b81526001600160a01b038481166004830152909116906305a3b80990602401602060405180830381865afa158015612089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ad9190613d54565b155b156120d85760405163f934453160e01b81526001600160a01b038316600482015260240161064e565b6001600160a01b0381163b1580159061215c57506000546040516305a3b80960e01b81526001600160a01b038381166004830152909116906305a3b80990602401602060405180830381865afa158015612136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215a9190613d54565b155b1561218557604051632a67242160e11b81526001600160a01b038216600482015260240161064e565b610f698787878787612c1d565b6001600160a01b0383166121b85760405162461bcd60e51b815260040161064e90613e33565b3360006121c4846125e8565b905060006121d1846125e8565b90506121f183876000858560405180602001604052806000815250612633565b60008581526001602090815260408083206001600160a01b038a168452909152902054848110156122345760405162461bcd60e51b815260040161064e90613ebe565b60008681526001602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4604080516020810190915260009052610f69565b60006001600160e01b03198216637965db0b60e01b148061067c575061067c82612d59565b81518351146122f45760405162461bcd60e51b815260040161064e90613e76565b6001600160a01b03841661231a5760405162461bcd60e51b815260040161064e90613f79565b33612329818787878787612633565b60005b845181101561241257600085828151811061234957612349613c20565b60200260200101519050600085838151811061236757612367613c20565b60209081029190910181015160008481526001835260408082206001600160a01b038e1683529093529190912054909150818110156123b85760405162461bcd60e51b815260040161064e90613fbe565b60008381526001602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906123f7908490613e20565b925050819055505050508061240b90613c36565b905061232c565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051612462929190613f02565b60405180910390a4610ed9818787878787612970565b6124828282610cee565b61097c5761248f81612d7e565b61249a836020612d90565b6040516020016124ab929190614008565b60408051601f198184030181529082905262461bcd60e51b825261064e916004016132ab565b6124db8282610cee565b61097c5760008281526009602090815260408083206001600160a01b03851684529091529020805460ff191660011790556125133390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610ce7836001600160a01b038416612f2b565b6125768282610cee565b1561097c5760008281526009602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610ce7836001600160a01b038416612f7a565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061262257612622613c20565b602090810291909101015292915050565b6001600160a01b0385166126ba5760005b83518110156126b85782818151811061265f5761265f613c20565b6020026020010151600d600086848151811061267d5761267d613c20565b6020026020010151815260200190815260200160002060008282546126a29190613e20565b909155506126b1905081613c36565b9050612644565b505b6001600160a01b038416610ed95760005b8351811015610f695760008482815181106126e8576126e8613c20565b60200260200101519050600084838151811061270657612706613c20565b602002602001015190506000600d6000848152602001908152602001600020549050818110156127895760405162461bcd60e51b815260206004820152602860248201527f455243313135353a206275726e20616d6f756e74206578636565647320746f74604482015267616c537570706c7960c01b606482015260840161064e565b6000928352600d6020526040909220910390556127a581613c36565b90506126cb565b6001600160a01b0384163b15610ed95760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906127f0908990899088908890889060040161407d565b6020604051808303816000875af192505050801561282b575060408051601f3d908101601f1916820190925261282891810190613f5c565b60015b6128d7576128376140c2565b806308c379a003612870575061284b6140dd565b806128565750612872565b8060405162461bcd60e51b815260040161064e91906132ab565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606482015260840161064e565b6001600160e01b0319811663f23a6e6160e01b14610f695760405162461bcd60e51b815260040161064e90614166565b606060006129148361306d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600082600001828154811061295d5761295d613c20565b9060005260206000200154905092915050565b6001600160a01b0384163b15610ed95760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906129b490899089908890889088906004016141ae565b6020604051808303816000875af19250505080156129ef575060408051601f3d908101601f191682019092526129ec91810190613f5c565b60015b6129fb576128376140c2565b6001600160e01b0319811663bc197c8160e01b14610f695760405162461bcd60e51b815260040161064e90614166565b600061067c612a386113fe565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806001600160ff1b03831681612a7560ff86901c601b613e20565b9050612a8387828885613095565b935093505050935093915050565b6000816004811115612aa557612aa561420c565b03612aad5750565b6001816004811115612ac157612ac161420c565b03612b0e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161064e565b6002816004811115612b2257612b2261420c565b03612b6f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161064e565b6003816004811115612b8357612b8361420c565b036113d95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161064e565b6000808251604103612c115760208301516040840151606085015160001a612c0587828585613095565b945094505050506107c8565b506000905060026107c8565b6001600160a01b038416612c435760405162461bcd60e51b815260040161064e90613f79565b336000612c4f856125e8565b90506000612c5c856125e8565b9050612c6c838989858589612633565b60008681526001602090815260408083206001600160a01b038c16845290915290205485811015612caf5760405162461bcd60e51b815260040161064e90613fbe565b60008781526001602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290612cee908490613e20565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612d4e848a8a8a8a8a6127ac565b505050505050505050565b60006001600160e01b0319821663152a902d60e11b148061067c575061067c82613159565b606061067c6001600160a01b03831660145b60606000612d9f836002613b99565b612daa906002613e20565b6001600160401b03811115612dc157612dc16132e0565b6040519080825280601f01601f191660200182016040528015612deb576020820181803683370190505b509050600360fc1b81600081518110612e0657612e06613c20565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612e3557612e35613c20565b60200101906001600160f81b031916908160001a9053506000612e59846002613b99565b612e64906001613e20565b90505b6001811115612edc576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612e9857612e98613c20565b1a60f81b828281518110612eae57612eae613c20565b60200101906001600160f81b031916908160001a90535060049490941c93612ed581614222565b9050612e67565b508315610ce75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161064e565b6000818152600183016020526040812054612f725750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561067c565b50600061067c565b60008181526001830160205260408120548015613063576000612f9e600183614239565b8554909150600090612fb290600190614239565b9050818114613017576000866000018281548110612fd257612fd2613c20565b9060005260206000200154905080876000018481548110612ff557612ff5613c20565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806130285761302861424c565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061067c565b600091505061067c565b600060ff8216601f81111561067c57604051632cd44ac360e21b815260040160405180910390fd5b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156130cc5750600090506003613150565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613120573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661314957600060019250925050613150565b9150600090505b94509492505050565b60006001600160e01b0319821663278eba3960e21b148061067c575061067c8260006001600160e01b03198216636cdb3d1360e11b14806131aa57506001600160e01b031982166303a24d0760e21b145b8061067c57506301ffc9a760e01b6001600160e01b031983161461067c565b80356001600160a01b03811681146131e057600080fd5b919050565b600080604083850312156131f857600080fd5b613201836131c9565b946020939093013593505050565b6001600160e01b0319811681146113d957600080fd5b60006020828403121561323757600080fd5b8135610ce78161320f565b60006020828403121561325457600080fd5b5035919050565b60005b8381101561327657818101518382015260200161325e565b50506000910152565b6000815180845261329781602086016020860161325b565b601f01601f19169290920160200192915050565b602081526000610ce7602083018461327f565b600080604083850312156132d157600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b038111828210171561331b5761331b6132e0565b6040525050565b60006001600160401b0382111561333b5761333b6132e0565b5060051b60200190565b600082601f83011261335657600080fd5b8135602061336382613322565b60405161337082826132f6565b83815260059390931b850182019282810191508684111561339057600080fd5b8286015b848110156133ab5780358352918301918301613394565b509695505050505050565b60006001600160401b038311156133cf576133cf6132e0565b6040516133e6601f8501601f1916602001826132f6565b8091508381528484840111156133fb57600080fd5b83836020830137600060208583010152509392505050565b600082601f83011261342457600080fd5b610ce7838335602085016133b6565b600080600080600060a0868803121561344b57600080fd5b613454866131c9565b9450613462602087016131c9565b935060408601356001600160401b038082111561347e57600080fd5b61348a89838a01613345565b945060608801359150808211156134a057600080fd5b6134ac89838a01613345565b935060808801359150808211156134c257600080fd5b506134cf88828901613413565b9150509295509295909350565b600080604083850312156134ef57600080fd5b823591506134ff602084016131c9565b90509250929050565b6020808252825182820181905260009190848201906040850190845b818110156135495783516001600160a01b031683529284019291840191600101613524565b50909695505050505050565b60006020828403121561356757600080fd5b610ce7826131c9565b80356001600160601b03811681146131e057600080fd5b60008060006060848603121561359c57600080fd5b833592506135ac602085016131c9565b91506135ba60408501613570565b90509250925092565b600080604083850312156135d657600080fd5b82356001600160401b03808211156135ed57600080fd5b818501915085601f83011261360157600080fd5b8135602061360e82613322565b60405161361b82826132f6565b83815260059390931b850182019282810191508984111561363b57600080fd5b948201945b8386101561366057613651866131c9565b82529482019490820190613640565b9650508601359250508082111561367657600080fd5b5061368385828601613345565b9150509250929050565b600081518084526020808501945080840160005b838110156136bd578151875295820195908201906001016136a1565b509495945050505050565b602081526000610ce7602083018461368d565b6000602082840312156136ed57600080fd5b81356001600160401b0381111561370357600080fd5b8201601f8101841361371457600080fd5b613723848235602084016133b6565b949350505050565b6000806000806080858703121561374157600080fd5b61374a856131c9565b9350602085013592506040850135915060608501356001600160401b0381111561377357600080fd5b61377f87828801613413565b91505092959194509250565b6000806000606084860312156137a057600080fd5b6137a9846131c9565b925060208401356001600160401b03808211156137c557600080fd5b6137d187838801613345565b935060408601359150808211156137e757600080fd5b506137f486828701613345565b9150509250925092565b60ff60f81b8816815260e06020820152600061381d60e083018961327f565b828103604084015261382f818961327f565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501529050613860818561368d565b9a9950505050505050505050565b6000806040838503121561388157600080fd5b61388a836131c9565b91506134ff60208401613570565b80151581146113d957600080fd5b600080604083850312156138b957600080fd5b6138c2836131c9565b915060208301356138d281613898565b809150509250929050565b60008083601f8401126138ef57600080fd5b5081356001600160401b0381111561390657600080fd5b6020830191508360208260051b85010111156107c857600080fd5b6000806000806060858703121561393757600080fd5b84356001600160401b0381111561394d57600080fd5b613959878288016138dd565b909550935061396c9050602086016131c9565b915061397a60408601613570565b905092959194509250565b6000806000806000806080878903121561399e57600080fd5b6139a7876131c9565b955060208701356001600160401b03808211156139c357600080fd5b6139cf8a838b016138dd565b909750955060408901359150808211156139e857600080fd5b6139f48a838b016138dd565b90955093506060890135915080821115613a0d57600080fd5b50613a1a89828a01613413565b9150509295509295509295565b600080600080600060a08688031215613a3f57600080fd5b613a48866131c9565b9450613a56602087016131c9565b93506040860135613a6681613898565b92506060860135915060808601356001600160401b03811115613a8857600080fd5b6134cf88828901613413565b60008060408385031215613aa757600080fd5b613ab0836131c9565b91506134ff602084016131c9565b600080600080600060a08688031215613ad657600080fd5b613adf866131c9565b9450613aed602087016131c9565b9350604086013592506060860135915060808601356001600160401b03811115613a8857600080fd5b600080600060608486031215613b2b57600080fd5b613b34846131c9565b95602085013595506040909401359392505050565b600181811c90821680613b5d57607f821691505b602082108103613b7d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761067c5761067c613b83565b600082613bcd57634e487b7160e01b600052601260045260246000fd5b500490565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060018201613c4857613c48613b83565b5060010190565b601f82111561084057600081815260208120601f850160051c81016020861015613c765750805b601f850160051c820191505b81811015610ed957828155600101613c82565b81516001600160401b03811115613cae57613cae6132e0565b613cc281613cbc8454613b49565b84613c4f565b602080601f831160018114613cf75760008415613cdf5750858301515b600019600386901b1c1916600185901b178555610ed9565b600085815260208120601f198616915b82811015613d2657888601518255948401946001909101908401613d07565b5085821015613d445787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215613d6657600080fd5b8151610ce781613898565b80516020808301519190811015613b7d5760001960209190910360031b1b16919050565b6020808252602a908201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646040820152692073616c65507269636560b01b606082015260800190565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b8082018082111561067c5761067c613b83565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b604081526000613f15604083018561368d565b8281036020840152611c30818561368d565b828152604060208201526000613723604083018461327f565b60008251613f5281846020870161325b565b9190910192915050565b600060208284031215613f6e57600080fd5b8151610ce78161320f565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161404081601785016020880161325b565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161407181602884016020880161325b565b01602801949350505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906140b79083018461327f565b979650505050505050565b600060033d11156115295760046000803e5060005160e01c90565b600060443d10156140eb5790565b6040516003193d81016004833e81513d6001600160401b03816024840111818411171561411a57505050505090565b82850191508151818111156141325750505050505090565b843d870101602082850101111561414c5750505050505090565b61415b602082860101876132f6565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b0386811682528516602082015260a0604082018190526000906141da9083018661368d565b82810360608401526141ec818661368d565b90508281036080840152614200818561327f565b98975050505050505050565b634e487b7160e01b600052602160045260246000fd5b60008161423157614231613b83565b506000190190565b8181038181111561067c5761067c613b83565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220431919222104d7b0d73bf58dd996b793da398d05030dbd5bfd9f9d228840c6c864736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};

export const ffBytecode =
  "0x6080604052600436106100e45760003560e01c806301ffc9a7146100e9578063248a9ca31461011e5780632f2ff15d1461014c57806336568abe1461016e5780633f4ba83a1461018e57806355a3143c146101a35780635c975abb146101c35780637fe493e6146101db578063829ee4a9146101fe5780638456cb591461021e57806391d1485414610233578063a217fddf14610253578063d547741f14610268578063e63ab1e914610288578063ec51ab8d146102a5578063ed02991d146102c5578063ed9ff9af146102ea578063fafb12f51461030a578063fb1bb9de1461033a575b600080fd5b3480156100f557600080fd5b50610109610104366004611099565b610359565b60405190151581526020015b60405180910390f35b34801561012a57600080fd5b5061013e6101393660046110b4565b610390565b604051908152602001610115565b34801561015857600080fd5b5061016c6101673660046110cd565b6103a5565b005b34801561017a57600080fd5b5061016c6101893660046110cd565b6103c6565b34801561019a57600080fd5b5061016c610449565b6101b66101b13660046111ab565b610469565b6040516101159190611217565b3480156101cf57600080fd5b5060015460ff16610109565b3480156101e757600080fd5b5061013e6b282922a9a2aa2fa0a22222a960a11b81565b34801561020a57600080fd5b5061016c61021936600461122b565b610719565b34801561022a57600080fd5b5061016c610813565b34801561023f57600080fd5b5061010961024e3660046110cd565b61082e565b34801561025f57600080fd5b5061013e600081565b34801561027457600080fd5b5061016c6102833660046110cd565b610857565b34801561029457600080fd5b5061013e652820aaa9a2a960d11b81565b3480156102b157600080fd5b5061016c6102c036600461128e565b610873565b3480156102d157600080fd5b5061013e6d282922a9a2aa2fa922a6a7ab22a960911b81565b3480156102f657600080fd5b5061016c6103053660046112db565b6109b5565b34801561031657600080fd5b5061032a6103253660046112db565b610a9b565b6040516101159493929190611367565b34801561034657600080fd5b5061013e672aa72820aaa9a2a960c11b81565b60006001600160e01b03198216637965db0b60e01b148061038a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60009081526020819052604090206001015490565b6103ae82610390565b6103b781610b64565b6103c18383610b6e565b505050565b6001600160a01b038116331461043b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104458282610bf2565b5050565b672aa72820aaa9a2a960c11b61045e81610b64565b610466610c57565b50565b6000610473610ca3565b600060028560405161048591906113a2565b90815260200160405180910390206040518060800160405290816000820180546104ae906113be565b80601f01602080910402602001604051908101604052809291908181526020018280546104da906113be565b80156105275780601f106104fc57610100808354040283529160200191610527565b820191906000526020600020905b81548152906001019060200180831161050a57829003601f168201915b5050509183525050600191909101546001600160e01b031960e082901b16602083015260ff600160201b820481161515604080850191909152600160281b9092041615156060909201919091528101519091506105995784604051637732c58560e11b815260040161043291906113f8565b60208101516001600160e01b03191615610676576105bd6000858360000151610ceb565b915060008160200151846040516020016105d892919061140b565b6040516020818303038152906040529050600080846001600160a01b0316348460405161060591906113a2565b60006040518083038185875af1925050503d8060008114610642576040519150601f19603f3d011682016040523d82523d6000602084013e610647565b606091505b50915091508161066e5787816040516348adac1d60e01b815260040161043292919061143c565b5050506106ac565b805160405160009161068c91869060200161146a565b60405160208183030381529060405290506106a8348683610ceb565b9250505b336001600160a01b0316826001600160a01b0316866040516106ce91906113a2565b60405180910390207f68cc5c99c3d3fc4545fc38c25e0c6974cc1f0c1d73cc822a9f376904e5117dd134888860405161070993929190611499565b60405180910390a4509392505050565b6b282922a9a2aa2fa0a22222a960a11b61073281610b64565b60028360405161074291906113a2565b9081526040519081900360200190206001015460ff600160281b9091041615610780578260405163620f338760e11b815260040161043291906113f8565b600060028460405161079291906113a2565b9081526040516020918190038201812092506107b29183918691016114b8565b60408051601f1981840301815291905281906107ce9082611584565b50836040516107dd91906113a2565b604051908190038120907fd0446a7c28b5e4fc56945f889d78f8547970f85525629a600c8102b5b94a9a0590600090a250505050565b652820aaa9a2a960d11b61082681610b64565b610466610df2565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61086082610390565b61086981610b64565b6103c18383610bf2565b6b282922a9a2aa2fa0a22222a960a11b61088c81610b64565b60028360405161089c91906113a2565b9081526040519081900360200190206001015460ff600160281b90910416156108da578260405163620f338760e11b815260040161043291906113f8565b6002836040516108ea91906113a2565b9081526040519081900360200190208054610904906113be565b9050600003610926576040516321744a5960e01b815260040160405180910390fd5b600060028460405161093891906113a2565b90815260405190819003602001812060018101805460ff60281b1964ffffffffff1990911660e088901c17600160201b1716600160281b179055915061097f9085906113a2565b604051908190038120907f31c0386e7b5c6ec0bd63a64f00790e2574606cd5e6276ab2fd859137d57e58b690600090a250505050565b6d282922a9a2aa2fa922a6a7ab22a960911b6109d081610b64565b6002826040516109e091906113a2565b9081526040519081900360200190206001015460ff600160201b90910416610a1d5781604051637732c58560e11b815260040161043291906113f8565b6000600283604051610a2f91906113a2565b9081526040519081900360200181206001018054921515600160201b0260ff60201b1990931692909217909155610a679083906113a2565b604051908190038120907fa09175adbfdedbde9b3cc35bc872e031cf9a807ba7067ae2da661de6400c69ff90600090a25050565b8051602081830181018051600282529282019190930120915280548190610ac1906113be565b80601f0160208091040260200160405190810160405280929190818152602001828054610aed906113be565b8015610b3a5780601f10610b0f57610100808354040283529160200191610b3a565b820191906000526020600020905b815481529060010190602001808311610b1d57829003601f168201915b5050506001909301549192505060e081901b9060ff600160201b8204811691600160281b90041684565b6104668133610e2d565b610b78828261082e565b610445576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610bae3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610bfc828261082e565b15610445576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610c5f610e86565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610c999190611217565b60405180910390a1565b60015460ff1615610ce95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610432565b565b600083471015610d3d5760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610432565b8151600003610d8e5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610432565b8282516020840186f590506001600160a01b038116610deb5760405162461bcd60e51b8152602060048201526019602482015278437265617465323a204661696c6564206f6e206465706c6f7960381b6044820152606401610432565b9392505050565b610dfa610ca3565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610c8c565b610e37828261082e565b61044557610e4481610ecf565b610e4f836020610ee1565b604051602001610e60929190611643565b60408051601f198184030181529082905262461bcd60e51b8252610432916004016113f8565b60015460ff16610ce95760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610432565b606061038a6001600160a01b03831660145b60606000610ef08360026116c8565b610efb9060026116df565b6001600160401b03811115610f1257610f12611109565b6040519080825280601f01601f191660200182016040528015610f3c576020820181803683370190505b509050600360fc1b81600081518110610f5757610f576116f2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f8657610f866116f2565b60200101906001600160f81b031916908160001a9053506000610faa8460026116c8565b610fb59060016116df565b90505b600181111561102d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fe957610fe96116f2565b1a60f81b828281518110610fff57610fff6116f2565b60200101906001600160f81b031916908160001a90535060049490941c9361102681611708565b9050610fb8565b508315610deb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610432565b80356001600160e01b03198116811461109457600080fd5b919050565b6000602082840312156110ab57600080fd5b610deb8261107c565b6000602082840312156110c657600080fd5b5035919050565b600080604083850312156110e057600080fd5b8235915060208301356001600160a01b03811681146110fe57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261113057600080fd5b81356001600160401b038082111561114a5761114a611109565b604051601f8301601f19908116603f0116810190828211818310171561117257611172611109565b8160405283815286602085880101111561118b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156111c057600080fd5b83356001600160401b03808211156111d757600080fd5b6111e38783880161111f565b945060208601359350604086013591508082111561120057600080fd5b5061120d8682870161111f565b9150509250925092565b6001600160a01b0391909116815260200190565b6000806040838503121561123e57600080fd5b82356001600160401b038082111561125557600080fd5b6112618683870161111f565b9350602085013591508082111561127757600080fd5b506112848582860161111f565b9150509250929050565b600080604083850312156112a157600080fd5b82356001600160401b038111156112b757600080fd5b6112c38582860161111f565b9250506112d26020840161107c565b90509250929050565b6000602082840312156112ed57600080fd5b81356001600160401b0381111561130357600080fd5b61130f8482850161111f565b949350505050565b60005b8381101561133257818101518382015260200161131a565b50506000910152565b60008151808452611353816020860160208601611317565b601f01601f19169290920160200192915050565b60808152600061137a608083018761133b565b6001600160e01b03199590951660208301525091151560408301521515606090910152919050565b600082516113b4818460208701611317565b9190910192915050565b600181811c908216806113d257607f821691505b6020821081036113f257634e487b7160e01b600052602260045260246000fd5b50919050565b602081526000610deb602083018461133b565b6001600160e01b031983168152815160009061142e816004850160208701611317565b919091016004019392505050565b60408152600061144f604083018561133b565b8281036020840152611461818561133b565b95945050505050565b6000835161147c818460208801611317565b835190830190611490818360208801611317565b01949350505050565b838152826020820152606060408201526000611461606083018461133b565b60008084546114c6816113be565b600182811680156114de57600181146114f357611522565b60ff1984168752821515830287019450611522565b8860005260208060002060005b858110156115195781548a820152908401908201611500565b50505082870194505b505050508351611490818360208801611317565b601f8211156103c157600081815260208120601f850160051c8101602086101561155d5750805b601f850160051c820191505b8181101561157c57828155600101611569565b505050505050565b81516001600160401b0381111561159d5761159d611109565b6115b1816115ab84546113be565b84611536565b602080601f8311600181146115e657600084156115ce5750858301515b600019600386901b1c1916600185901b17855561157c565b600085815260208120601f198616915b82811015611615578886015182559484019460019091019084016115f6565b50858210156116335787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611675816017850160208801611317565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516116a6816028840160208801611317565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761038a5761038a6116b2565b8082018082111561038a5761038a6116b2565b634e487b7160e01b600052603260045260246000fd5b600081611717576117176116b2565b50600019019056fea264697066735822122084a5b429b65a08912fbeec7a535cc8a6e54fecc53e44df2e50204e9bf41fffab64736f6c63430008130033";
export const ffABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_presetAdder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_presetRemover",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pauser",
        type: "address",
      },
      {
        internalType: "address",
        name: "_unpauser",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyBytecode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "presetName",
        type: "string",
      },
    ],
    name: "PresetAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "presetName",
        type: "string",
      },
    ],
    name: "PresetDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "presetName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "PresetInitializationFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "presetName",
        type: "string",
      },
    ],
    name: "PresetAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "presetName",
        type: "string",
      },
    ],
    name: "PresetBytecodeAppended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "presetName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "arguments",
        type: "bytes",
      },
    ],
    name: "PresetDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "presetName",
        type: "string",
      },
    ],
    name: "PresetRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESET_ADDER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRESET_REMOVER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNPAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bytes4",
        name: "_initSelector",
        type: "bytes4",
      },
    ],
    name: "addPreset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_arguments",
        type: "bytes",
      },
    ],
    name: "deployPreset",
    outputs: [
      {
        internalType: "address",
        name: "deployedPreset",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
    ],
    name: "preparePresetBytecode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "presetName",
        type: "string",
      },
    ],
    name: "presets",
    outputs: [
      {
        internalType: "bytes",
        name: "initBytecode",
        type: "bytes",
      },
      {
        internalType: "bytes4",
        name: "initSelector",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "deployable",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "used",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "removePreset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const factoryABI = {
  _format: "hh-sol-artifact-1",
  contractName: "ContractFactory",
  sourceName: "src/ContractFactory.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_admin",
          type: "address",
        },
        {
          internalType: "address",
          name: "_presetAdder",
          type: "address",
        },
        {
          internalType: "address",
          name: "_presetRemover",
          type: "address",
        },
        {
          internalType: "address",
          name: "_pauser",
          type: "address",
        },
        {
          internalType: "address",
          name: "_unpauser",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "EmptyBytecode",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "presetName",
          type: "string",
        },
      ],
      name: "PresetAlreadyExists",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "presetName",
          type: "string",
        },
      ],
      name: "PresetDoesNotExist",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "presetName",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "PresetInitializationFailed",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "string",
          name: "presetName",
          type: "string",
        },
      ],
      name: "PresetAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "string",
          name: "presetName",
          type: "string",
        },
      ],
      name: "PresetBytecodeAppended",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "string",
          name: "presetName",
          type: "string",
        },
        {
          indexed: true,
          internalType: "address",
          name: "contractAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "deployer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "arguments",
          type: "bytes",
        },
      ],
      name: "PresetDeployed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "string",
          name: "presetName",
          type: "string",
        },
      ],
      name: "PresetRemoved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PAUSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PRESET_ADDER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PRESET_REMOVER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "UNPAUSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "bytes4",
          name: "_initSelector",
          type: "bytes4",
        },
      ],
      name: "addPreset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "bytes32",
          name: "_salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_arguments",
          type: "bytes",
        },
      ],
      name: "deployPreset",
      outputs: [
        {
          internalType: "address",
          name: "deployedPreset",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "_bytecode",
          type: "bytes",
        },
      ],
      name: "preparePresetBytecode",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "presetName",
          type: "string",
        },
      ],
      name: "presets",
      outputs: [
        {
          internalType: "bytes",
          name: "initBytecode",
          type: "bytes",
        },
        {
          internalType: "bytes4",
          name: "initSelector",
          type: "bytes4",
        },
        {
          internalType: "bool",
          name: "deployable",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "used",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
      ],
      name: "removePreset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b506040516200195c3803806200195c833981016040819052620000349162000187565b6001805460ff191690556200004b600086620000ba565b620000666b282922a9a2aa2fa0a22222a960a11b85620000ba565b620000836d282922a9a2aa2fa922a6a7ab22a960911b84620000ba565b62000098652820aaa9a2a960d11b83620000ba565b620000af672aa72820aaa9a2a960c11b82620000ba565b5050505050620001f7565b620000c68282620000ca565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000c6576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001263390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b80516001600160a01b03811681146200018257600080fd5b919050565b600080600080600060a08688031215620001a057600080fd5b620001ab866200016a565b9450620001bb602087016200016a565b9350620001cb604087016200016a565b9250620001db606087016200016a565b9150620001eb608087016200016a565b90509295509295909350565b61175580620002076000396000f3fe6080604052600436106100e45760003560e01c806301ffc9a7146100e9578063248a9ca31461011e5780632f2ff15d1461014c57806336568abe1461016e5780633f4ba83a1461018e57806355a3143c146101a35780635c975abb146101c35780637fe493e6146101db578063829ee4a9146101fe5780638456cb591461021e57806391d1485414610233578063a217fddf14610253578063d547741f14610268578063e63ab1e914610288578063ec51ab8d146102a5578063ed02991d146102c5578063ed9ff9af146102ea578063fafb12f51461030a578063fb1bb9de1461033a575b600080fd5b3480156100f557600080fd5b50610109610104366004611099565b610359565b60405190151581526020015b60405180910390f35b34801561012a57600080fd5b5061013e6101393660046110b4565b610390565b604051908152602001610115565b34801561015857600080fd5b5061016c6101673660046110cd565b6103a5565b005b34801561017a57600080fd5b5061016c6101893660046110cd565b6103c6565b34801561019a57600080fd5b5061016c610449565b6101b66101b13660046111ab565b610469565b6040516101159190611217565b3480156101cf57600080fd5b5060015460ff16610109565b3480156101e757600080fd5b5061013e6b282922a9a2aa2fa0a22222a960a11b81565b34801561020a57600080fd5b5061016c61021936600461122b565b610719565b34801561022a57600080fd5b5061016c610813565b34801561023f57600080fd5b5061010961024e3660046110cd565b61082e565b34801561025f57600080fd5b5061013e600081565b34801561027457600080fd5b5061016c6102833660046110cd565b610857565b34801561029457600080fd5b5061013e652820aaa9a2a960d11b81565b3480156102b157600080fd5b5061016c6102c036600461128e565b610873565b3480156102d157600080fd5b5061013e6d282922a9a2aa2fa922a6a7ab22a960911b81565b3480156102f657600080fd5b5061016c6103053660046112db565b6109b5565b34801561031657600080fd5b5061032a6103253660046112db565b610a9b565b6040516101159493929190611367565b34801561034657600080fd5b5061013e672aa72820aaa9a2a960c11b81565b60006001600160e01b03198216637965db0b60e01b148061038a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60009081526020819052604090206001015490565b6103ae82610390565b6103b781610b64565b6103c18383610b6e565b505050565b6001600160a01b038116331461043b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104458282610bf2565b5050565b672aa72820aaa9a2a960c11b61045e81610b64565b610466610c57565b50565b6000610473610ca3565b600060028560405161048591906113a2565b90815260200160405180910390206040518060800160405290816000820180546104ae906113be565b80601f01602080910402602001604051908101604052809291908181526020018280546104da906113be565b80156105275780601f106104fc57610100808354040283529160200191610527565b820191906000526020600020905b81548152906001019060200180831161050a57829003601f168201915b5050509183525050600191909101546001600160e01b031960e082901b16602083015260ff600160201b820481161515604080850191909152600160281b9092041615156060909201919091528101519091506105995784604051637732c58560e11b815260040161043291906113f8565b60208101516001600160e01b03191615610676576105bd6000858360000151610ceb565b915060008160200151846040516020016105d892919061140b565b6040516020818303038152906040529050600080846001600160a01b0316348460405161060591906113a2565b60006040518083038185875af1925050503d8060008114610642576040519150601f19603f3d011682016040523d82523d6000602084013e610647565b606091505b50915091508161066e5787816040516348adac1d60e01b815260040161043292919061143c565b5050506106ac565b805160405160009161068c91869060200161146a565b60405160208183030381529060405290506106a8348683610ceb565b9250505b336001600160a01b0316826001600160a01b0316866040516106ce91906113a2565b60405180910390207f68cc5c99c3d3fc4545fc38c25e0c6974cc1f0c1d73cc822a9f376904e5117dd134888860405161070993929190611499565b60405180910390a4509392505050565b6b282922a9a2aa2fa0a22222a960a11b61073281610b64565b60028360405161074291906113a2565b9081526040519081900360200190206001015460ff600160281b9091041615610780578260405163620f338760e11b815260040161043291906113f8565b600060028460405161079291906113a2565b9081526040516020918190038201812092506107b29183918691016114b8565b60408051601f1981840301815291905281906107ce9082611584565b50836040516107dd91906113a2565b604051908190038120907fd0446a7c28b5e4fc56945f889d78f8547970f85525629a600c8102b5b94a9a0590600090a250505050565b652820aaa9a2a960d11b61082681610b64565b610466610df2565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61086082610390565b61086981610b64565b6103c18383610bf2565b6b282922a9a2aa2fa0a22222a960a11b61088c81610b64565b60028360405161089c91906113a2565b9081526040519081900360200190206001015460ff600160281b90910416156108da578260405163620f338760e11b815260040161043291906113f8565b6002836040516108ea91906113a2565b9081526040519081900360200190208054610904906113be565b9050600003610926576040516321744a5960e01b815260040160405180910390fd5b600060028460405161093891906113a2565b90815260405190819003602001812060018101805460ff60281b1964ffffffffff1990911660e088901c17600160201b1716600160281b179055915061097f9085906113a2565b604051908190038120907f31c0386e7b5c6ec0bd63a64f00790e2574606cd5e6276ab2fd859137d57e58b690600090a250505050565b6d282922a9a2aa2fa922a6a7ab22a960911b6109d081610b64565b6002826040516109e091906113a2565b9081526040519081900360200190206001015460ff600160201b90910416610a1d5781604051637732c58560e11b815260040161043291906113f8565b6000600283604051610a2f91906113a2565b9081526040519081900360200181206001018054921515600160201b0260ff60201b1990931692909217909155610a679083906113a2565b604051908190038120907fa09175adbfdedbde9b3cc35bc872e031cf9a807ba7067ae2da661de6400c69ff90600090a25050565b8051602081830181018051600282529282019190930120915280548190610ac1906113be565b80601f0160208091040260200160405190810160405280929190818152602001828054610aed906113be565b8015610b3a5780601f10610b0f57610100808354040283529160200191610b3a565b820191906000526020600020905b815481529060010190602001808311610b1d57829003601f168201915b5050506001909301549192505060e081901b9060ff600160201b8204811691600160281b90041684565b6104668133610e2d565b610b78828261082e565b610445576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610bae3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610bfc828261082e565b15610445576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610c5f610e86565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610c999190611217565b60405180910390a1565b60015460ff1615610ce95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610432565b565b600083471015610d3d5760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610432565b8151600003610d8e5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610432565b8282516020840186f590506001600160a01b038116610deb5760405162461bcd60e51b8152602060048201526019602482015278437265617465323a204661696c6564206f6e206465706c6f7960381b6044820152606401610432565b9392505050565b610dfa610ca3565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610c8c565b610e37828261082e565b61044557610e4481610ecf565b610e4f836020610ee1565b604051602001610e60929190611643565b60408051601f198184030181529082905262461bcd60e51b8252610432916004016113f8565b60015460ff16610ce95760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610432565b606061038a6001600160a01b03831660145b60606000610ef08360026116c8565b610efb9060026116df565b6001600160401b03811115610f1257610f12611109565b6040519080825280601f01601f191660200182016040528015610f3c576020820181803683370190505b509050600360fc1b81600081518110610f5757610f576116f2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f8657610f866116f2565b60200101906001600160f81b031916908160001a9053506000610faa8460026116c8565b610fb59060016116df565b90505b600181111561102d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fe957610fe96116f2565b1a60f81b828281518110610fff57610fff6116f2565b60200101906001600160f81b031916908160001a90535060049490941c9361102681611708565b9050610fb8565b508315610deb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610432565b80356001600160e01b03198116811461109457600080fd5b919050565b6000602082840312156110ab57600080fd5b610deb8261107c565b6000602082840312156110c657600080fd5b5035919050565b600080604083850312156110e057600080fd5b8235915060208301356001600160a01b03811681146110fe57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261113057600080fd5b81356001600160401b038082111561114a5761114a611109565b604051601f8301601f19908116603f0116810190828211818310171561117257611172611109565b8160405283815286602085880101111561118b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156111c057600080fd5b83356001600160401b03808211156111d757600080fd5b6111e38783880161111f565b945060208601359350604086013591508082111561120057600080fd5b5061120d8682870161111f565b9150509250925092565b6001600160a01b0391909116815260200190565b6000806040838503121561123e57600080fd5b82356001600160401b038082111561125557600080fd5b6112618683870161111f565b9350602085013591508082111561127757600080fd5b506112848582860161111f565b9150509250929050565b600080604083850312156112a157600080fd5b82356001600160401b038111156112b757600080fd5b6112c38582860161111f565b9250506112d26020840161107c565b90509250929050565b6000602082840312156112ed57600080fd5b81356001600160401b0381111561130357600080fd5b61130f8482850161111f565b949350505050565b60005b8381101561133257818101518382015260200161131a565b50506000910152565b60008151808452611353816020860160208601611317565b601f01601f19169290920160200192915050565b60808152600061137a608083018761133b565b6001600160e01b03199590951660208301525091151560408301521515606090910152919050565b600082516113b4818460208701611317565b9190910192915050565b600181811c908216806113d257607f821691505b6020821081036113f257634e487b7160e01b600052602260045260246000fd5b50919050565b602081526000610deb602083018461133b565b6001600160e01b031983168152815160009061142e816004850160208701611317565b919091016004019392505050565b60408152600061144f604083018561133b565b8281036020840152611461818561133b565b95945050505050565b6000835161147c818460208801611317565b835190830190611490818360208801611317565b01949350505050565b838152826020820152606060408201526000611461606083018461133b565b60008084546114c6816113be565b600182811680156114de57600181146114f357611522565b60ff1984168752821515830287019450611522565b8860005260208060002060005b858110156115195781548a820152908401908201611500565b50505082870194505b505050508351611490818360208801611317565b601f8211156103c157600081815260208120601f850160051c8101602086101561155d5750805b601f850160051c820191505b8181101561157c57828155600101611569565b505050505050565b81516001600160401b0381111561159d5761159d611109565b6115b1816115ab84546113be565b84611536565b602080601f8311600181146115e657600084156115ce5750858301515b600019600386901b1c1916600185901b17855561157c565b600085815260208120601f198616915b82811015611615578886015182559484019460019091019084016115f6565b50858210156116335787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611675816017850160208801611317565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516116a6816028840160208801611317565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761038a5761038a6116b2565b8082018082111561038a5761038a6116b2565b634e487b7160e01b600052603260045260246000fd5b600081611717576117176116b2565b50600019019056fea2646970667358221220b3e886f95c689d0a2b61cfdf2d0dd350bb38b4ce73cfbcb201a569fa5c782c8a64736f6c63430008130033",
  deployedBytecode:
    "0x6080604052600436106100e45760003560e01c806301ffc9a7146100e9578063248a9ca31461011e5780632f2ff15d1461014c57806336568abe1461016e5780633f4ba83a1461018e57806355a3143c146101a35780635c975abb146101c35780637fe493e6146101db578063829ee4a9146101fe5780638456cb591461021e57806391d1485414610233578063a217fddf14610253578063d547741f14610268578063e63ab1e914610288578063ec51ab8d146102a5578063ed02991d146102c5578063ed9ff9af146102ea578063fafb12f51461030a578063fb1bb9de1461033a575b600080fd5b3480156100f557600080fd5b50610109610104366004611099565b610359565b60405190151581526020015b60405180910390f35b34801561012a57600080fd5b5061013e6101393660046110b4565b610390565b604051908152602001610115565b34801561015857600080fd5b5061016c6101673660046110cd565b6103a5565b005b34801561017a57600080fd5b5061016c6101893660046110cd565b6103c6565b34801561019a57600080fd5b5061016c610449565b6101b66101b13660046111ab565b610469565b6040516101159190611217565b3480156101cf57600080fd5b5060015460ff16610109565b3480156101e757600080fd5b5061013e6b282922a9a2aa2fa0a22222a960a11b81565b34801561020a57600080fd5b5061016c61021936600461122b565b610719565b34801561022a57600080fd5b5061016c610813565b34801561023f57600080fd5b5061010961024e3660046110cd565b61082e565b34801561025f57600080fd5b5061013e600081565b34801561027457600080fd5b5061016c6102833660046110cd565b610857565b34801561029457600080fd5b5061013e652820aaa9a2a960d11b81565b3480156102b157600080fd5b5061016c6102c036600461128e565b610873565b3480156102d157600080fd5b5061013e6d282922a9a2aa2fa922a6a7ab22a960911b81565b3480156102f657600080fd5b5061016c6103053660046112db565b6109b5565b34801561031657600080fd5b5061032a6103253660046112db565b610a9b565b6040516101159493929190611367565b34801561034657600080fd5b5061013e672aa72820aaa9a2a960c11b81565b60006001600160e01b03198216637965db0b60e01b148061038a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60009081526020819052604090206001015490565b6103ae82610390565b6103b781610b64565b6103c18383610b6e565b505050565b6001600160a01b038116331461043b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104458282610bf2565b5050565b672aa72820aaa9a2a960c11b61045e81610b64565b610466610c57565b50565b6000610473610ca3565b600060028560405161048591906113a2565b90815260200160405180910390206040518060800160405290816000820180546104ae906113be565b80601f01602080910402602001604051908101604052809291908181526020018280546104da906113be565b80156105275780601f106104fc57610100808354040283529160200191610527565b820191906000526020600020905b81548152906001019060200180831161050a57829003601f168201915b5050509183525050600191909101546001600160e01b031960e082901b16602083015260ff600160201b820481161515604080850191909152600160281b9092041615156060909201919091528101519091506105995784604051637732c58560e11b815260040161043291906113f8565b60208101516001600160e01b03191615610676576105bd6000858360000151610ceb565b915060008160200151846040516020016105d892919061140b565b6040516020818303038152906040529050600080846001600160a01b0316348460405161060591906113a2565b60006040518083038185875af1925050503d8060008114610642576040519150601f19603f3d011682016040523d82523d6000602084013e610647565b606091505b50915091508161066e5787816040516348adac1d60e01b815260040161043292919061143c565b5050506106ac565b805160405160009161068c91869060200161146a565b60405160208183030381529060405290506106a8348683610ceb565b9250505b336001600160a01b0316826001600160a01b0316866040516106ce91906113a2565b60405180910390207f68cc5c99c3d3fc4545fc38c25e0c6974cc1f0c1d73cc822a9f376904e5117dd134888860405161070993929190611499565b60405180910390a4509392505050565b6b282922a9a2aa2fa0a22222a960a11b61073281610b64565b60028360405161074291906113a2565b9081526040519081900360200190206001015460ff600160281b9091041615610780578260405163620f338760e11b815260040161043291906113f8565b600060028460405161079291906113a2565b9081526040516020918190038201812092506107b29183918691016114b8565b60408051601f1981840301815291905281906107ce9082611584565b50836040516107dd91906113a2565b604051908190038120907fd0446a7c28b5e4fc56945f889d78f8547970f85525629a600c8102b5b94a9a0590600090a250505050565b652820aaa9a2a960d11b61082681610b64565b610466610df2565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61086082610390565b61086981610b64565b6103c18383610bf2565b6b282922a9a2aa2fa0a22222a960a11b61088c81610b64565b60028360405161089c91906113a2565b9081526040519081900360200190206001015460ff600160281b90910416156108da578260405163620f338760e11b815260040161043291906113f8565b6002836040516108ea91906113a2565b9081526040519081900360200190208054610904906113be565b9050600003610926576040516321744a5960e01b815260040160405180910390fd5b600060028460405161093891906113a2565b90815260405190819003602001812060018101805460ff60281b1964ffffffffff1990911660e088901c17600160201b1716600160281b179055915061097f9085906113a2565b604051908190038120907f31c0386e7b5c6ec0bd63a64f00790e2574606cd5e6276ab2fd859137d57e58b690600090a250505050565b6d282922a9a2aa2fa922a6a7ab22a960911b6109d081610b64565b6002826040516109e091906113a2565b9081526040519081900360200190206001015460ff600160201b90910416610a1d5781604051637732c58560e11b815260040161043291906113f8565b6000600283604051610a2f91906113a2565b9081526040519081900360200181206001018054921515600160201b0260ff60201b1990931692909217909155610a679083906113a2565b604051908190038120907fa09175adbfdedbde9b3cc35bc872e031cf9a807ba7067ae2da661de6400c69ff90600090a25050565b8051602081830181018051600282529282019190930120915280548190610ac1906113be565b80601f0160208091040260200160405190810160405280929190818152602001828054610aed906113be565b8015610b3a5780601f10610b0f57610100808354040283529160200191610b3a565b820191906000526020600020905b815481529060010190602001808311610b1d57829003601f168201915b5050506001909301549192505060e081901b9060ff600160201b8204811691600160281b90041684565b6104668133610e2d565b610b78828261082e565b610445576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610bae3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610bfc828261082e565b15610445576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610c5f610e86565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610c999190611217565b60405180910390a1565b60015460ff1615610ce95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610432565b565b600083471015610d3d5760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610432565b8151600003610d8e5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610432565b8282516020840186f590506001600160a01b038116610deb5760405162461bcd60e51b8152602060048201526019602482015278437265617465323a204661696c6564206f6e206465706c6f7960381b6044820152606401610432565b9392505050565b610dfa610ca3565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610c8c565b610e37828261082e565b61044557610e4481610ecf565b610e4f836020610ee1565b604051602001610e60929190611643565b60408051601f198184030181529082905262461bcd60e51b8252610432916004016113f8565b60015460ff16610ce95760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610432565b606061038a6001600160a01b03831660145b60606000610ef08360026116c8565b610efb9060026116df565b6001600160401b03811115610f1257610f12611109565b6040519080825280601f01601f191660200182016040528015610f3c576020820181803683370190505b509050600360fc1b81600081518110610f5757610f576116f2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f8657610f866116f2565b60200101906001600160f81b031916908160001a9053506000610faa8460026116c8565b610fb59060016116df565b90505b600181111561102d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fe957610fe96116f2565b1a60f81b828281518110610fff57610fff6116f2565b60200101906001600160f81b031916908160001a90535060049490941c9361102681611708565b9050610fb8565b508315610deb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610432565b80356001600160e01b03198116811461109457600080fd5b919050565b6000602082840312156110ab57600080fd5b610deb8261107c565b6000602082840312156110c657600080fd5b5035919050565b600080604083850312156110e057600080fd5b8235915060208301356001600160a01b03811681146110fe57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261113057600080fd5b81356001600160401b038082111561114a5761114a611109565b604051601f8301601f19908116603f0116810190828211818310171561117257611172611109565b8160405283815286602085880101111561118b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156111c057600080fd5b83356001600160401b03808211156111d757600080fd5b6111e38783880161111f565b945060208601359350604086013591508082111561120057600080fd5b5061120d8682870161111f565b9150509250925092565b6001600160a01b0391909116815260200190565b6000806040838503121561123e57600080fd5b82356001600160401b038082111561125557600080fd5b6112618683870161111f565b9350602085013591508082111561127757600080fd5b506112848582860161111f565b9150509250929050565b600080604083850312156112a157600080fd5b82356001600160401b038111156112b757600080fd5b6112c38582860161111f565b9250506112d26020840161107c565b90509250929050565b6000602082840312156112ed57600080fd5b81356001600160401b0381111561130357600080fd5b61130f8482850161111f565b949350505050565b60005b8381101561133257818101518382015260200161131a565b50506000910152565b60008151808452611353816020860160208601611317565b601f01601f19169290920160200192915050565b60808152600061137a608083018761133b565b6001600160e01b03199590951660208301525091151560408301521515606090910152919050565b600082516113b4818460208701611317565b9190910192915050565b600181811c908216806113d257607f821691505b6020821081036113f257634e487b7160e01b600052602260045260246000fd5b50919050565b602081526000610deb602083018461133b565b6001600160e01b031983168152815160009061142e816004850160208701611317565b919091016004019392505050565b60408152600061144f604083018561133b565b8281036020840152611461818561133b565b95945050505050565b6000835161147c818460208801611317565b835190830190611490818360208801611317565b01949350505050565b838152826020820152606060408201526000611461606083018461133b565b60008084546114c6816113be565b600182811680156114de57600181146114f357611522565b60ff1984168752821515830287019450611522565b8860005260208060002060005b858110156115195781548a820152908401908201611500565b50505082870194505b505050508351611490818360208801611317565b601f8211156103c157600081815260208120601f850160051c8101602086101561155d5750805b601f850160051c820191505b8181101561157c57828155600101611569565b505050505050565b81516001600160401b0381111561159d5761159d611109565b6115b1816115ab84546113be565b84611536565b602080601f8311600181146115e657600084156115ce5750858301515b600019600386901b1c1916600185901b17855561157c565b600085815260208120601f198616915b82811015611615578886015182559484019460019091019084016115f6565b50858210156116335787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611675816017850160208801611317565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516116a6816028840160208801611317565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761038a5761038a6116b2565b8082018082111561038a5761038a6116b2565b634e487b7160e01b600052603260045260246000fd5b600081611717576117176116b2565b50600019019056fea2646970667358221220b3e886f95c689d0a2b61cfdf2d0dd350bb38b4ce73cfbcb201a569fa5c782c8a64736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};
