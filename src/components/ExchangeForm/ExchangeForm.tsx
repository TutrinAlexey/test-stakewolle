import React, { FC, useEffect, useState } from "react";
import styles from "./ExchangeForm.module.css";
import {
  Box,
  Button,
  FilledInput,
  InputAdornment,
  InputLabel,
  Tab,
  Tabs,
} from "@mui/material";
import Image from "next/image";
import InputTabs from "../InputTabs/InputTabs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { AiFillEuroCircle } from "react-icons/ai";
import { PiCurrencyRubFill } from "react-icons/pi";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import Link from "next/link";
import { chooseValueData } from "@/utils/constants";

type Props = {
  mode: string;
};

const ExchangeForm: FC<Props> = ({ mode }) => {
  const [leftInput, setLeftInput] = useState<number>(0);
  const [rightInput, setRightInput] = useState<number>(0);
  const [leftTabsValue, setLeftTabsValue] = useState(0);
  const [rightTabsValue, setRightTabsValue] = useState(0);

  useEffect(() => {
    if (mode === "buy") {
      setLeftTabsValue(0);
      setRightTabsValue(0);
    } else {
      setLeftTabsValue(0);
      setRightTabsValue(1);
    }
  }, [mode]);

  const allyProps = (indexProps: number, modeProps: string) => {
    return {
      id: `simple-tab-${indexProps}-${modeProps}`,
      "aria-controls": `simple-tabpanel-${indexProps}-${modeProps}`,
    };
  };

  const handleSide = (side: string) => {
    return side === "left" ? leftTabsValue : rightTabsValue;
  };

  const getTabs = (modeTabs: string, sideTabs: string) => {
    const handleTabs = (event: React.SyntheticEvent, newValue: number) => {
      sideTabs === "left"
        ? setLeftTabsValue(newValue)
        : setRightTabsValue(newValue);
    };
    if (modeTabs === "buy" && sideTabs === "right") {
      return (
        <Tabs
          value={handleSide(sideTabs)}
          onChange={handleTabs}
          sx={{
            ".MuiTabs-flexContainer": {
              gap: "8px",
            },
            ".MuiTabs-indicator": { height: "0" },
          }}
        >
          <Tab
            sx={{
              "&.MuiTab-root": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                minHeight: 0,
                border: "1px solid black",
              },
              "&.MuiTab-root.Mui-selected": {
                color: "white",
                backgroundColor: "black",
              },
              "&.MuiTab-root.Mui-disabled": {
                color: "white",
                backgroundColor: "grey",
                border: "1px solid grey",
              },
            }}
            icon={<BiSolidDollarCircle size={30} />}
            iconPosition="start"
            label="USD"
            {...allyProps(0, mode)}
          />
          <Tab
            sx={{
              "&.MuiTab-root": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                minHeight: 0,
                border: "1px solid black",
              },
              "&.MuiTab-root.Mui-selected": {
                color: "white",
                backgroundColor: "black",
              },
              "&.MuiTab-root.Mui-disabled": {
                color: "white",
                backgroundColor: "grey",
                border: "1px solid grey",
              },
            }}
            icon={<AiFillEuroCircle size={30} />}
            iconPosition="start"
            label="EUR"
            {...allyProps(1, mode)}
          />
          <Tab
            sx={{
              "&.MuiTab-root": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                minHeight: 0,
                border: "1px solid black",
              },
              "&.MuiTab-root.Mui-selected": {
                color: "white",
                backgroundColor: "black",
              },
              "&.MuiTab-root.Mui-disabled": {
                color: "white",
                backgroundColor: "grey",
                border: "1px solid grey",
              },
            }}
            icon={<PiCurrencyRubFill size={30} />}
            iconPosition="start"
            label="RUB"
            {...allyProps(2, mode)}
          />
        </Tabs>
      );
    } else {
      return (
        <Tabs
          value={handleSide(sideTabs)}
          onChange={handleTabs}
          sx={{
            ".MuiTabs-flexContainer": {
              gap: "8px",
            },
            ".MuiTabs-indicator": { height: "0" },
          }}
        >
          <Tab
            disabled={
              (mode === "exchange" &&
                sideTabs === "right" &&
                leftTabsValue === 0) ||
              (mode === "exchange" &&
                sideTabs === "left" &&
                rightTabsValue === 0)
            }
            sx={{
              "&.MuiTab-root": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                minHeight: 0,
                border: "1px solid black",
              },
              "&.MuiTab-root.Mui-selected": {
                color: "white",
                backgroundColor: "black",
              },
              "&.MuiTab-root.Mui-disabled": {
                color: "white",
                backgroundColor: "grey",
                border: "1px solid grey",
              },
            }}
            icon={<FaBitcoin size={30} />}
            iconPosition="start"
            label="BTC"
            {...allyProps(0, mode)}
          />
          <Tab
            disabled={
              (mode === "exchange" &&
                sideTabs === "right" &&
                leftTabsValue === 1) ||
              (mode === "exchange" &&
                sideTabs === "left" &&
                rightTabsValue === 1)
            }
            sx={{
              "&.MuiTab-root": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                minHeight: 0,
                border: "1px solid black",
              },
              "&.MuiTab-root.Mui-selected": {
                color: "white",
                backgroundColor: "black",
              },
              "&.MuiTab-root.Mui-disabled": {
                color: "white",
                backgroundColor: "grey",
                border: "1px solid grey",
              },
            }}
            icon={<SiTether size={30} />}
            iconPosition="start"
            label="USDT"
            {...allyProps(1, mode)}
          />
          <Tab
            disabled={
              (mode === "exchange" &&
                sideTabs === "right" &&
                leftTabsValue === 2) ||
              (mode === "exchange" &&
                sideTabs === "left" &&
                rightTabsValue === 2)
            }
            sx={{
              "&.MuiTab-root": {
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                minHeight: 0,
                border: "1px solid black",
              },
              "&.MuiTab-root.Mui-selected": {
                color: "white",
                backgroundColor: "black",
              },
              "&.MuiTab-root.Mui-disabled": {
                color: "white",
                backgroundColor: "grey",
                border: "1px solid grey",
              },
            }}
            icon={<FaEthereum size={30} />}
            iconPosition="start"
            label="ETH"
            {...allyProps(2, mode)}
          />
        </Tabs>
      );
    }
  };

  return (
    <>
      <Box component="div" className={styles.inputsContainer}>
        <InputTabs
          mode={mode}
          side="left"
          inputValue={leftInput}
          setInputValue={setLeftInput}
          tabs={getTabs(mode, "left")}
          tabsValue={leftTabsValue}
        />
        <Button
          aria-label="exchange"
          variant="contained"
          color="primary"
          className={styles.exchangeButton}
        >
          <Image
            src="/exchange-icon.svg"
            alt="Exchange Icon"
            width={40}
            height={40}
          />
        </Button>
        <InputTabs
          mode={mode}
          side="right"
          inputValue={rightInput}
          setInputValue={setRightInput}
          tabs={getTabs(mode, "right")}
          tabsValue={rightTabsValue}
        />
      </Box>
      <Box component="div" className={styles.exchangeBottom}>
        <p>
          1.00 {chooseValueData(mode, "left")[leftTabsValue]} = {}{" "}
          {chooseValueData(mode, "right")[rightTabsValue]}
        </p>
        <p>
          Source:{" "}
          <Link href="https://www.banknn.ru/" target="_blank">
            banknn.ru
          </Link>
        </p>
        <p>
          Commission <span className={styles.procent}>10%</span>
        </p>
      </Box>
    </>
  );
};

export default ExchangeForm;
