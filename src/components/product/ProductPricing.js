import React from "react";
import styled from "@emotion/styled";
import { Grid, Box, Divider, Stack, Chip, Typography } from "@mui/material";
import { TitleComponent } from "../UI/TitleComponent";

const Wrapper = styled(Box)({
  backgroundColor: "#FFFFFF",
  padding: 20,
  width: "100%",
  minWidth: 360,
  maxWidth: 600,

});

const TitleContainer = styled(Grid)({
  marginBottom: 10,
})

export const ProductPricing = () => {
  return (
    <Wrapper >
      <Box>
        <TitleContainer container>
          <Grid item >
            <TitleComponent>PRICING & SHIPPING</TitleComponent>
          </Grid>
        </TitleContainer>
      </Box>
      <Divider />
      <Box>
      <Typography  variant="body1" color="#A9A9A9">
          Features
        </Typography>
        
      </Box>
      <Box>
      <Typography  variant="body1" color="#A9A9A9">
          Attachements
        </Typography>
      </Box>
      <Box>
        <Typography  variant="body1" color="#A9A9A9">
          Keywords
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Extra Soft" color="primary" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" color="primary"/>
          <Chip label="Hard" color="primary"/>
        </Stack>
      </Box>
    </Wrapper>
  );
};
