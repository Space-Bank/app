import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { ethers, BigNumber } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { stakingAddress, stakingAbi, tokenAbi, tokenAddress } from "../config";
import { injected } from "../connectors";
import { changeToHarmonyOneMainnet } from "../pages/mint";
import {
  Provider as MulticallProvider,
  Contract as MulticallContract,
} from "ethers-multicall";
import { JsonFragment } from "@ethersproject/abi";

const imageUrlBoss =
  "https://space-bank.s3.us-west-1.amazonaws.com/mobboss/images/$id.png";

export const Stake = ({ web3, address }: { web3: any; address: any }) => {
  const [claimableGsm, setClaimableGsm] = useState(0);
  const [gsmBalance, setGsmBalance] = useState(0);
  const [loadingNfts, setLoadingNfts] = useState(true);
  const [totalStaked, setTotalStaked] = useState(0);
  const [stakedNfts, setStakedNfts]: any[] = useState();

  const setupMultiCallContract = async (
    nftAddress: string,
    nftABI: JsonFragment[] | string[] | ethers.utils.Fragment[]
  ) => {
    const provider = new ethers.providers.Web3Provider(
      web3.currentProvider,
      "any"
    );
    const ethcallProvider = new MulticallProvider(provider);

    await ethcallProvider.init();
    ethcallProvider._multicallAddress =
      "0x34b415f4d3b332515e66f70595ace1dcf36254c5";

    const multicallContract = new MulticallContract(nftAddress, nftABI);
    return [ethcallProvider, multicallContract];
  };

  const loadInventory = async () => {
    console.log(address);
    const provider = new ethers.providers.Web3Provider(web3.currentProvider);
    const signer = provider.getSigner();
    try {
      let stakingContract = new ethers.Contract(
        stakingAddress,
        stakingAbi,
        signer
      );

      let tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);

      let currentGsm = await tokenContract.balanceOf(address);
      const formattedGsm = Number(
        ethers.utils.formatEther(BigNumber.from(currentGsm))
      );
      console.log(formattedGsm);
      setGsmBalance(formattedGsm);

      let stakedMobBosses = await stakingContract.getUserStaked(address);
      setTotalStaked(stakedMobBosses.length);
      console.log(stakedMobBosses.length);

      let data: any = [];
      for (var i = 0; i < stakedMobBosses.length; i++) {
        data.push(
          Number(ethers.utils.formatEther(BigNumber.from(stakedMobBosses[i]))) *
            10 ** 18
        );
      }
      console.log(data);
      setStakedNfts(data);

      const [multicallProvider, multicallContract] =
        await setupMultiCallContract(stakingAddress, stakingAbi);

      const tokenCalls = [];

      for (let i = 0; i < stakedMobBosses.length; i++) {
        const element = stakedMobBosses[i];
        tokenCalls.push(multicallContract.getRewards(element));
      }

      const _rewards = (await multicallProvider.all(tokenCalls)).map((e: any) =>
        parseFloat(parseFloat(ethers.utils.formatEther(e)).toFixed(4))
      );
      console.log(_rewards);

      let totalRewardAmount = 0;
      _rewards.forEach((el: number) => (totalRewardAmount += el));

      setClaimableGsm(totalRewardAmount);

      setLoadingNfts(false);
    } catch (err) {
      console.log("Here");
      console.error(err);
    }
  };

  const unstakeNft = async (i: number) => {
    const provider = new ethers.providers.Web3Provider(web3.currentProvider);
    const signer = provider.getSigner();
    try {
      let stakingContract = new ethers.Contract(
        stakingAddress,
        stakingAbi,
        signer
      );
      let tx = await stakingContract.unStake([i]);
      let t = await tx.wait();
    } catch (e: any) {
      console.error(e);
    }
  };

  const claimGsmNft = async (i: number) => {
    const provider = new ethers.providers.Web3Provider(web3.currentProvider);
    const signer = provider.getSigner();
    try {
      let stakingContract = new ethers.Contract(
        stakingAddress,
        stakingAbi,
        signer
      );
      let tx = await stakingContract.claimRewards([i]);
      let t = await tx.wait();
    } catch (e: any) {
      console.error(e);
    }
  };
  const claimGsmAll = async () => {
    const provider = new ethers.providers.Web3Provider(web3.currentProvider);
    const signer = provider.getSigner();
    try {
      let stakingContract = new ethers.Contract(
        stakingAddress,
        stakingAbi,
        signer
      );
      let tx = await stakingContract.claimRewards(stakedNfts);
      let t = await tx.wait();
    } catch (e: any) {
      console.error(e);
    }
  };

  useEffect(() => {
    address !== "" && loadInventory();
  }, [address]);

  return (
    <div className="z-20 flex flex-col items-center justify-center h-full w-screen py-36">
      <div className="z-10 flex flex-col pl-12 sm:pl-36 md:pl-48 w-full text-left space-y-4 pb-12">
        <div className="h-0.5 bg-white w-full rounded-full" />
        <div className="text-white flex flex-wrap space-x-20 space-y-4 justify-start items-center w-full pb-4">
          <p className="font-saira-b text-4xl sm:text-5xl flex text-left">
            STAKED
          </p>

          <div>
            <p className="font-saira-sb text-2xl">{gsmBalance.toFixed(4)}</p>
            <p className="text-lg font-saira-sb text-primary">
              <span className="text-white">$</span>GSM BALANCE
            </p>
          </div>
        </div>
      </div>

      {/* Staking */}
      <div className="z-40 space-y-12 mx-6 flex-col flex items-center">
        <div className="w-full max-w-2xl flex items-center justify-between rounded-sm bg-gradient-to-tr to-white/20 from-white/40 ring-1 ring-white/40 shadow-md p-2">
          <div className="flex flex-col mr-3">
            <p className="text-white font-saira-b text-lg">REWARD</p>
            <p>You have {claimableGsm} unclaimed $GSM</p>
          </div>

          <button
            onClick={(e: any) => {
              e.preventDefault();
              claimGsmAll();
            }}
            className="flex py-2 px-3 bg-primary hover:scale-105 duration-300 transition-all ease-in-out"
          >
            CLAIM ALL
          </button>
        </div>

        <div className="flex items-center justify-center flex-col space-y-6">
          <div className="justify-center w-full  items-center mx-1.5 flex flex-col space-y-4">
            <div className="font-saira-sb p-3 bg-gradient-to-tr to-primary from-primary/80 rounded-full shadow">
              300% GSM BONUS
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="border-b shadow-md border-white/40 text-xl font-saira-m sm:text-2xl text-white mr-12">
                STAKED
              </div>
              <div className="text-white">
                {20 * totalStaked}{" "}
                <span className="text-lg font-saira-sb text-primary">
                  <span className="text-white">$</span>GSM
                </span>{" "}
                PER DAY
              </div>
            </div>

            <div className="-translate-y-3 max-w-4xl flex rounded-smshadow-md p-2">
              <div className="flex flex-wrap items-center justify-center rounded-md shadow gap-10">
                {stakedNfts?.map((i: any) => (
                  <div
                    key={i}
                    className="flex flex-col space-y-2 items-center justify-center
                        bg-gradient-to-tr from-white/40 to-white/10 mx-auto p-2
                        rounded ring-1 ring-rose-100/75 shadow-sm shadow-rose-100/40
                        hover:shadow-md hover:shadow-rose-100/60"
                  >
                    <div className="">
                      <span className="flex space-x-1 items-center px-1 pb-1.5">
                        <span className="font-saira-m text-2xl mr-1.5">
                          MOB BOSS
                        </span>{" "}
                        {i}
                      </span>
                      <Image
                        src={imageUrlBoss.replace("$id", i)}
                        layout="responsive"
                        height={1}
                        width={1}
                        className="rounded-sm"
                      />
                    </div>
                    <button
                      onClick={(e: any) => {
                        e.preventDefault();
                        unstakeNft(i);
                      }}
                      className="flex py-2 px-3 bg-primary hover:scale-105 duration-300 transition-all ease-in-out"
                    >
                      UNSTAKE
                    </button>

                    <button
                      onClick={(e: any) => {
                        e.preventDefault();
                        claimGsmNft(i);
                      }}
                      className="flex py-2 px-3 bg-primary hover:scale-105 duration-300 transition-all ease-in-out"
                    >
                      CLAIM $GSM
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
