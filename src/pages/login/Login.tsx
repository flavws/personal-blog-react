import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="#f878b4"
              component="h3"
              align="center"
              style={{ fontWeight: "bolder", textTransform: 'uppercase' }}
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/home">
                
                <Button type="submit" variant="contained" style={{
                  backgroundColor: '#f878b4'}}>
                  Logar
                </Button>
                
              </Link>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
            </Box>
            <Typography variant='subtitle1' gutterBottom align='center' style={{
              fontWeight: 'bold',
              color: '#f878b4'}}>Cadastre-se!</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} style={
        {
          backgroundImage: `url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80)`,
          backgroundRepeat: 'no-repeat', width: '100vh', height: '100vh',
          backgroundSize: 'cover', backgroundPosition: 'center'
        }
      }></Grid>
    </Grid>
  );
}

export default Login;
