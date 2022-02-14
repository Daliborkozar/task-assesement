import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")({
  width: "100%",
  height: 700,
  textAlign: "center",
});

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>PAGE NOT FOUND</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate(-1)}
      >
        Go back to home page
      </Button>
    </Wrapper>
  );
};

export default NotFound;
