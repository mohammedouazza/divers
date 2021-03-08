import React from "react";
import games from "../store/games";
import { Button, Collapse, Grow, Zoom } from "@material-ui/core";
import { Link } from "react-router-dom";

const startButton = {
  background:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  width: "40vh",
  height: "20vh",
  fontSize: "10vh",
  borderRadius: 40,
};
const Game = (props) => {
  const idGame = props.match.params.id;
  const game = games.find((g, i) => g.id === parseInt(idGame));
  return (
    <div className="text-center">
      <Grow in={true}>
        <img src={game.img} alt={game.name} width="800" height="500" />
      </Grow>
      <Collapse in={true}>
        <h1>{game.name}</h1>
        <p>Score: {game.score}</p>
      </Collapse>

      <Link to={`/play/${idGame}/start`} style={{ textDecoration: "none" }}>
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            style={startButton}
          >
            Start
          </Button>
        </Zoom>
      </Link>
    </div>
  );
};

export default Game;
