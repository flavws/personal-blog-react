import React from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    // <> - fragment
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "white" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography variant="h3" gutterBottom component="h3" align="center">
              <Box className="title">Seja bem vindo(a)!</Box>
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
            >
              <Box className="sub-title">
                Expresse aqui os seus pensamentos e opiniões!
              </Box>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" size="large">
              <Box className="btn-text">Ver Postagens</Box>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://img.freepik.com/free-vector/different-emotions-mood-change-woman-girl-with-negative-positive-various-expression-crisis-distracted-behavior-flat-vector-illustration-pms-psychology-mental-disorder-concept_74855-21785.jpg?w=740&t=st=1684439706~exp=1684440306~hmac=896961510559479abf38f20dbec36aefb8dc1d6d9748d34576e0090a65486336"
            className="img-bg"
            alt=""
          />
        </Grid>
        <Grid xs={12} className="postagem"></Grid>
      </Grid>
    </>
  );
}

export default Home;
// exporta o componente para que ele possa ser usado em outros lugares
