import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Button, TextField, Typography } from "@mui/material";

import AddIcon from "../../../resources/icons/add.svg";

const AddIconStyle = styled("img")({
  height: 20,
});

const InputStyle = styled(TextField)({
  width: 50,
  marginRight: 10,
});

const PCEstyle = styled(Typography)({
    width: 50
})

const AddWrapper = styled(Grid)({
    alignItems: 'center',
    marginTop: 20
})

export const AddToCart = () => {
  const [quantity, setQuantity] = useState("1");

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <AddWrapper container alignItems="center">
      <InputStyle
        size="small"
        type="number"
        onChange={handleQuantity}
        value={quantity}
      />
      <PCEstyle variant="h5">PCE</PCEstyle>
      <Button
        variant="contained"
        color="secondary"
        
        startIcon={<AddIconStyle src={AddIcon} />}
        //onClick={}
      >
        add to cart
      </Button>
    </AddWrapper>
  );
};
