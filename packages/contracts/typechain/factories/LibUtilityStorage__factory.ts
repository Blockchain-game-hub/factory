/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LibUtilityStorage,
  LibUtilityStorageInterface,
} from "../LibUtilityStorage";

const _abi = [
  {
    inputs: [],
    name: "STORAGE_SLOT",
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
        name: "c__0x034c1ab8",
        type: "bytes32",
      },
    ],
    name: "c_0x034c1ab8",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61016e610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063517d217e146100455780635fc1347a14610063575b600080fd5b61004d61007f565b60405161005a91906100f7565b60405180910390f35b61007d600480360381019061007891906100bb565b6100a3565b005b7f75bce7b27cc8f04e7a4282e725010cbd105f602d082c4b02f7d958135d62562e81565b50565b6000813590506100b581610121565b92915050565b6000602082840312156100d1576100d061011c565b5b60006100df848285016100a6565b91505092915050565b6100f181610112565b82525050565b600060208201905061010c60008301846100e8565b92915050565b6000819050919050565b600080fd5b61012a81610112565b811461013557600080fd5b5056fea26469706673582212200d7894725724537d85eee0ae373d4906997c3906f0983ad61014609bc04b336d64736f6c63430008070033";

export class LibUtilityStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibUtilityStorage> {
    return super.deploy(overrides || {}) as Promise<LibUtilityStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibUtilityStorage {
    return super.attach(address) as LibUtilityStorage;
  }
  connect(signer: Signer): LibUtilityStorage__factory {
    return super.connect(signer) as LibUtilityStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibUtilityStorageInterface {
    return new utils.Interface(_abi) as LibUtilityStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibUtilityStorage {
    return new Contract(address, _abi, signerOrProvider) as LibUtilityStorage;
  }
}
