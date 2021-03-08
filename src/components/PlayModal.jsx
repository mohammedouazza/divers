import { Modal } from "@material-ui/core";
import React from "react";

const PlayModal = ({ open, body, handleClose }) => {
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
      {body}
    </Modal>
  );
};

export default PlayModal;
