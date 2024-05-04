import React, { FC, useEffect, useState } from "react";
import styles from "./ExchangeForm.module.css";
import { Box, Button, Tab, Tabs } from "@mui/material";
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
  const [swap, setSwap] = useState(true);

  // Имя первого элемента, которое отображается под обменником
  const firstElementName = chooseValueData(
    mode,
    swap ? "left" : "right",
    swap ? leftTabsValue : rightTabsValue
  ).name;
  // Имя второго элемента, которое отображается под обменником
  const secondElementName = chooseValueData(
    mode,
    swap ? "right" : "left",
    swap ? rightTabsValue : leftTabsValue
  ).name;
  // Курс второго элемента по отношению ко второму, которое отображается под обменником
  const secondElementOfRate = chooseValueData(
    mode,
    swap ? "left" : "right",
    swap ? leftTabsValue : rightTabsValue
  ).rateTo[
    chooseValueData(
      mode,
      swap ? "right" : "left",
      swap ? rightTabsValue : leftTabsValue
    ).name
  ];
  useEffect(() => {
    if (mode === "buy") {
      setLeftTabsValue(0);
      setRightTabsValue(0);
      setRightInput(0);
      setLeftInput(0);
      setSwap(true);
    } else {
      setLeftTabsValue(0);
      setRightTabsValue(1);
      setRightInput(0);
      setLeftInput(0);
      setSwap(true);
    }
  }, [mode]);

  //HardCode: Отслеживает и подсчитывает значение для правого инпута
  useEffect(() => {
    if (swap) {
      const rightTabName = chooseValueData(mode, "right", rightTabsValue).name;
      const rate: number = chooseValueData(mode, "left", leftTabsValue).rateTo[
        rightTabName
      ];
      setRightInput(Number((leftInput * rate).toFixed(2)));
    } else {
      const leftTabName = chooseValueData(mode, "left", leftTabsValue).name;
      const rate: number = chooseValueData(mode, "right", rightTabsValue)
        .rateTo[leftTabName];
      setLeftInput(Number((rightInput * rate).toFixed(2)));
    }
  }, [
    leftInput,
    rightInput,
    swap,
    setLeftInput,
    setRightInput,
    mode,
    leftTabsValue,
    rightTabsValue,
  ]);

  const allyProps = (indexProps: number, modeProps: string) => {
    return {
      id: `simple-tab-${indexProps}-${modeProps}`,
      "aria-controls": `simple-tabpanel-${indexProps}-${modeProps}`,
    };
  };

  //Обработчик стороны, который возвращает значение таба
  const handleSide = (side: string) => {
    return side === "left" ? leftTabsValue : rightTabsValue;
  };

  //Функция, которая в зависимости от mode и side возвращает нужный набор табов
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
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <InputTabs
          mode={mode}
          side={swap ? "left" : "right"}
          inputValue={swap ? leftInput : rightInput}
          setInputValue={swap ? setLeftInput : setRightInput}
          tabs={getTabs(mode, swap ? "left" : "right")}
          tabsValue={swap ? leftTabsValue : rightTabsValue}
          swapMode={swap}
        />
        <Button
          aria-label="exchange"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50%",
            minWidth: "56px",
            maxWidth: "56px",
            height: "56px",
            alignSelf: { xs: "center", md: "flex-end" },
          }}
          onClick={() => setSwap(!swap)}
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
          side={swap ? "right" : "left"}
          inputValue={swap ? rightInput : leftInput}
          setInputValue={swap ? setRightInput : setLeftInput}
          tabs={getTabs(mode, swap ? "right" : "left")}
          tabsValue={swap ? rightTabsValue : leftTabsValue}
          swapMode={swap}
        />
      </Box>
      <Box
        component="div"
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className={`${styles.bottomText} ${styles.exchangeRate}`}>
          1.00 {firstElementName} = {secondElementOfRate} {secondElementName} 
        </p>
        <p className={styles.bottomText}>
          Source:{" "}
          <Link
            href="https://www.banknn.ru/"
            target="_blank"
            className={styles.sourceLink}
          >
            banknn.ru
          </Link>
        </p>
        <p className={styles.bottomText}>
          Commission <span className={styles.percent}>10%</span>
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        <Button
          aria-label="formButton"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", width: "170px" }}
        >
          {mode === "buy" ? "Buy" : "Exchange"}
        </Button>
      </Box>
    </>
  );
};

export default ExchangeForm;
