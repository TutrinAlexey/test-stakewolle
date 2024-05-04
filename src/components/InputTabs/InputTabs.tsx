import React, { FC} from "react";
import styles from "./InputTabs.module.css";
import { Box } from "@mui/material";
import CustomTab from "../CustomTab/CustomTab";
import ExchangeInput from "../ExchangeInput/ExchangeInput";

type Props = {
  mode: string;
  side: string;
  inputValue: number;
  setInputValue: (value: React.SetStateAction<number>) => void;
  tabs: React.JSX.Element;
  tabsValue: number;
  swapMode: boolean;
};

const InputTabs: FC<Props> = ({
  mode,
  side,
  inputValue,
  setInputValue,
  tabs,
  tabsValue,
  swapMode,
}) => {
  return (
    <Box>
      <Box sx={{ width: "323px" }}>{tabs}</Box>
      <CustomTab value={tabsValue} index={0}>
        <ExchangeInput
          mode={mode}
          side={side}
          inputValue={inputValue}
          setInputValue={setInputValue}
          index={0}
          swapMode={swapMode}
        />
      </CustomTab>
      <CustomTab value={tabsValue} index={1}>
        <ExchangeInput
          mode={mode}
          side={side}
          inputValue={inputValue}
          setInputValue={setInputValue}
          index={1}
          swapMode={swapMode}
        />
      </CustomTab>
      <CustomTab value={tabsValue} index={2}>
        <ExchangeInput
          mode={mode}
          side={side}
          inputValue={inputValue}
          setInputValue={setInputValue}
          index={2}
          swapMode={swapMode}
        />
      </CustomTab>
    </Box>
  );
};

export default InputTabs;
