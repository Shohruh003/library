import React, { ChangeEvent, useState } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IFormBook } from "../types/interfaces";
import { toggleModal } from "../store/common";
import { ModalClose } from "@mui/joy";

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
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          textAlign: "center",
          bgcolor: "background.paper",
          border: "1px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Добавить книга
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
            style={{ width: "100px", marginTop: "10px", objectFit: "cover" }}
          />
        )}
        <Box sx={{ marginTop: "20px" }}>
          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            id="title"
            size="small"
            name="title"
            label="Название книги"
            variant="outlined"
            onChange={handleChange}
            value={values.title}
          />

          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            id="author"
            size="small"
            name="author"
            label="Автор"
            variant="outlined"
            onChange={handleChange}
            value={values.author}
          />

          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            id="published"
            size="small"
            name="published"
            type="number"
            label="Опубликовано"
            variant="outlined"
            onChange={handleChange}
            value={values.published}
          />

          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            id="pages"
            size="small"
            name="pages"
            type="number"
            label="Страницы"
            variant="outlined"
            onChange={handleChange}
            value={values.pages}
          />
        </Box>

        <Button
          sx={{ width: "100%", margin: "10px 0" }}
          variant="contained"
          component="label"
        >
          ВЫБРАТЬ ФОТО
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
        <Button sx={{ width: "100%" }} variant="contained" color="success">
          СОХРАНИТЬ
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBookModal;
