import React from "react";
import styled from "@emotion/styled";
import { Grid, Box, Divider, Stack, Chip, Typography } from "@mui/material";
import { TitleComponent } from "../UI/TitleComponent";
import { AttachementList } from "../UI/AttachmentList";
import { BulletList } from "../UI/BulletList";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: 20,
  minWidth: 300,
  height: "100%",
  width:'100%'
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
  const { product } = useSelector((state) => state.product);

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
        {Object.entries(product.article.features).map((item, i) => (
          <BulletList key={item[1]} feature={item[0]} val={item[1]} />
        ))}
      </BoxMargin>
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Attachements
        </Typography>
        {product.article.attachments.map((item) => (
          <AttachementList key={item.file_label} fileName={item.file_label} />
        ))}
      </BoxMargin>
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Keywords
        </Typography>
        <Stack direction="row" spacing={1}>
          {product.article.keywords.map((tag) => (
            <ChipStyle
              key={tag}
              label={<ChipLabelStyle>{tag}</ChipLabelStyle>}
              size="small"
            />
          ))}
        </Stack>
      </BoxMargin>
    </Wrapper>
  );
};
