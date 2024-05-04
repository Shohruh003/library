import React, { useState, useEffect, ChangeEvent } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IFormBook } from "../types/interfaces";
import { toggleEditModal } from "../store/common";

const EditBookModal = () => {
  const dispatch = useAppDispatch();
  const editModalState = useAppSelector((state) => state.common.editModalState);
  const book = useAppSelector(
    (state) => state.common.bookId
  ) as IFormBook | null;

  const [values, setValues] = useState<IFormBook>({
    id: "",
    title: "",
    image: null,
    author: "",
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
      setValues((prevValues) => ({
        ...prevValues,
        image: file,
      }));
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
            Карточка сотрудника
          </Typography>
          <ModalClose onClick={handleClose} variant="plain" sx={{ m: 1 }} />

          <img
            src={
              values.image && !(values.image instanceof File)
                ? URL.createObjectURL(
                    new Blob([values.image], {
                      type: "application/octet-stream",
                    })
                  )
                : undefined
            }
            alt="Selected"
            width={40}
            height={40}
            style={{
              width: "100px",
              height: "100px",
              marginTop: "10px",
              objectFit: "cover",
            }}
          />

          <Box sx={{ marginTop: "20px" }}>
            <TextField
              id="outlined-size-small"
              sx={{ width: "100%", marginBottom: "20px" }}
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
            <Button
              sx={{ width: "100%", margin: "10px 0" }}
              variant="contained"
              component="label"
            >
              ИЗМЕНИТЬ ИЗОБРАЖЕНИЕ
              <input type="file" hidden onChange={handleImageChange} />
            </Button>

            <Button sx={{ width: "100%" }} variant="contained" color="success">
              СОХРАНИТЬ
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditBookModal;
