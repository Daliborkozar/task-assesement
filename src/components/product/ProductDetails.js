import React from "react";
import styled from "@emotion/styled";
import { Grid, Box, Divider, Stack, Chip, Typography } from "@mui/material";
import { TitleComponent } from "../UI/TitleComponent";
import { AttachementList } from "../UI/AttachmentList";
import { BulletList } from "../UI/BulletList";

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: 20,
  minWidth: 300,
  height: "100%",
});

const TitleContainer = styled(Grid)({
  marginBottom: 10,
});

const ChipLabelStyle = styled(Typography)({
  color: "#FFFFFF",
});

const ChipStyle = styled(Chip)({
  background: "#808080",
});

const BoxMargin = styled(Box)({
  marginTop: 20,
});

export const ProductDetails = () => {
  return (
    <Wrapper>
      <Box>
        <TitleContainer container>
          <Grid item>
            <TitleComponent>DETAILS</TitleComponent>
          </Grid>
        </TitleContainer>
      </Box>
      <Divider />
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Features
        </Typography>
        <BulletList />
        <BulletList />
      </BoxMargin>
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Attachements
        </Typography>
        <AttachementList />
      </BoxMargin>
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Keywords
        </Typography>
        <Stack direction="row" spacing={1}>
          <ChipStyle label={<ChipLabelStyle>textduzi</ChipLabelStyle>} />
          <ChipStyle label={<ChipLabelStyle>text</ChipLabelStyle>} />
          <ChipStyle label={<ChipLabelStyle>textbla</ChipLabelStyle>} />
        </Stack>
      </BoxMargin>
    </Wrapper>
  );
};
