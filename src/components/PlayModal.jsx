import { Modal, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";

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
    width: "auto",
    border: "2px solid #000",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PlayModal = ({ open, body, handleClose, nightMode }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div
        style={{
          ...modalStyle,
          backgroundColor: nightMode ? "#212121" : "",
          color: nightMode ? "white" : "black",
        }}
        className={classes.paper}
      >
        {body}
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    nightMode: state.nightMode.nightMode,
  };
};
export default connect(mapStateToProps, null)(PlayModal);
