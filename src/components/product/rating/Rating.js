import React, { useState } from "react";
import Rating from "@mui/material/Rating";

export const Rating = () => {
  const [value, setValue] = useState(3);
  return (
    <Rating
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
