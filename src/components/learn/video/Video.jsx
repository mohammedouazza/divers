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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 10,
  },
}));

const Video = ({ video, handleSelectVideo }) => {
  const classes = useStyles();

  return (
    <Zoom
      in={true}
      key={video.id}
      style={{ transitionDelay: video.id + "00ms" }}
    >
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => handleSelectVideo(video)}>
            <video src={video.src} width="345" height="190"></video>

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "black" }}
              >
                {video.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
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

export default Video;
