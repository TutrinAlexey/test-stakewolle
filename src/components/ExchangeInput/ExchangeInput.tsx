import React, { FC } from "react";
import styles from "./ExchangeInput.module.css";
import { Box, FilledInput, InputAdornment, InputLabel } from "@mui/material";
import { chooseValueData, cryptoValue, defaultValue } from "@/utils/constants";

type Props = {
  mode: string;
  side: string;
  inputValue: number;
  setInputValue: (value: React.SetStateAction<number>) => void;
  index: number;
};

const ExchangeInput: FC<Props> = ({
  mode,
  side,
  inputValue,
  setInputValue,
  index,
}) => {


  return (
    <>
      {mode === "buy" && side === "right" ? (
        <Box sx={{ height: "23px" }}></Box>
      ) : (
        <InputLabel
          htmlFor={`${side}-input`}
          sx={{ color: "#000", fontWeight: "bold" }}
        >
          {side === "left" ? (mode === "buy" ? "Amount" : "From") : "To"}
        </InputLabel>
      )}
      <FilledInput
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        type="number"
        id={`${side}-input`}
        endAdornment={
          <InputAdornment position="end">
            {chooseValueData(mode, side)[index]}
          </InputAdornment>
        }
        sx={{ color: "#000", fontWeight: "bold", }}
        fullWidth={true}
        disableUnderline
        autoComplete="off"
      ></FilledInput>
    </>
  );
};

export default ExchangeInput;
