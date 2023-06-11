/* eslint-disable prefer-const */
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Theme from "../../../models/Theme";
import { buscaId, put, post } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroTema() {
  const [themes, setThemes] = useState<Theme>({
    id: 0,
    description: "",
  });
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    function CadastroTema() {
      navigate("/login");
    }
  }, ["token"]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/themes/${id}`, setThemes, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTheme(event: ChangeEvent<HTMLInputElement>) {
    setThemes({
      ...themes,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      put(`/themes`, themes, setThemes, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema atualizado com sucesso!");
    } else {
      post(`/themes`, themes, setThemes, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado com sucesso!");
    }
    back();
  }

  function back() {
    navigate("/temas");
  }
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastrar tema
        </Typography>
        <TextField
          value={themes.description}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updatedTheme(event)
          }
          id="description"
          label="Descrição"
          variant="outlined"
          name="description"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
