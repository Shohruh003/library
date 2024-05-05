import React, { ChangeEvent, useState } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IFormBook } from "../types/interfaces";
import { toggleModal } from "../store/common";
import { ModalClose } from "@mui/joy";
import Locale from "./locale";
import { CSSProperties } from "styled-components";
import styles from "./styles";

const AddBookModal = () => {
  const modalState = useAppSelector((state) => state.common.modalState);
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<IFormBook>({
    id: "",
    title: "",
    image: null,
    author: "",
    published: 0,
    pages: 0,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageChange = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const file = files ? files[0] : null;
    setValues({
      ...values,
      image: file,
    });
  };

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  return (
    <Modal
      open={modalState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={styles.modal}
      >
        <Typography variant="h6" component="h2">
          {Locale.addModalHeading}
        </Typography>
        <ModalClose onClick={handleClose} variant="plain" sx={{ m: 1 }} />
        {values.image && (
          <img
            src={
              values.image instanceof File
                ? URL.createObjectURL(values.image)
                : values.image
            }
            alt="Selected"
            width={100}
            height={100}
            style={styles.modalImage as CSSProperties}
          />
        )}
        <Box sx={styles.formGroup}>
          <TextField
            sx={styles.textField}
            id="title"
            size="small"
            name="title"
            label={Locale.bookTitle}
            variant="outlined"
            onChange={handleChange}
            value={values.title}
          />

          <TextField
            sx={styles.textField}
            id="author"
            size="small"
            name="author"
            label={Locale.bookAuthor}
            variant="outlined"
            onChange={handleChange}
            value={values.author}
          />

          <TextField
            sx={styles.textField}
            id="published"
            size="small"
            name="published"
            type="number"
            label={Locale.bookYear}
            variant="outlined"
            onChange={handleChange}
            value={values.published}
          />

          <TextField
            sx={styles.textField}
            id="pages"
            size="small"
            name="pages"
            type="number"
            label={Locale.bookPage}
            variant="outlined"
            onChange={handleChange}
            value={values.pages}
          />
        </Box>

        <Button
          sx={styles.modalButton}
          variant="contained"
          component="label"
        >
          {Locale.addImage}
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
        <Button sx={styles.addButton} variant="contained" color="success">
          {Locale.add}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBookModal;
