"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./page.module.css";
import { MetaMaskContextProvider } from "@/hooks/useMetaMask";
import Navigation from "@/components/Navigation/Navigation";
import Display from "@/components/Display/Display";

type Props = {};

const ExchangePage: FC<Props> = () => {
  const [defaultContent, setDefaultContent] = useState<ReactNode>(null);

  useEffect(() => {
    setDefaultContent(
      <MetaMaskContextProvider>
        <div className={styles.appContainer}>
          <Navigation />
          <Display />
        </div>
      </MetaMaskContextProvider>
    );
  }, []);

  return defaultContent;
};

export default ExchangePage;
