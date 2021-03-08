import { Box, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { lazy, useState, Suspense } from "react";
import videos from "../../../store/videos";
import PlayModal from "../../PlayModal";

const Video = lazy(() => import("./Video"));

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
  grid: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const VideoList = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [selVideo, setSelVideo] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{selVideo.name}</h2>
      <p id="modal-description">
        <video width="400" controls autoPlay>
          <source src={selVideo.src} type="video/mp4" />
          <source src={`${selVideo.srcName}.ogg`} type="video/ogg" />
        </video>
      </p>
    </div>
  );
  const handleSelectVideo = (video) => {
    setSelVideo(video);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Grid container className={classes.grid} spacing={1}>
        {videos.map((video) => (
          <Suspense fallback={LoadingComponent}>
            <Video
              video={video}
              handleSelectVideo={handleSelectVideo}
              key={video.id}
            />
          </Suspense>
        ))}
      </Grid>
      <PlayModal open={openModal} body={body} handleClose={handleCloseModal} />
    </div>
  );
};

export default VideoList;
