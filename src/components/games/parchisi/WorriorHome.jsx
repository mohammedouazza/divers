import { Grid } from "@material-ui/core";
import React from "react";
import worriors from "../../../store/worriors";

const worriorCount = [0, 1, 2, 3];

const backgroundColors = ["#a8160c", "#0b9c4a", "#110d91", "#d1b22a"];
const imgStyle = {
  height: 85,
  width: 80,
  borderRadius: "50%",
};

const WorriorHome = (props) => {
  const worrior = worriors[props.number];
  const backgroundColor = backgroundColors[props.number];
  return (
    <Grid container item xs={12}>
      {worriorCount.map((i) => (
        <Grid container item xs={6} align="center">
          <img src={worrior} alt={backgroundColor} style={imgStyle} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WorriorHome;
