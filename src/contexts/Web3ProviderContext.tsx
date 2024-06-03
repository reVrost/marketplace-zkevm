import React, { createContext, useEffect, useState } from "react";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { providers } from "ethers";
import { passportSDK } from "@/sdk/immutable";
import { useLocalStorage } from "@mantine/hooks";
import { passport } from "@imtbl/sdk";

interface Ethereum extends ExternalProvider, JsonRpcFetchFunc {
  on: (
    eventName: "accountsChanged",
    handler: (accounts: string[]) => void,
  ) => void;
}

declare global {
  interface Window {
    ethereum: Ethereum;
  }
}

interface Web3ContextProps {
  web3Provider: Web3Provider | undefined;
  userAddress: string | undefined;
  setWeb3Provider: React.Dispatch<
    React.SetStateAction<Web3Provider | undefined>
  >;
  setUserAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Web3Context = createContext<Web3ContextProps>({
  web3Provider: undefined,
  userAddress: undefined,
  setWeb3Provider: () => {},
  setUserAddress: () => {},
});

export function Web3ProviderContextProvider({ children }: any) {
  const [web3Provider, setWeb3Provider] = useState<Web3Provider | undefined>(
    undefined,
  );
  const [userAddress, setUserAddress] = useState<string | undefined>(undefined);
  // const [passport] = useLocalStorage<string>({
  //   key: "passport",
  //   defaultValue: "",
  // });

  // Load web3provider if passport was logged in from local storage
  // useEffect(() => {
  //   console.log(passport);
  //   if (passport) {
  //     const provider = new providers.Web3Provider(passportSDK.connectEvm());
  //     const tryGetPassportProvider = async () => {
  //       try {
  //         const [connectedWallet]: (string | undefined)[] = await provider.send(
  //           "eth_requestAccounts",
  //           [],
  //         );
  //         if (!connectedWallet) {
  //           return;
  //         }
  //         setWeb3Provider(provider);
  //         setUserAddress(connectedWallet);
  //       } catch (e) {
  //         console.log(e);
  //         // do nothing
  //       }
  //     };
  //     tryGetPassportProvider();
  //   }
  // }, [passport]);

  // Load web3Provider from an already connected window.etherum
  useEffect(() => {
    if (window.ethereum) {
      const provider = new providers.Web3Provider(window.ethereum);
      const fetchProvider = async () => {
        if (provider) {
          try {
            console.log("provider", provider);
            const address = await provider.getSigner().getAddress();
            setWeb3Provider(provider);
            setUserAddress(address);
          } catch {
            // do nothing because metamask not initialized
          }
        }
      };
      fetchProvider();
      checkIfAccountChanged();
    }
  }, []);

  const checkIfAccountChanged = async () => {
    try {
      window.ethereum.on("accountsChanged", (accounts) => {
        console.log("accounts changed", accounts[0]);
        setUserAddress(accounts[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Web3Context.Provider
      value={{ web3Provider, setWeb3Provider, userAddress, setUserAddress }}
    >
      {children}
    </Web3Context.Provider>
  );
}
