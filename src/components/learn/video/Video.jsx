import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  Zoom,
} from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 10,
  },
}));

const Video = ({ video, handleSelectVideo, nightMode }) => {
  const classes = useStyles();

  return (
    <Zoom
      in={true}
      key={video.id}
      style={{ transitionDelay: video.id + "00ms" }}
    >
      <Grid item xs={3}>
        <Card
          className={classes.root}
          style={{ backgroundColor: nightMode ? "#212121" : "" }}
        >
          <CardActionArea onClick={() => handleSelectVideo(video)}>
            <video src={video.src} width="345" height="190"></video>

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: nightMode ? "white" : "black" }}
              >
                {video.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: nightMode ? "white" : "black" }}
              >
                Score: {video.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => handleSelectVideo(video)}
              s
            >
              Play
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Zoom>
  );
};

const mapStateToProps = (state) => {
  return {
    nightMode: state.nightMode.nightMode,
  };
};
export default connect(mapStateToProps, null)(Video);
