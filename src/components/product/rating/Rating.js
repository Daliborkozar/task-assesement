import React, { useState } from "react";
import styled from "@emotion/styled";
import Rating from "@mui/material/Rating";

const RatingStyle =styled(Rating)({
    marginTop: 15,
    marginBottom: 25,
})

export const RatingStars = () => {
  const [value, setValue] = useState(3);
  return (
    <RatingStyle
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
