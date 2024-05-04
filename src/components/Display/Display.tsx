import React, { FC, useState } from "react";
import styles from "./Display.module.css";
import { useMetaMask } from "@/hooks/useMetaMask";
import { Box, Button, Tab, Tabs } from "@mui/material";
import ExchangeForm from "../ExchangeForm/ExchangeForm";

type Props = {};

const Display: FC<Props> = () => {
  const { wallet, changeChain } = useMetaMask();
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
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              aria-label="eth chain"
              variant="contained"
              color="primary"
              onClick={() => changeChain("0x1")}
            >
              ETH chain
            </Button>
            <Button
              aria-label="bnb chain"
              variant="contained"
              color="primary"
              onClick={() => changeChain("0x38")}
            >
              BNB chain
            </Button>
          </Box>
          <Box className={styles.walletInfo}>
            <p className={styles.walletText}>
              Wallet balance: <span>{wallet.balance}</span>
            </p>
            <p className={styles.walletText}>
              Wallet account: <span>{wallet.accounts[0]}</span>
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
