import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import AddIcon from "../../../resources/icons/add.svg";
import { addToCart } from "../../../Redux/actions/productActions";

const AddIconStyle = styled("img")({
  height: 20,
});

const InputStyle = styled(TextField)({
  width: 50,
  marginRight: 10,
});

const PCEstyle = styled(Typography)({
  width: 50,
});

const AddWrapper = styled(Grid)({
  alignItems: "center",
});

export const AddToCart = ({ unit }) => {
  const [qty, setQty] = useState("1");
  const dispatch = useDispatch();
  console.log(qty);
  const inputHandle = (e) => {
    setQty(e.target.value);
  };

  const handleQuantity = () => {
    dispatch(addToCart(qty));
  };
  return (
    <AddWrapper container alignItems="center">
      <InputStyle
        size="small"
        type="number"
        onChange={inputHandle}
        value={qty}
      />
      <PCEstyle variant="h5">{unit}</PCEstyle>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIconStyle src={AddIcon} />}
        onClick={handleQuantity}
      >
        add to cart
      </Button>
    </AddWrapper>
  );
};
