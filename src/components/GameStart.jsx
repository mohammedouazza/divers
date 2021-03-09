import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Parchisi from "./games/parchisi/Parchisi";

const styles = {
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  backStyle: {
    position: "absolute",
    color: "white",
  },
  root: {
    height: "100vh",
  },
};
const GameStart = (props) => {
  const idGame = props.match.params.id;
  return (
    <div style={styles.root}>
      <IconButton aria-label="delete" style={styles.backStyle}>
        <Link
          to={`/play/${idGame}`}
          style={{ textDecoration: "none", color: styles.backStyle.color }}
        >
          <ArrowBackIcon fontSize="large" />
        </Link>
      </IconButton>
      <Parchisi />
    </div>
  );
};

export default GameStart;
