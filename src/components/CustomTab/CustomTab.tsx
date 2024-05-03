import React, { FC } from "react";
import styles from "./CustomTab.module.css";
import { Box } from "@mui/material";

type Props = { children?: React.ReactNode; index: number; value: number };

const CustomTab: FC<Props> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{paddingTop: '20px'}}>{children}</Box>}
    </div>
  );
};

export default CustomTab;
