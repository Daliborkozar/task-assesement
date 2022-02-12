import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Box } from "@mui/material";

import AttachmentIcon from "../../resources/icons/attachment.svg";

const AttachImg = styled("img")({
  height: 20,
  marginRight: 5,
});

const BulletContainer = styled(Box)({
  display: "flex",
  padding: 10,
});

export const AttachementList = ({ fileName }) => {
  return (
    <BulletContainer>
      <AttachImg src={AttachmentIcon} />
      <Typography variant="body1" color="#327189">
        {fileName}
      </Typography>
    </BulletContainer>
  );
};
