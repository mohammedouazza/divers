import { Fade } from "@material-ui/core";
import React, { useState } from "react";
import Dice from "./Dice";
import ParchisiTable from "./ParchisiTable";
import BoardImg from "../../../img/board.jpg";

const styles = {
  root: {
    top: 0,
    height: "85vh",
    width: "100%",
    backgroundColor: "#252525",
    textAlign: "center",
    fontSize: "10vh",
    color: "white",
    padding: "2% 5%",
  },
  diceStyle: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "#252525",
    height: "15vh",
    width: "100%",
    color: "white",
    textAlign: "center",
  },
};
const Parchisi = () => {
  const [diceNumber, setDiceNumber] = useState(0);
  const handleDice = (num) => {
    setDiceNumber(num);
  };
  return (
    <Fade in={true} timeout={1500}>
      <div>
        <div style={styles.root}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${BoardImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <ParchisiTable diceNumber={diceNumber} />
          </div>
        </div>
        <div style={styles.diceStyle}>
          <Dice handleDiceNumber={handleDice} />
        </div>
      </div>
    </Fade>
  );
};

export default Parchisi;
