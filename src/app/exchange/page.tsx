"use client";
import React, { FC } from "react";
import styles from "./page.module.css";
import { MetaMaskContextProvider } from "@/hooks/useMetaMask";
import Navigation from "@/components/Navigation/Navigation";
import Display from "@/components/Display/Display";

type Props = {};

const page: FC<Props> = () => {
  return (
    <MetaMaskContextProvider>
      <div className={styles.container}>
        <Navigation />
        <Display />
      </div>
    </MetaMaskContextProvider>
  );
};

export default page;
