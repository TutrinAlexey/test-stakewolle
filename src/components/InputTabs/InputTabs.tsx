import React, { FC, useState } from "react";
import styles from "./InputTabs.module.css";
import {
  Box,
  FilledInput,
  InputAdornment,
  InputLabel,
  Tab,
  Tabs,
} from "@mui/material";
import CustomTab from "../CustomTab/CustomTab";
import ExchangeInput from "../ExchangeInput/ExchangeInput";
import Image from "next/image";
import { BiSolidDollarCircle } from "react-icons/bi";
import { AiFillEuroCircle } from "react-icons/ai";
import { PiCurrencyRubFill } from "react-icons/pi";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";

type Props = {
  mode: string;
  side: string;
  inputValue: number;
  setInputValue: (value: React.SetStateAction<number>) => void;
  tabs: React.JSX.Element;
  tabsValue: number;
};

const InputTabs: FC<Props> = ({
  mode,
  side,
  inputValue,
  setInputValue,
  tabs,
  tabsValue,
}) => {
  return (
    <Box>
      <Box>{tabs}</Box>
      <CustomTab value={tabsValue} index={0}>
        <ExchangeInput
          mode={mode}
          side={side}
          inputValue={inputValue}
          setInputValue={setInputValue}
          index={0}
        />
      </CustomTab>
      <CustomTab value={tabsValue} index={1}>
        <ExchangeInput
          mode={mode}
          side={side}
          inputValue={inputValue}
          setInputValue={setInputValue}
          index={1}
        />
      </CustomTab>
      <CustomTab value={tabsValue} index={2}>
        <ExchangeInput
          mode={mode}
          side={side}
          inputValue={inputValue}
          setInputValue={setInputValue}
          index={2}
        />
      </CustomTab>
    </Box>
  );
};

export default InputTabs;
