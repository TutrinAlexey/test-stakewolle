import React, { FC, useMemo } from "react";
import styles from "./ExchangeInput.module.css";
import { Box, FilledInput, InputAdornment, InputLabel } from "@mui/material";
import { chooseValueData } from "@/utils/constants";

type Props = {
  mode: string;
  side: string;
  inputValue: number;
  setInputValue: (value: React.SetStateAction<number>) => void;
  index: number;
  swapMode: boolean;
};

const ExchangeInput: FC<Props> = ({
  mode,
  side,
  inputValue,
  setInputValue,
  index,
  swapMode,
}) => {
  // Функция чтобы при смене сторон лейблы оставались на своих местах
  const correctSide = useMemo(() => {
    if (swapMode) {
      return side === "left" ? "left" : "right";
    } else {
      return side === "left" ? "right" : "left";
    }
  }, [side, swapMode]);

  return (
    <>
      {mode === "buy" && correctSide === "right" ? (
        <Box sx={{ height: "23px" }}></Box>
      ) : (
        <InputLabel
          htmlFor={`${side}-input`}
          sx={{ color: "#000", fontWeight: "bold" }}
        >
          {correctSide === "left" ? (mode === "buy" ? "Amount" : "From") : "To"}
        </InputLabel>
      )}
      <FilledInput
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        type="number"
        id={`${side}-input`}
        endAdornment={
          <InputAdornment position="end">
            {chooseValueData(mode, side, index).name}
          </InputAdornment>
        }
        sx={{ color: "#000", fontWeight: "bold" }}
        fullWidth={true}
        disableUnderline
        autoComplete="off"
      ></FilledInput>
    </>
  );
};

export default ExchangeInput;
