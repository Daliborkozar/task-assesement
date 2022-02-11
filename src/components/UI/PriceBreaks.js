import React from 'react'
import styled from "@emotion/styled";
import { Grid, Typography, Box } from "@mui/material";
import { grey } from '@mui/material/colors';
import { borderBottom } from '@mui/system';


const PriceContainer = styled(Box)({
    display: 'flex',
    padding: 5,
    borderTop: '1px solid #E0E0E0',
    borderBottom: '1px solid #E0E0E0',
    width: 'fit-content'
})

export const PriceList = () => {
  return (
    <PriceContainer>
        <Typography variant="body1" >Ex 20 PCE</Typography>
        <Typography variant="body1" >10 EUR/PCE</Typography>
    </PriceContainer>
  )
}
