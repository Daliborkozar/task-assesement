import React from 'react'
import styled from "@emotion/styled";
import { Typography } from '@mui/material';


export const TitleComponent = ({children}) => {
  return (
    <Typography color="secondary">{children}</Typography>
  )
}
