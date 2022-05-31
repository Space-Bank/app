export const stakingAddress = "0x39F6637677b57912dF320A1252ab25A538417614";

export const recruitAddress = "0xB9FEf2499Fa2083Ea0B3b5957AC49577E306C5F2";
export const bossAddress = "0xEea9f969Be81cFFF70a6B68F6146E0A029F7C26E";

export const tokenAddress = "0xec072Ea4Ad797a751a951a8fFDcA228812c44f0d";

export const recruitAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_initBaseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_GSM",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DAILY_REWARD_GSM",
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
    name: "MAX_SUPPLY",
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
    name: "PRICE_PER_RECRUIT",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "claimReward",
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
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
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
        name: "tokenId",
        type: "uint256",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
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
        name: "_newBaseExtension",
        type: "string",
      },
    ],
    name: "setBaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseURI",
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
    name: "symbol",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
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
    ],
    name: "viewRewardAmount",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "walletOfOwner",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const bossAbi = [
  {
    inputs: [],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    anonymous: false,
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        indexed: true,
        type: "address",
        name: "approved",
        internalType: "address",
      },
      {
        indexed: true,
        type: "uint256",
        internalType: "uint256",
        name: "tokenId",
      },
    ],
    type: "event",
    name: "Approval",
  },
  {
    name: "ApprovalForAll",
    type: "event",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        indexed: true,
        type: "address",
        name: "operator",
        internalType: "address",
      },
      {
        type: "bool",
        indexed: false,
        name: "approved",
        internalType: "bool",
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "from",
      },
      {
        internalType: "address",
        type: "address",
        indexed: true,
        name: "to",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "tokenId",
      },
    ],
    type: "function",
    name: "approve",
    outputs: [],
  },
  {
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
  },
  {
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    name: "getApproved",
  },
  {
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    constant: true,
    signature: "0x06fdde03",
  },
  {
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    outputs: [],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "from",
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    name: "safeTransferFrom",
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
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        type: "bytes",
        name: "_data",
      },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "safeTransferFrom",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "setApprovalForAll",
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        type: "bool",
        name: "approved",
        internalType: "bool",
      },
    ],
    outputs: [],
  },
  {
    name: "supportsInterface",
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        name: "interfaceId",
        internalType: "bytes4",
        type: "bytes4",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
  },
  {
    outputs: [
      {
        internalType: "string",
        type: "string",
        name: "",
      },
    ],
    inputs: [],
    name: "symbol",
    type: "function",
    stateMutability: "view",
    constant: true,
    signature: "0x95d89b41",
  },
  {
    inputs: [
      {
        type: "uint256",
        name: "index",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "tokenByIndex",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "index",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "tokenId",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        type: "string",
        internalType: "string",
        name: "",
      },
    ],
  },
  {
    stateMutability: "view",
    name: "totalSupply",
    inputs: [],
    type: "function",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    constant: true,
    signature: "0x18160ddd",
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "from",
      },
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferFrom",
  },
  {
    name: "mint",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    outputs: [],
    type: "function",
  },
];

export const tokenAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        indexed: true,
        type: "address",
      },
      {
        name: "spender",
        indexed: true,
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Approval",
  },
  {
    name: "Transfer",
    type: "event",
    anonymous: false,
    inputs: [
      {
        internalType: "address",
        indexed: true,
        type: "address",
        name: "from",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "value",
        indexed: false,
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "approve",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "spender",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    type: "function",
    name: "balanceOf",
  },
  {
    inputs: [],
    name: "decimals",
    stateMutability: "view",
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    type: "function",
    constant: true,
    signature: "0x313ce567",
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "subtractedValue",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    type: "function",
    name: "decreaseAllowance",
  },
  {
    name: "increaseAllowance",
    type: "function",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "addedValue",
      },
    ],
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    type: "function",
    stateMutability: "view",
    constant: true,
    signature: "0x06fdde03",
  },
  {
    stateMutability: "view",
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    type: "function",
    constant: true,
    signature: "0x95d89b41",
  },
  {
    type: "function",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    name: "totalSupply",
    inputs: [],
    constant: true,
    signature: "0x18160ddd",
  },
  {
    type: "function",
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "transferFrom",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
  },
  {
    inputs: [
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "mint",
    outputs: [],
  },
];

export const stakingAbi = [
  {
    inputs: [
      {
        name: "_nft",
        internalType: "address",
        type: "address",
      },
      {
        type: "address",
        name: "_reward",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "_firstRate",
      },
    ],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    name: "OwnershipTransferred",
    type: "event",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "previousOwner",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        indexed: true,
        type: "address",
      },
    ],
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "multiplier",
    type: "function",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "rate",
  },
  {
    outputs: [],
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    name: "time",
  },
  {
    type: "function",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "lastClaim",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "position",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "rateIndex",
      },
    ],
    stateMutability: "view",
    name: "tokenInfo",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "transferOwnership",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "newOwner",
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userStaked",
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    name: "stake",
    outputs: [],
    inputs: [
      {
        name: "tokenIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "unStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "uint256[]",
        type: "uint256[]",
        name: "tokenIds",
      },
    ],
  },
  {
    outputs: [],
    inputs: [
      {
        name: "tokenIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewards",
  },
  {
    type: "function",
    name: "getMultiplier",
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
  {
    stateMutability: "view",
    name: "getRewards",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    type: "function",
    inputs: [
      {
        name: "_id",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    name: "emergencyUnstake",
    inputs: [
      {
        internalType: "uint256[]",
        type: "uint256[]",
        name: "tokenIds",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
  },
  {
    stateMutability: "view",
    name: "getUserStaked",
    type: "function",
    outputs: [
      {
        type: "uint256[]",
        internalType: "uint256[]",
        name: "",
      },
    ],
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "uint256",
        name: "_newRate",
        internalType: "uint256",
      },
    ],
    name: "updateRewards",
    outputs: [],
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    name: "pause",
    outputs: [],
    inputs: [
      {
        internalType: "bool",
        name: "_pause",
        type: "bool",
      },
    ],
    type: "function",
  },
  {
    type: "function",
    outputs: [],
    name: "setNFT",
    inputs: [
      {
        name: "_newNftAddress",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardTokenAddress",
        type: "address",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "setRewardToken",
    outputs: [],
  },
  {
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    name: "retrieveRewardToken",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_to",
      },
    ],
  },
];
