import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import useLocalStorage from "react-use-localstorage";

function Login() {
  const navigate = useNavigate();

  const [token, setToken] = useLocalStorage("token");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    user: "",
    password: "",
    picture: "",
    token: ""
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/users/login", userLogin, setToken);
      alert("Usuario logado com sucesso");
    } catch (error) {
      alert("Usuário e/ou senha inválidos");
    }
  }

  useEffect(() => {
    if (token !== "") {
      navigate("/home");
    }
  }, [token]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="#ff93b3"
              component="h3"
              align="center"
              style={{ fontWeight: "bolder", textTransform: "uppercase" }}
            >
              Entrar
            </Typography>
            <TextField
              id="user"
              label="usuario"
              variant="outlined"
              className="user-text"
              name="user"
              margin="normal"
              fullWidth
              value={userLogin.user}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
            />
            <TextField
              id="passwod"
              label="senha"
              variant="outlined"
              className="password-text"
              name="password"
              type="password"
              margin="normal"
              fullWidth
              value={userLogin.password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
            />
            <Box marginTop={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#ff93b3",
                }}
              >
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                style={{
                  fontWeight: "bold",
                  color: "#ff93b3",
                }}
              >
                Cadastre-se!
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid
        xs={6}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=789&q=80)`,
          backgroundRepeat: "no-repeat",
          width: "100vh",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
    </Grid>
  );
}

export default Login;
