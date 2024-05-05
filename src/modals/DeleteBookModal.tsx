import React from "react";
import { Box, Typography, Modal, Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleDeleteModal } from "../store/common";
import { useDeleteBookMutation } from "../store/slice/app.slice";
import Locale from "./locale";
import styles from "./styles";
const DeleteBookModal = () => {
  const dispatch = useAppDispatch();
  const deleteModalState = useAppSelector(
    (state) => state.common.deleteModalState
  );
  const [deleteBook] = useDeleteBookMutation()
  const bookId = useAppSelector((state) => state.common.bookId);
  console.log(bookId);

  const handleDeleteBook = () => {
    deleteBook(bookId)
  }

  const handleClose = () => {
    dispatch(toggleDeleteModal(false));
  };


  return (
    <div>
      <Modal
        open={deleteModalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.deleteModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {Locale.caution}
          </Typography>
          <Stack
            sx={styles.buttonGroup}
            direction="row"
            spacing={2}
          >
            <Button
                onClick={handleDeleteBook}
              variant="contained"
              color="success"
            >
              {Locale.yes}
            </Button>
            <Button onClick={handleClose} variant="outlined" color="error">
              {Locale.no}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteBookModal;
