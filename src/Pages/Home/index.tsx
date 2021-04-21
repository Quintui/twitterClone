import React from "react";
import NavBar from "./component/NavBar";
import Main from "./component/Main";
import RightSide from "./component/RightSide";
import { useHomeStyle } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const classes = useHomeStyle();

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={0}>
        <NavBar classes={classes} />
        <Main classes={classes} />
        <RightSide classes={classes} />
      </Grid>
    </Container>
  );
};

export default Home;
