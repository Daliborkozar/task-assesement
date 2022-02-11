import React from "react";
import styled from "@emotion/styled";
import { TitleComponent } from "../UI/TitleComponent";
import { Typography, Grid } from "@mui/material";
import { ProductDetails } from "./ProductDetails";
import { ProductPricing } from "./ProductPricing"

const WrapperContainer = styled(Grid)({
  background: "#EFEFEF",
  padding: 30,
});

export const ProductDescription = () => {
  return (
    <WrapperContainer container spacing={2}>
      <Grid item xs={12}>
        <TitleComponent>DESCRIPTION</TitleComponent>
      </Grid>
      <Grid item xs={12} md={12} lg={9}>
        <Typography>
          Maecenas pretium mi a ex lacinia volutpat. Cras gravida odio ut libero
          blandit ornare. Pellentesque et tempus lacus, eu viverra orci. Quisque
          suscipit felis vitae ligula finibus efficitur. Sed in fringilla nulla.
          Sed dictum tortor et lectus porta, sit amet rhoncus sem consectetur.
          Duis eleifend lectus id scelerisque auctor. Morbi posuere arcu lacus,
          ac euismod nulla placerat nec. Proin et accumsan nisl. Sed imperdiet
          lacus ac commodo pharetra.\n\nSuspendisse et dui ornare, laoreet
          mauris vel, ullamcorper nunc. Suspendisse a libero id justo
          condimentum fermentum non id ex. Phasellus aliquam magna ac eleifend
          molestie. Aliquam tincidunt elit non libero posuere, a feugiat orci
          gravida. Donec tempor urna in nisl aliquet convallis.\n\nDuis nec
          vestibulum odio. Maecenas lobortis sit amet nunc ac porttitor.
          Maecenas ultrices urna sed mattis faucibus. Phasellus dui turpis,
          mattis eget lectus a, volutpat sagittis diam. Vestibulum dictum
          efficitur magna nec hendrerit. Proin a cursus sapien, rhoncus viverra
          lacus. Nullam commodo dapibus turpis, at sagittis tellus tincidunt eu.
          Fusce viverra porta leo. Vivamus in ipsum nec elit tincidunt
          tristique.
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={2}>
          <Grid item>
            <ProductDetails />
          </Grid>
          <Grid item>
            <ProductPricing />
          </Grid>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};
