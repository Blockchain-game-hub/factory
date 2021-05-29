/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CyberDestinationFactoryFacet,
  CyberDestinationFactoryFacetInterface,
} from "../CyberDestinationFactoryFacet";

const _abi = [
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
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Minted",
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
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_trustedForwarder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_opensea",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oncyber",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_oncyberShare",
        type: "uint256",
      },
    ],
    name: "initialize",
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
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
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
    name: "manager",
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
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "minterNonce",
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
    name: "oncyber",
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
    name: "oncyberShare",
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
        name: "status",
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
        name: "_tokenId",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506122fc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c80634922127e11610097578063bc01188e11610066578063bc01188e14610257578063c26526781461025f578063e985e9c514610267578063f242432a1461027a57600080fd5b80634922127e146101d05780634e1273f4146101e3578063572b6c0514610203578063a22cb4651461024457600080fd5b806318160ddd116100d357806318160ddd146101805780631b023947146101885780632eb2c2d61461019b578063481c6a75146101b057600080fd5b8062fdd58e1461010457806301ffc9a71461012a5780630e89341c1461014d57806310662e911461016d575b600080fd5b610117610112366004611b09565b61028d565b6040519081526020015b60405180910390f35b61013d610138366004611bfd565b610333565b6040519015158152602001610121565b61016061015b366004611d25565b610376565b6040516101219190611f78565b61011761017b366004611cbb565b6104cf565b61011761077c565b610117610196366004611973565b61078e565b6101ae6101a93660046119c6565b6107bb565b005b6101b8610808565b6040516001600160a01b039091168152602001610121565b6101ae6101de366004611c35565b610821565b6101f66101f1366004611b32565b6109ad565b6040516101219190611f40565b61013d610211366004611973565b7fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae993546001600160a01b0390811691161490565b6101ae610252366004611acf565b610bf3565b6101b8610ce9565b610117610d05565b61013d610275366004611994565b610d18565b6101ae610288366004611a6c565b610d65565b60006001600160a01b0383166102fe5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b6000805160206122a78339815191526000928352602090815260408084206001600160a01b0395909516845293905250205490565b6001600160e01b0319811660009081527f326d0c59a7612f6a9919e2a8ee333c80ba689d8ba2634de89c85cbb04832e705602052604081205460ff165b92915050565b60008181527fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c8360205260408120805460609291906103b390612113565b80601f01602080910402602001604051908101604052809291908181526020018280546103df90612113565b801561042c5780601f106104015761010080835404028352916020019161042c565b820191906000526020600020905b81548152906001019060200180831161040f57829003601f168201915b505050505090508051600014156104855760405162461bcd60e51b815260206004820152601d60248201527f455243313135355552493a20746f6b656e4964206e6f7420657869737400000060448201526064016102f5565b6040516104b8907fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c84908390602001611e00565b604051602081830303815290604052915050919050565b6000806104da610dab565b905060006104e78261078e565b90506000868683856040516020016105029493929190611dbf565b6040516020818303038152906040529050600061057d8661057784805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90610e01565b9050610587610eb7565b546001600160a01b038281169116146105c75760405162461bcd60e51b81526020600482015260026024820152614e4d60f01b60448201526064016102f5565b60646105d1610eb7565b600501546105df90896120b1565b6105e99190612196565b1561061b5760405162461bcd60e51b8152602060048201526002602482015261494160f01b60448201526064016102f5565b60006064610627610eb7565b60050154610635908a6120b1565b61063f919061209d565b905061065361064c610eb7565b6002015490565b955061065f868a610edb565b61067661066a610eb7565b60020180546001019055565b6106a6610681610eb7565b6001600160a01b03871660009081526003919091016020526040902080546001019055565b6106c185878a60405180602001604052806000815250610f1e565b6106f685866106ce610eb7565b600401546040805160208101909152600081526001600160a01b03909116908a908690610f3f565b8786866001600160a01b03167f25b428dfde728ccfaddad7e29e4ac23c24ed7fd1a6e3e3f91894a9a073f5dfff60405160405180910390a461074c8561073a610eb7565b600101546001600160a01b0316610d18565b6107705761077061075b610eb7565b6001908101546001600160a01b031690610bf3565b50505050509392505050565b600061078961064c610eb7565b905090565b600061037061079b610eb7565b6001600160a01b0384166000908152600391909101602052604090205490565b6001600160a01b0385163314806107d757506107d78533610d18565b6107f35760405162461bcd60e51b81526004016102f590611fd3565b610801338686868686610f63565b5050505050565b6000610812610eb7565b546001600160a01b0316919050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b0316331461087f5760405162461bcd60e51b81526020600482015260026024820152614e4f60f01b60448201526064016102f5565b7fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae99380546001600160a01b0319166001600160a01b038616179055636cdb3d1360e11b6000527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527f845f7f8d885943dffdc1524acbd9538b2923f93aad26d306df3b8982c7f0632d805460ff1916600117905561091d86610f7f565b84610926610eb7565b80546001600160a01b0319166001600160a01b03929092169190911790558261094d610eb7565b60010180546001600160a01b0319166001600160a01b039290921691909117905581610977610eb7565b60040180546001600160a01b0319166001600160a01b0392909216919091179055806109a1610eb7565b60050155505050505050565b60608151835114610a125760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016102f5565b82516000805160206122a78339815191529060009067ffffffffffffffff811115610a4d57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a76578160200160208202803683370190505b50905060005b8551811015610bea5760006001600160a01b0316868281518110610ab057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161415610b295760405162461bcd60e51b815260206004820152603160248201527f455243313135353a2062617463682062616c616e636520717565727920666f7260448201527020746865207a65726f206164647265737360781b60648201526084016102f5565b826000868381518110610b4c57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000878381518110610b8457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610bcd57634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610be28161217b565b915050610a7c565b50949350505050565b336001600160a01b0383161415610c5e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016102f5565b3360008181527f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000610cf3610eb7565b600401546001600160a01b0316919050565b6000610d0f610eb7565b60050154905090565b6001600160a01b0391821660009081527f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68c6020908152604080832093909416825291909152205460ff1690565b6001600160a01b038516331480610d815750610d818533610d18565b610d9d5760405162461bcd60e51b81526004016102f590611fd3565b610801338686868686610f3f565b600060183610801590610de757507fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae993546001600160a01b031633145b15610df9575060131936013560601c90565b503390565b90565b600080600080845160411415610e2b5750505060208201516040830151606084015160001a610ea1565b845160401415610e595750505060408201516020830151906001600160ff1b0381169060ff1c601b01610ea1565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102f5565b610ead86828585610fb5565b9695505050505050565b7f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5e90565b60008281527fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c83602090815260409091208251610f19928401906117db565b505050565b610f2d3360008686868661115e565b610f39848484846112d2565b50505050565b610f4d86868686868661115e565b610f5b8686868686866113e1565b505050505050565b610f718686868686866114e7565b610f5b8686868686866115b1565b8051610fb1907fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c849060208401906117db565b5050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156110325760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102f5565b8360ff16601b148061104757508360ff16601c145b61109e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102f5565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156110f2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111555760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102f5565b95945050505050565b6001600160a01b0384163b15610f5b5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906111a29089908990889088908890600401611efb565b602060405180830381600087803b1580156111bc57600080fd5b505af19250505080156111ec575060408051601f3d908101601f191682019092526111e991810190611c19565b60015b611299576111f86121ec565b806308c379a01415611232575061120d612203565b806112185750611234565b8060405162461bcd60e51b81526004016102f59190611f78565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016102f5565b6001600160e01b0319811663f23a6e6160e01b146112c95760405162461bcd60e51b81526004016102f590611f8b565b50505050505050565b6001600160a01b0384166113325760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016102f5565b61134b3360008661134287611782565b61080187611782565b60008381526000805160206122a7833981519152602090815260408083206001600160a01b038816845291829052822080549192859261138c908490612085565b909155505060408051858152602081018590526001600160a01b0387169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6001600160a01b0384166114075760405162461bcd60e51b81526004016102f59061201c565b61141686868661134287611782565b60008381526000805160206122a7833981519152602081815260408084206001600160a01b038a16855290915282208054919285926114569084906120d0565b90915550506000848152602082815260408083206001600160a01b03891684529091528120805485929061148b908490612085565b909155505060408051858152602081018590526001600160a01b038088169289821692918b16917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a450505050505050565b6001600160a01b0384163b15610f5b5760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061152b9089908990889088908890600401611e9d565b602060405180830381600087803b15801561154557600080fd5b505af1925050508015611575575060408051601f3d908101601f1916820190925261157291810190611c19565b60015b611581576111f86121ec565b6001600160e01b0319811663bc197c8160e01b146112c95760405162461bcd60e51b81526004016102f590611f8b565b6001600160a01b0384166115d75760405162461bcd60e51b81526004016102f59061201c565b81518351146116395760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016102f5565b6000805160206122a783398151915260005b845181101561173257600085828151811061167657634e487b7160e01b600052603260045260246000fd5b6020026020010151905060008583815181106116a257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815286835260408082206001600160a01b038e1683529093529182208054919350839290916116e19084906120d0565b90915550506000828152602085815260408083206001600160a01b038c16845290915281208054839290611716908490612085565b925050819055505050808061172a9061217b565b91505061164b565b50846001600160a01b0316866001600160a01b0316886001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516114d6929190611f53565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106117ca57634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b8280546117e790612113565b90600052602060002090601f016020900481019282611809576000855561184f565b82601f1061182257805160ff191683800117855561184f565b8280016001018555821561184f579182015b8281111561184f578251825591602001919060010190611834565b5061185b92915061185f565b5090565b5b8082111561185b5760008155600101611860565b80356001600160a01b038116811461188b57600080fd5b919050565b600082601f8301126118a0578081fd5b813560206118ad82612061565b6040516118ba828261214e565b8381528281019150858301600585901b870184018810156118d9578586fd5b855b858110156118f7578135845292840192908401906001016118db565b5090979650505050505050565b600082601f830112611914578081fd5b813567ffffffffffffffff81111561192e5761192e6121d6565b604051611945601f8301601f19166020018261214e565b818152846020838601011115611959578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611984578081fd5b61198d82611874565b9392505050565b600080604083850312156119a6578081fd5b6119af83611874565b91506119bd60208401611874565b90509250929050565b600080600080600060a086880312156119dd578081fd5b6119e686611874565b94506119f460208701611874565b9350604086013567ffffffffffffffff80821115611a10578283fd5b611a1c89838a01611890565b94506060880135915080821115611a31578283fd5b611a3d89838a01611890565b93506080880135915080821115611a52578283fd5b50611a5f88828901611904565b9150509295509295909350565b600080600080600060a08688031215611a83578081fd5b611a8c86611874565b9450611a9a60208701611874565b93506040860135925060608601359150608086013567ffffffffffffffff811115611ac3578182fd5b611a5f88828901611904565b60008060408385031215611ae1578182fd5b611aea83611874565b915060208301358015158114611afe578182fd5b809150509250929050565b60008060408385031215611b1b578182fd5b611b2483611874565b946020939093013593505050565b60008060408385031215611b44578182fd5b823567ffffffffffffffff80821115611b5b578384fd5b818501915085601f830112611b6e578384fd5b81356020611b7b82612061565b604051611b88828261214e565b8381528281019150858301600585901b870184018b1015611ba7578889fd5b8896505b84871015611bd057611bbc81611874565b835260019690960195918301918301611bab565b5096505086013592505080821115611be6578283fd5b50611bf385828601611890565b9150509250929050565b600060208284031215611c0e578081fd5b813561198d8161228d565b600060208284031215611c2a578081fd5b815161198d8161228d565b60008060008060008060c08789031215611c4d578384fd5b863567ffffffffffffffff811115611c63578485fd5b611c6f89828a01611904565b965050611c7e60208801611874565b9450611c8c60408801611874565b9350611c9a60608801611874565b9250611ca860808801611874565b915060a087013590509295509295509295565b600080600060608486031215611ccf578081fd5b833567ffffffffffffffff80821115611ce6578283fd5b611cf287838801611904565b9450602086013593506040860135915080821115611d0e578283fd5b50611d1b86828701611904565b9150509250925092565b600060208284031215611d36578081fd5b5035919050565b6000815180845260208085019450808401835b83811015611d6c57815187529582019590820190600101611d50565b509495945050505050565b60008151808452611d8f8160208601602086016120e7565b601f01601f19169290920160200192915050565b60008151611db58185602086016120e7565b9290920192915050565b60008551611dd1818460208a016120e7565b9190910193845250602083019190915260601b6bffffffffffffffffffffffff19166040820152605401919050565b600080845482600182811c915080831680611e1c57607f831692505b6020808410821415611e3c57634e487b7160e01b87526022600452602487fd5b818015611e505760018114611e6157611e8d565b60ff19861689528489019650611e8d565b60008b815260209020885b86811015611e855781548b820152908501908301611e6c565b505084890196505b5050505050506111558185611da3565b6001600160a01b0386811682528516602082015260a060408201819052600090611ec990830186611d3d565b8281036060840152611edb8186611d3d565b90508281036080840152611eef8185611d77565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611f3590830184611d77565b979650505050505050565b60208152600061198d6020830184611d3d565b604081526000611f666040830185611d3d565b82810360208401526111558185611d3d565b60208152600061198d6020830184611d77565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b600067ffffffffffffffff82111561207b5761207b6121d6565b5060051b60200190565b60008219821115612098576120986121aa565b500190565b6000826120ac576120ac6121c0565b500490565b60008160001904831182151516156120cb576120cb6121aa565b500290565b6000828210156120e2576120e26121aa565b500390565b60005b838110156121025781810151838201526020016120ea565b83811115610f395750506000910152565b600181811c9082168061212757607f821691505b6020821081141561214857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff81118282101715612174576121746121d6565b6040525050565b600060001982141561218f5761218f6121aa565b5060010190565b6000826121a5576121a56121c0565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115610dfe57600481823e5160e01c90565b600060443d10156122115790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561224157505050505090565b82850191508151818111156122595750505050505090565b843d87010160208285010111156122735750505050505090565b6122826020828601018761214e565b509095945050505050565b6001600160e01b0319811681146122a357600080fd5b5056fe1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68ba2646970667358221220b0b35dbbafc873b0e25f408fa01f1c3934e66ee1f41f58cda70b9f71ef28a19864736f6c63430008040033";

export class CyberDestinationFactoryFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CyberDestinationFactoryFacet> {
    return super.deploy(
      overrides || {}
    ) as Promise<CyberDestinationFactoryFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CyberDestinationFactoryFacet {
    return super.attach(address) as CyberDestinationFactoryFacet;
  }
  connect(signer: Signer): CyberDestinationFactoryFacet__factory {
    return super.connect(signer) as CyberDestinationFactoryFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CyberDestinationFactoryFacetInterface {
    return new utils.Interface(_abi) as CyberDestinationFactoryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CyberDestinationFactoryFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CyberDestinationFactoryFacet;
  }
}
