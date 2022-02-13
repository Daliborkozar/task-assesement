import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ProductImg from "../../resources/icons/package.svg";
import ZoomIcon from "../../resources/icons/zoom-in.svg";

const ContentWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const SmallImage = styled("img")({
  maxWidth: 70,
  width: "100%",
  height: "100%",
  padding: 20,
  border: "1px solid #E9E9E9",
});

const SmallImageContainer = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
  },
}));

const BigImage = styled("img")({
  width: "100%",
  height: "100%",
  maxWidth: 400,
  padding: 50,
  border: "1px solid #E9E9E9",
});

const ZoomIconStyle = styled("img")({
  position: "absolute",
  bottom: 0,
  right: 0,
  height: 50,
  padding: 15,
});

const BigImageWrapper = styled(Grid)({
  position: "relative",
});

export const ProductImages = () => {
  return (
    <ContentWrapper container spacing={2}>
      <Grid item>
        <SmallImageContainer container spacing={2}>
          <Grid item>
            <SmallImage src={ProductImg} />
          </Grid>
          <Grid item>
            <SmallImage src={ProductImg} />
          </Grid>
        </SmallImageContainer>
      </Grid>
      <BigImageWrapper item>
        <BigImage src={ProductImg} />
        <ZoomIconStyle src={ZoomIcon} />
      </BigImageWrapper>
    </ContentWrapper>
  );
};
