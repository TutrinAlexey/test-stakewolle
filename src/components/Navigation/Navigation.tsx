import React, { FC } from "react";
import styles from "./Navigation.module.css";
import { useMetaMask } from "@/hooks/useMetaMask";
import { formatAddress } from "@/utils/constants";
import { Button } from "@mui/material";

type Props = {};

const Navigation: FC<Props> = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();

  return (
    <div className={styles.navigation}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav}>Task Stakewolle</div>
        <div className={styles.rightNav}>
          {!hasProvider && (
            <a
              href="https://metamask.io"
              target="_blank"
              rel="noreferrer"
              className={styles.installLink}
            >
              Install MetaMask
            </a>
          )}
          {(window as any).ethereum?.isMetaMask &&
            wallet.accounts.length < 1 && (
              <Button
                variant="contained"
                color="secondary"
                disabled={isConnecting}
                onClick={connectMetaMask}
              >
                Connect MetaMask
              </Button>
            )}
          {hasProvider && wallet.accounts.length > 0 && (
            <a
              className={styles.walletlLink}
              href={`https://etherscan.io/address/${wallet}`}
              target="_blank"
              data-tooltip="Open in Block Explorer"
              rel="noreferrer"
            >
              {formatAddress(wallet.accounts[0])}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
