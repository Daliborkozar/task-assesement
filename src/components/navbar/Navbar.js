import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  useScrollTrigger,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import { NavbarIcons } from "./NavbarIcons";
import { AddToCart } from "../product/addToCart/AddToCart";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const AppBarContainer = styled(AppBar)({
  backgroundColor: "#fff",
  borderBottom: "1px solid #E9E9E9",
});

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Navbar = (props) => {
  const { product } = useSelector((state) => state.product);
 

  return (
    <>
      <ElevationScroll {...props}>
        <AppBarContainer>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  color="secondary"
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                 {product?.article?.description_short}
                </Typography>
              </Grid>
              <Grid item>
                <AddToCart />
              </Grid>
              <Grid item>
                <NavbarIcons />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBarContainer>
      </ElevationScroll>
      <Offset />
    </>
  );
};
