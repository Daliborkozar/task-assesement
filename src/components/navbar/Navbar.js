import React from "react";
import {
  AppBar,
  useScrollTrigger,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import { NavbarIcons } from "./NavbarIcons";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const AppBarContainer = styled(AppBar)({
  backgroundColor: "#fff",
  borderBottom: "1px solid #E9E9E9",
});

const Navbar = (props) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBarContainer>
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography
                  variant="h6"
                  component="div"
                  color="redish"
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </Typography>
              </Grid>
              <Grid item>
                <NavbarIcons />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBarContainer>
      </ElevationScroll>
    </>
  );
};

export default Navbar;
