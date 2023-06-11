/* eslint-disable prefer-const */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaPostagem.css";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";
import Postagem from "../../../models/Postagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  async function getPostagem() {
    await busca("/post", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPostagem();
  }, [posts]);

  return (
    <>
      {posts.map((post) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
              {post.title}
              </Typography>
              <Typography variant="body2" component="p">
              {post.text}
              </Typography>
              <Typography variant="body2" component="p">
              {post.theme?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/formPost/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletePost/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
