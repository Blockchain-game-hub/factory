import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import 'hardhat-gas-reporter'
import { removeConsoleLog } from 'hardhat-preprocessor'
import 'hardhat-tracer'
import 'solidity-coverage'
import { parseUnits } from 'ethers/lib/utils'

const defaultPrivateKey =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' // hardhat 0

const config: HardhatUserConfig = {
  preprocess: {
    eachLine: removeConsoleLog(
      (hre) =>
        hre.network.name !== 'localhost' && hre.network.name !== 'hardhat'
    ),
  },
  gasReporter: {
    currency: 'EUR',
    enabled: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    gasPrice: 100, // in gwei
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.7',
      },
      {
        version: '0.7.6',
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    managerDestination: process.env.MANAGER_DESTINATION_ADDRESS || 1,
    managerDestinationUtility:
      process.env.MANAGER_DESTINATION_UTILITY_ADDRESS || 1,
    oncyber: process.env.ONCYBER_ADDRESS || 2,
    biconomyForwarder:
      process.env.BICONOMY_FORWARDER ||
      '0x9399BB24DBB5C4b782C70c2969F58716Ebbd6a3b',
    opensea:
      process.env.OPENSEA || '0x53d791f18155c211ff8b58671d0f7e9b50e596ad',
  },
  networks: {
    localhost: {
      url: `http://localhost:8545`,
      // accounts: [
      // defaultPrivateKey,
      // ]
    },
    // ETHEREUM
    rinkeby: {
      chainId: 4,
      url: 'https://rinkeby.infura.io/v3/b89e58ca51184cb783845c58340629c4',
      gasPrice: parseUnits('1', 'gwei').toNumber(),
      accounts: [process.env.RINKEBY_PRIVATE_KEY || defaultPrivateKey],
    },
    ethereum: {
      chainId: 1,
      url:
        process.env.ALCHEMY_URL ||
        'https://mainnet.infura.io/v3/b89e58ca51184cb783845c58340629c4',
      gasPrice: parseUnits('59', 'gwei').toNumber(),
      accounts: [process.env.MAINNET_FACTORY_PRIVATE_KEY || defaultPrivateKey],
    },
  },
}

export default config
