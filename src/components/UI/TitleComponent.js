import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TitleComponent = ({ children }) => {
  return (
    <Typography variant="h6" color="secondary">
      {children}
    </Typography>
  );
};
