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
  width: 70,
  height: "auto",
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
  height: 'auto',
  width: 400,
  maxWidth: '100%',
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
  maxWidth: '100%'
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
