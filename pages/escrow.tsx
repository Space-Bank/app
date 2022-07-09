import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { ReactComponentElement, useState } from "react";
import { Nfts } from "../components/Nfts";

const NFTBox: React.FC = () => {
  return <div className="nft-box"></div>;
};

const Escrow: NextPage = () => {
  const [activeTab, setActiveTab] = useState("ERC20");
  const [myInventory, setMyInventory] = useState(true);

  const handleActiveTab = (val: string) => {
    setActiveTab(val);
  };

  const handleInventory = (val: boolean) => {
    setMyInventory(val);
  };
  return (
    <div
      className="text-white items-center justify-center flex flex-col
    w-screen overflow-x-hidden px-10"
    >
      {/* Background */}
      <div className="z-0">
        <Image src="/bg_02.png" layout="fill" />
      </div>

      <div className="header max-w-4xl flex w-full mt-36">
        <div className="px-3 pt-1 pb-3 flex-1 flex flex-col">
          <div className="header-title font-saira-sb text-white text-3xl">
            TRADING
          </div>
          <div>
            <div className="header-infotext font-saira-500 p-2 mt-3 w-max">
              You’re trading with 0x27...0141
            </div>
          </div>
        </div>
        <div className="px-3 pt-1 pb-3 flex-1 flex flex-col">
          <div className="header-title font-saira-sb text-white text-3xl">
            TRADE WITH
          </div>
          <div className="relative">
            <input className="header-infotext font-saira-500 p-2 mt-3 w-full pl-12 pr-12" />
            <img src="./search.svg" className="absolute top-5 left-2" />
            <img
              src="./scan.svg"
              className="absolute top-5 right-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="z-10 max-w-4xl flex w-full gap-4 mb-26">
        <div className="flex-1">
          <div className="mt-4 flex-1 flex gap-1">
            <button
              className={
                myInventory ? "flex-1 py-4 button active" : "flex-1 py-4 button"
              }
              onClick={() => setMyInventory(true)}
            >
              Your inventory
            </button>
            <button
              className={
                !myInventory
                  ? "flex-1 py-4 button active"
                  : "flex-1 py-4 button"
              }
              onClick={() => setMyInventory(false)}
            >
              Their inventory
            </button>
          </div>
          <div className="mt-4 inventory-box flex-1 flex flex-col">
            <div className="flex-1 flex">
              <button
                className={
                  activeTab === "ERC20"
                    ? "flex-1 py-4 button active"
                    : "flex-1 py-4 button"
                }
                onClick={() => handleActiveTab("ERC20")}
              >
                ERC20
              </button>
              <button
                className={
                  activeTab === "ERC721"
                    ? "flex-1 py-4 button active"
                    : "flex-1 py-4 button"
                }
                onClick={() => handleActiveTab("ERC721")}
              >
                ERC721
              </button>
              <button
                className={
                  activeTab === "ERC1155"
                    ? "flex-1 py-4 button active"
                    : "flex-1 py-4 button"
                }
                onClick={() => handleActiveTab("ERC1155")}
              >
                ERC1155
              </button>
            </div>
            <div className="bg-black my-4 p-2 mx-3 flex gap-2 flex-wrap">
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox /> <NFTBox />
              <NFTBox /> <NFTBox />
              <NFTBox /> <NFTBox />
              <NFTBox /> <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox /> <NFTBox />
              <NFTBox />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mt-4 inventory-box px-3 pt-1 pb-3 flex-1 flex flex-col">
            <div>
              <div className="text-2xl mt-4">Your NFTs:</div>
              <div className="text-md">
                These are the NFTs you will lose in the trade.{" "}
              </div>
            </div>
            <div className="bg-black mt-4 p-2 flex gap-2 flex-wrap">
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
            </div>

            <div>
              <div className="text-2xl mt-4">Their NFTs:</div>
              <div className="text-md">
                These are the NFTs you will recieve in the trade.{" "}
              </div>
            </div>
            <div className="bg-black mt-4 p-2 flex gap-2 flex-wrap">
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
              <NFTBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrow;
