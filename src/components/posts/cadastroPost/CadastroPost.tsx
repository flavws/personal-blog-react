/* eslint-disable prefer-const */
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Post from "../../../models/Postagemagem";
import Theme from "../../../models/Theme";
import { busca, buscaId, put, post } from "../../../services/Service";

function CadastroPost() {
  const [posts, setPosts] = useState<Post>({
    id: 0,
    title: "",
    text: "",
    theme: null,
  });
  const [theme, setTheme] = useState<Theme>({
    id: 0,
    description: "",
  });
  const [themes, setThemes] = useState<Theme[]>([]);
  const [token, setToken] = useLocalStorage("token");
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado para isso!");
      navigate("/login");
    }
  }, ["token"]);

  useEffect(() => {
    setPosts({
      ...posts,
      theme: theme,
    });
  }, [theme]);

  useEffect(() => {
    getThemes();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getThemes() {
    await busca("/themes", setThemes, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`/post/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPost(event: ChangeEvent<HTMLInputElement>) {
    setPosts({
      ...posts,
      [event.target.name]: event.target.value,
      theme: theme,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      put(`/post`, posts, setPosts, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem atualizada com sucesso!");
    } else {
      post(`/post`, posts, setPosts, {
        headers: {
          Authorization: token,
        },
      });
      alert("Postagem cadastrada com sucesso!");
    }
    back();
  }

  function back() {
    navigate("/posts");
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
          Formulário de cadastro postagem
        </Typography>
        <TextField
          id="title"
          value={posts.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
          label="titulo"
          variant="outlined"
          name="title"
          margin="normal"
          fullWidth
        />
        <TextField
          id="text"
          value={posts.text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)}
          label="texto"
          name="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange=
            {(e) =>
              buscaId(`/themes/${e.target.value}`, setTheme, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {themes.map((theme) => (
              <MenuItem value={theme.id}>{theme.description}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
