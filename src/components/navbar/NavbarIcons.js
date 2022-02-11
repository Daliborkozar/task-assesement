import React from "react";
import { Badge, Grid, Box, SvgIcon, Divider } from "@mui/material";
import styled from "@emotion/styled";
import FavoriteIcon from "../../resources/icons/favorite.svg";
import FactsoftIcon from "../../resources/icons/facts-soft.svg";
import CartIcon from "../../resources/icons/cart.svg";

const IconImage = styled("img")({
  height: 25,
  margin: "0 10px",
});

const CartImage = styled("img")({
    height: 25,
    marginLeft: 10
  });

const IconContainer = styled(Grid)({
  alignItems: "center",
  
});

export const NavbarIcons = () => {
  return (
    <IconContainer container spacing={1}>
      <IconImage src={FavoriteIcon} />
      <IconImage src={FactsoftIcon} />
      <Divider orientation="vertical" flexItem />
      <Badge badgeContent="1" color="secondary">
        <CartImage src={CartIcon} />
      </Badge>
    </IconContainer>
  );
};


