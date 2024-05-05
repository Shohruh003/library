import React, { useState, useEffect, ChangeEvent } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IFormBook } from "../types/interfaces";
import { toggleEditModal } from "../store/common";
import Locale from "./locale";
import styles from "./styles";
import { CSSProperties } from "styled-components";

const EditBookModal = () => {
  const dispatch = useAppDispatch();
  const editModalState = useAppSelector((state) => state.common.editModalState);
  const book = useAppSelector(
    (state) => state.common.bookId
  ) as IFormBook | null;

  const [values, setValues] = useState<IFormBook>({
    id: "",
    title: "",
    author: "",
    image: null,
    published: 0,
    pages: 0,
  });

  useEffect(() => {
    if (editModalState && book) {
      setValues((prevValues) => ({
        ...prevValues,
        title: book.title || "",
        author: book.author || "",
        published: book.published || 0,
        pages: book.pages || 0,
      }));

      if (book.image instanceof File) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataURL = reader.result as string;
          setValues((prevValues) => ({
            ...prevValues,
            image: imageDataURL,
          }));
        };
        reader.readAsDataURL(book.image);
      }
    }
  }, [editModalState, book]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImageChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    const file = files ? files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues((prevValues) => ({
          ...prevValues,
          image: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    dispatch(toggleEditModal(false));
  };

  return (
    <div>
      <Modal
        open={editModalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={styles.modal}
        >
          <Typography variant="h6" component="h2">
            {Locale.editModalHeading}
          </Typography>
          <ModalClose onClick={handleClose} variant="plain" sx={{ m: 1 }} />

          <img
            src={
              values?.image instanceof File
                ? URL.createObjectURL(values.image)
                : values?.image || (book?.image as string) || ""
            }
            alt="Selected"
            width={100}
            height={100}
            style={styles.modalImage as CSSProperties}
          />

          <Box sx={styles.formGroup}>
            <TextField
              id="outlined-size-small"
              sx={styles.textField}
              size="small"
              name="title"
              label={Locale.bookAuthor}
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
            <Button
              sx={styles.modalButton}
              variant="contained"
              component="label"
            >
              {Locale.editImage}
              <input type="file" hidden onChange={handleImageChange} />
            </Button>

            <Button sx={styles.addButton} variant="contained" color="success">
              {Locale.add}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditBookModal;
