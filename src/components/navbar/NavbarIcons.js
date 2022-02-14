import React from "react";
import { Badge, Grid, Box, SvgIcon, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import FavoriteIcon from "../../resources/icons/favorite.svg";
import FactsoftIcon from "../../resources/icons/facts-soft.svg";
import CartIcon from "../../resources/icons/cart.svg";

const IconImage = styled("img")({
  height: 25,
  width: 25,
  margin: "0 10px",
});

const CartImage = styled("img")({
  height: 25,
  width: 25,
  marginLeft: 10,
});

const IconContainer = styled(Grid)({
  alignItems: "center",
  height: "100%",
});

export const NavbarIcons = () => {
  const { quantity } = useSelector((state) => state.product);

  return (
    <IconContainer container spacing={1}>
      <IconImage src={FavoriteIcon} />
      <IconImage src={FactsoftIcon} />
      <Divider orientation="vertical" flexItem />
      <Badge badgeContent={quantity} color="secondary">
        <CartImage src={CartIcon} />
      </Badge>
    </IconContainer>
  );
};
