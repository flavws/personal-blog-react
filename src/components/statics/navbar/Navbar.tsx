/* eslint-disable prefer-const */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import {
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

const pages = ["home", "postagens", "temas", "cadastrar tema"];

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado");
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Box className="cursor title-logo">
            <Typography variant="h5" color="inherit">
              MelodicMinds
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor nav-items">
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
            </Link>
            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="cursor nav-items">
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor nav-items">
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formTheme" className="text-decorator-none">
              <Box mx={1} className="cursor nav-items">
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursor nav-items" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
