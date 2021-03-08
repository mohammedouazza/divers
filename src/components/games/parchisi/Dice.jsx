import React, { useEffect, useState } from "react";
import dices from "../../../store/dices";
import DiceSound from "../../../store/audio/dice_audio.wav";

const styles = {
  imgStyle: {
    cursor: "pointer",
    borderRadius: 20,
    height: 135,
    width: 130,
  },
};
const Dice = (props) => {
  const [audio] = useState(new Audio(DiceSound));
  const [playing, setPlaying] = useState(false);
  const [dice, setDice] = useState(
    dices[Math.floor(Math.random() * dices.length)]
  );
  const [dice2, setDice2] = useState(
    dices[Math.floor(Math.random() * dices.length)]
  );

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  const handleDice = () => {
    setPlaying(true);
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setDice(dices[Math.floor(Math.random() * dices.length)]);
        setDice2(dices[Math.floor(Math.random() * dices.length)]);
      }, i * 100);
    }
    setTimeout(() => {
      setPlaying(false);
    }, 700);
  };
  useEffect(() => {
    if (!playing) {
      props.handleDiceNumber(dice.id + dice2.id);
    }
  }, [playing, dice, dice2, props]);
  return (
    <span onClick={handleDice}>
      <img src={dice.img} alt="dice" style={styles.imgStyle} className="mr-2" />
      <img src={dice2.img} alt="dice2" style={styles.imgStyle} />
    </span>
  );
};

export default Dice;
