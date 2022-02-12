import React from 'react'
import styled from "@emotion/styled";
import { Grid, Typography, Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';


const BulletContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: 5
})

export const BulletList = ({feature, val}) => {
  return (
    <BulletContainer>
        <CircleIcon fontSize='1' />
        <Typography variant="body1" color="#A9A9A9">{feature}</Typography>
        <Typography variant="body1">{val}</Typography>
    </BulletContainer>
  )
}
