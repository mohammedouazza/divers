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

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
  },
}));

const VideoList = () => {
  const classes = useStyles();
  const [selVideo, setSelVideo] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const body = (
    <>
      <h2 id="simple-modal-title">{selVideo.name}</h2>
      <p id="modal-description">
        <video width="400" controls autoPlay>
          <source src={selVideo.src} type="video/mp4" />
          <source src={`${selVideo.srcName}.ogg`} type="video/ogg" />
        </video>
      </p>
    </>
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
          <Suspense fallback={LoadingComponent} key={video.id}>
            <Video video={video} handleSelectVideo={handleSelectVideo} />
          </Suspense>
        ))}
      </Grid>
      <PlayModal open={openModal} body={body} handleClose={handleCloseModal} />
    </div>
  );
};

export default VideoList;
