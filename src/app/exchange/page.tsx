"use client";
import React, { FC } from "react";
import styles from "./page.module.css";
import { MetaMaskContextProvider } from "@/hooks/useMetaMask";
import Navigation from "@/components/Navigation/Navigation";
import Display from "@/components/Display/Display";

type Props = {};

const ExchangePage: FC<Props> = () => {
  return (
    (window as any).ethereum ?
    <MetaMaskContextProvider>
      <div className={styles.appContainer}>
        <Navigation />
        <Display />
      </div>
    </MetaMaskContextProvider>
    : <p>Loading</p>
  );
};

export default ExchangePage;
