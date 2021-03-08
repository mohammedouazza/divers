import React, { useEffect, useState, Suspense, lazy } from "react";

import games from "../../../store/games";
import { Box, Grid, makeStyles } from "@material-ui/core";
import PlayModal from "../../PlayModal";
import { Skeleton } from "@material-ui/lab";

const PlaySingle = lazy(() => import("../../games/PlaySingle"));

const LoadingComponent = (
  <Box width={302} marginRight={0.5} my={5}>
    <Skeleton variant="rect" width={302} height={190} />
    <Box pt={0.5}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  </Box>
);

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

let effect = true;

const Play = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);
  const [bodyModal, setBodyModal] = useState("");

  useEffect(() => {
    return () => {
      effect = false;
    };
  });
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{bodyModal}</h2>
      <p id="modal-description">{bodyModal}</p>
    </div>
  );
  const handleOpenModal = (body) => {
    setBodyModal(body);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Grid container className={classes.grid} spacing={1}>
        {games.map((game) => (
          <Suspense fallback={LoadingComponent}>
            <PlaySingle
              game={game}
              handleOpenModal={handleOpenModal}
              effect={effect}
              key={game.id}
            />
          </Suspense>
        ))}
      </Grid>
      <PlayModal open={openModal} body={body} handleClose={handleCloseModal} />
    </>
  );
};

export default Play;
