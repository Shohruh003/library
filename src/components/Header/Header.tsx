"use client";

import React from "react";
import { Box, Button, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IFormBook } from "../../types/interfaces";
import { toggleModal, toggleBooks } from "../../store/common";
import AddBookModal from "../../modals/AddBookModal";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.common.modalState);
  const books = useAppSelector((state) => state.common.books);

  const handleOpen = () => {
    dispatch(toggleModal(true));
  };

  const handleSearchChange = (inputValue: string) => {
    if (!inputValue) {
      dispatch(toggleBooks(books));
      return;
    }
    const filteredData = books?.filter((book: IFormBook) =>
      book.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    console.log(filteredData);

    dispatch(toggleBooks(filteredData));
  };

  return (
    <>
      {open && <AddBookModal />}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 10px",
          borderBottom: "3px solid black",
          boxShadow: "0px 1px 10px 1px",
          marginBottom: "20px",
        }}
      >
        <TextField
          onChange={(e) => handleSearchChange(e.target.value)}
          id="outlined-basic"
          label="Глобальный поиск"
          size="small"
          variant="outlined"
        />
        <Button variant="contained" color="success" onClick={handleOpen}>
          <span style={{ marginRight: "5px" }}>Добавить</span>
          <AddCircleIcon />
        </Button>
      </Box>
    </>
  );
};

export default Header;
