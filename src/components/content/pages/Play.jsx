import React, { useEffect, useState, Suspense, lazy } from "react";

import games from "../../../store/games";
import { Box, Grid } from "@material-ui/core";
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

let effect = true;

const Play = () => {
  const [openModal, setOpenModal] = useState(false);
  const [bodyModal, setBodyModal] = useState("");

  useEffect(() => {
    return () => {
      effect = false;
    };
  });
  const body = (
    <>
      <h2 id="simple-modal-title">{bodyModal}</h2>
      <p id="modal-description">{bodyModal}</p>
    </>
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
      <Grid container spacing={1}>
        {games.map((game) => (
          <Suspense fallback={LoadingComponent} key={game.id}>
            <PlaySingle
              game={game}
              handleOpenModal={handleOpenModal}
              effect={effect}
            />
          </Suspense>
        ))}
      </Grid>
      <PlayModal open={openModal} body={body} handleClose={handleCloseModal} />
    </>
  );
};

export default Play;
