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

const DiscountPrice = styled(Typography)({
    marginLeft: 10
})

export const PriceList = ({qty,total, disc, currency, unit }) => {
    const discount = (total - disc) / qty
    console.log(discount)
  return (
    <PriceContainer rowSpacing={2}>
        <Typography variant="body1" >{`ex ${qty} ${unit} `}</Typography>
        <DiscountPrice variant="body1" >{`${discount} ${currency}/${unit}`}</DiscountPrice>
    </PriceContainer>
  )
}