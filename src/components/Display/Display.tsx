import React, { FC, useState } from "react";
import styles from "./Display.module.css";
import { useMetaMask } from "@/hooks/useMetaMask";
import { formatChainAsNum } from "@/utils/constants";
import { Box, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import ExchangeForm from "../ExchangeForm/ExchangeForm";

type Props = {};

const Display: FC<Props> = () => {
  const { wallet } = useMetaMask();
  const [mode, setMode] = useState("buy");
  const [tabsValue, setTabsValue] = useState(0);

  const allyProps = (indexProps: number) => {
    return {
      id: `simple-tab-${indexProps}`,
      "aria-controls": `simple-tabpanel-${indexProps}`,
    };
  };
  const handleTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
    newValue === 0 ? setMode("buy") : setMode("exchange");
  };

  return (
    <div className={styles.display}>
      {wallet.accounts.length > 0 && (
        <>
          <Box className={styles.walletInfo}>
            <p className={styles.walletText}>
              Wallet balance: {wallet.balance}
            </p>
            <p className={styles.walletText}>
              Wallet accout: {wallet.accounts}
            </p>
          </Box>
          <Box component="section" className={styles.exchangeContainer}>
            <Tabs
              value={tabsValue}
              onChange={handleTabs}
              sx={{ marginBottom: "20px" }}
            >
              <Tab
                sx={{
                  "&.MuiTab-root": {
                    fontSize: "18px",
                    fontWeight: "700",
                  },
                  "&.MuiTab-root.Mui-selected": {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
                label="Fast buy"
                {...allyProps(0)}
              />
              <Tab
                sx={{
                  "&.MuiTab-root": {
                    fontSize: "18px",
                    fontWeight: "700",
                  },
                  "&.MuiTab-root.Mui-selected": {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
                label="Fast exchange"
                {...allyProps(1)}
              />
            </Tabs>
            <ExchangeForm mode={mode} />
          </Box>
        </>
      )}
    </div>
  );
};

export default Display;
