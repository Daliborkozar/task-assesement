import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ProductImg from "../../resources/icons/package.svg";
import ZoomIcon from "../../resources/icons/zoom-in.svg";

const ContentWrapper = styled(Grid)({
    
})

const SmallImage = styled("img")({
    height: 70,
    padding: 20,
    border: '1px solid #E9E9E9'
})

const SmallImageContainer = styled(Grid)({
    flexDirection: 'column'
})

const BigImage = styled("img")({
    height: 300,
    padding: 50,
    border: '1px solid #E9E9E9'
})

const ZoomIconStyle = styled("img")({
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 50,
    padding: 15,
    
})

const BigImageWrapper = styled(Grid)({
    position: 'relative',
})

export const ProductImages = () => {
  return (
    <Grid container spacing={2}>
      <Grid item >
        <SmallImageContainer container spacing={2}>
          <Grid item>
            <SmallImage src={ProductImg} />
          </Grid>
          <Grid item>
            <SmallImage src={ProductImg} />
          </Grid>
        </SmallImageContainer>
      </Grid>
      <BigImageWrapper item > 
        <BigImage src={ProductImg} />
        <ZoomIconStyle src={ZoomIcon} />
      </BigImageWrapper>
    </Grid>
  );
};
