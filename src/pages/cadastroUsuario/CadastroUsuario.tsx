import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    user: '',
    password: '',
    picture: ''
  });

  const [userResponse, setUserResponse] = useState<User>({
    id: 0,
    name: '',
    user: '',
    password: '',
    picture: ''
  });

  const [confirmPass, setConfirmPassword] = useState("");

  function confirmPassword(event: ChangeEvent<HTMLInputElement>){
    setConfirmPassword(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>){
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault(); 
    
    if (user.password === confirmPass && user.password.length >= 8) {
      
      try {
        await cadastroUsuario('users/create', user, setUserResponse); 
        alert('Usuário cadastrado com sucesso!')
      } catch (error){
        alert('Usuário não cadastrado, verifique se todos os campos estão corretos');
      }
    }else {
      
      alert('Senhas não coincidem!');
      setUser({...user, password:''});
      setConfirmPassword('');
    }
  }

  useEffect(() =>{
    if (userResponse.id !== 0){
      navigate('/login');
    }
  }, [userResponse]);
  
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        xs={6}
        className="cadastro-img"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=789&q=80)`,
          backgroundRepeat: "no-repeat",
          width: "100vh",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid item xs={6}>
        <Box paddingX={10}>
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
              id="name"
              label="nome"
              value={user.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              className="user-text"
              name="name"
              margin="normal"
              fullWidth
            />
            <TextField
              id="user"
              label="usuario"
              value={user.user}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              className="user-text"
              name="user"
              margin="normal"
              fullWidth
            />
            <TextField
              id="password"
              label="senha"
              value={user.password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              className="password-text"
              name="password"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              id="confirm-password"
              value={confirmPass}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmPassword(event)
              }
              label="Confirmar senha"
              variant="outlined"
              className="password-text"
              type="password"
              name="confirm-password"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login">
                <Button
                  className="btn-cancel"
                  variant="contained"
                  style={{
                    backgroundColor: "#a4a4a4",
                    color: "#000",
                  }}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#ff93b3",
                }}
              >
                Criar conta
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
