import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid, Slide } from "@material-ui/core";
import PlayImg from "../../../img/play.jpg";
import LearnImg from "../../../img/learn.jpg";
import PracticeImg from "../../../img/practice.jpg";

const buttonStyle = {
  width: "100vh",
  height: "30vh",
  backgroundSize: "100vh 40vh",
  fontSize: "10vh",
  color: "white",
};
const Home = () => {
  return (
    <Grid container spacing={3} className="text-center">
      <Grid item xs={12}>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          style={{ transitionDelay: "300ms" }}
        >
          <Link to="/play" className="btn">
            <Button
              variant="contained"
              style={{ ...buttonStyle, backgroundImage: `url(${PlayImg})` }}
            >
              Play
            </Button>
          </Link>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          style={{ transitionDelay: "500ms" }}
        >
          <Link to="/learn" className="btn">
            <Button
              variant="contained"
              style={{ ...buttonStyle, backgroundImage: `url(${LearnImg})` }}
            >
              Learn
            </Button>
          </Link>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          style={{ transitionDelay: "700ms" }}
        >
          <Link to="/practice" className="btn">
            <Button
              variant="contained"
              style={{ ...buttonStyle, backgroundImage: `url(${PracticeImg})` }}
            >
              Practice
            </Button>
          </Link>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Home;
