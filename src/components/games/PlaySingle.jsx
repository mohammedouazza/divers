import React, { Suspense, lazy } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Zoom,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CardMedia = lazy(() => import("@material-ui/core/CardMedia"));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 10,
  },
  media: {
    height: 140,
  },
}));

const PlaySingle = ({ game, handleOpenModal, effect, nightMode }) => {
  const classes = useStyles();
  return (
    <Zoom
      in={true}
      key={game.id}
      style={{ transitionDelay: effect ? `${game.id * 100}ms` : "0ms" }}
    >
      <Grid item xs={3}>
        <Card
          className={classes.root}
          style={{ backgroundColor: nightMode ? "#212121" : "" }}
        >
          <CardActionArea>
            <Link
              to={`/play/${game.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Suspense fallback={<div>loading...</div>}>
                <CardMedia
                  className={classes.media}
                  image={game.img}
                  title={game.name}
                />
              </Suspense>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ color: nightMode ? "white" : "black" }}
                >
                  {game.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: nightMode ? "white" : "black" }}
                >
                  Score: {game.score}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions>
            <Link to={`/play/${game.id}`} style={{ textDecoration: "none" }}>
              <Button size="small" color="primary">
                Play
              </Button>
            </Link>
            <Button
              size="small"
              color="primary"
              onClick={() => handleOpenModal(game.name)}
            >
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

export default connect(mapStateToProps, null)(PlaySingle);
