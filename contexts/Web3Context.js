import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  Provider as MulticallProvider,
  Contract as MulticallContract,
} from "ethers-multicall";
import { BigNumber, utils } from "ethers";

let toast = () => {};

const Web3Context = createContext();

const RPC_URL = "https://polygon-rpc.com";
const CHAIN_ID = 137;
const NATIVE_CURRENCY = {
  name: "MATIC",
  symbol: "MATIC", // 2-6 characters long
  decimals: 18,
};
const MULTI_CALL_ADDRESS = "0xd078799c53396616844e2fa97f0dd2b4c145a685";
const CHAIN_NAME = "Polygon Mainnet";
const BASE_URL = "http://localhost:5000/proposal";

// const RPC_URL = "https://rpc.hermesdefi.io/";
// const CHAIN_ID = 1666600000;
// const NATIVE_CURRENCY = {
//   name: "one",
//   symbol: "ONE", // 2-6 characters long
//   decimals: 18,
// };
// const MULTI_CALL_ADDRESS = "0x34b415f4d3b332515e66f70595ace1dcf36254c5";
// const CHAIN_NAME = "Harmony Mainnet";
// const BASE_URL = "http://localhost:5000/proposal";

export const Web3Provider = (props) => {
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();
  const [contractObjects, setContractObjects] = useState();
  const [contractAddresses, setContractAddresses] = useState({
    NFT_CONTRACT_ADDRESS: "",
    STAKING_CONTRACT_ADDRESS: "",
    COIN_CONTRACT_ADDRESS: "",
  });
  const [selectedProject, setSelectedProject] = useState();
  const [baseCoinPrice, setBaseCoinPrice] = useState();
  const [isPaused, setIsPaused] = useState();
  const [update, setUpdate] = useState(0);
  const [stats, setStats] = useState({});
  const [presentNetwork, setPresentNetwork] = useState();
  const functionsToExport = {};
  useEffect(() => {
    const fToRun = async () => {
      const chainId = await signer?.getChainId();
      console.log(chainId);
      setPresentNetwork(chainId);
    };
    fToRun();
  }, [signer]);

  const onAccountsChanged = async (accounts) => {
    setAccount(accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const _signer = provider.getSigner();
    setSigner(_signer);
  };
  useEffect(() => {
    if (selectedProject && ALL_CONTRACTS[selectedProject]) {
      setContractAddresses(ALL_CONTRACTS[selectedProject]?.contractAddress);
      setupContracts(signer, ALL_CONTRACTS[selectedProject]?.contractAddress);
    }
  }, [selectedProject, signer]);

  const addNewChain = async () => {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: `0x${CHAIN_ID.toString(16)}`,
          rpcUrls: [RPC_URL],
          chainName: CHAIN_NAME,
          nativeCurrency: NATIVE_CURRENCY,
        },
      ],
    });
  };
  const setupContracts = async (signer, _contractAddresses) => {};
  const switchCain = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${CHAIN_ID.toString(16)}` }],
    });
  };
  const promptChain = async () => {
    try {
      await switchCain();
    } catch (e) {
      await addNewChain();
      // await switchCain();
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const _signer = provider.getSigner();
    setSigner(_signer);
  };
  const onChainChanged = async (chainID) => {
    setPresentNetwork(parseInt(chainID, 16));

    await promptChain();
  };
  const setupMultiCallContract = async (contractAddress, abi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const ethcallProvider = new MulticallProvider(provider);

    await ethcallProvider.init();
    ethcallProvider._multicallAddress = MULTI_CALL_ADDRESS;
    console.log(contractAddress, abi);
    console.log(provider);
    console.log(ethcallProvider);

    const multicallContract = new MulticallContract(contractAddress, abi);
    return [ethcallProvider, multicallContract];
  };
  functionsToExport.connectWallet = async (defaultAccount = -1) => {
    const { ethereum } = window;

    if (!ethereum) {
      //   toast.error("You need a wallet to continue!");
      return;
    }

    if (ethereum) {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await ethereum.request({ method: "eth_accounts" });
      await promptChain();
      ethereum.on("chainChanged", onChainChanged);
      ethereum.on("accountsChanged", onAccountsChanged);
      setAccount(accounts[0]);
      //   toast.success("Wallet Connected!");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const _signer = provider.getSigner();
      setSigner(_signer);
    }
  };

  return (
    <Web3Context.Provider
      value={{
        account,
        isPaused,
        baseCoinPrice,
        selectedProject,
        setSelectedProject,
        contractObjects,
        stats,
        update,
        signer,
        presentNetwork,
        ...functionsToExport,
      }}
    >
      {props.children}
    </Web3Context.Provider>
  );
};
export default Web3Context;
