import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Nav } from "../components/Nav";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider as AAA } from "@ethersproject/providers";
import { Footer } from "../components/Footer";
import "./style.css";
import { Web3Provider } from "../contexts/Web3Context";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWt8P59ujTfLoEIuuIfwyr4OVFxItY6Ds",
  authDomain: "spacebank-main-website.firebaseapp.com",
  projectId: "spacebank-main-website",
  storageBucket: "spacebank-main-website.appspot.com",
  messagingSenderId: "167248772020",
  appId: "1:167248772020:web:c48bf7d0fa372ae2f890e1",
  measurementId: "G-D28LLWQ0M6",
};

// Initialize Firebase

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new AAA(provider, "any");
    library.pollingInterval = 15000;
    return library;
  };
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);

  return (
    <Web3Provider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="flex flex-col w-full h-full fixed text-white/80 bg-black backdrop-blur-sm z-0 font-saira">
          <Head>
            <title>Space Bank</title>
            <meta
              name="description"
              content="SPACEBANK | Home of SPACEBANK HEIST and NFT Escrow + Lending and on Harmony ONE"
            />
            <meta
              name="keywords"
              content="space, bank, spacebank, harmony, nfts, defi, p2e, nft, gaming, eztools, jager, ace, harmonyspacebank, space bank"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main
            className="flex flex-col h-full scroll-smooth
        overflow-y-scroll bg-transparent justify-between"
          >
            <div className="top-0 sticky z-50 h-0">
              <Nav />
            </div>
            <div className="">
              <Component {...pageProps} />
            </div>
            <footer className="z-0 bottom-0">
              <Footer />
            </footer>
          </main>
        </div>
      </Web3ReactProvider>
    </Web3Provider>
  );
}

export default MyApp;
