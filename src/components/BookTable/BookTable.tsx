  import * as React from "react";
  import ImageList from "@mui/material/ImageList";
  import ImageListItem from "@mui/material/ImageListItem";
  import ImageListItemBar from "@mui/material/ImageListItemBar";
  import IconButton from "@mui/material/IconButton";
  import styles from "./styles";
  import { CSSProperties } from "styled-components";
  import DeleteIcon from "@mui/icons-material/Delete";
  import EditIcon from "@mui/icons-material/Edit";
  import { Box } from "@mui/material";
  import { useAppDispatch, useAppSelector } from "../../store/hooks";
  import {
    toggleBookId,
    toggleDeleteModal,
    toggleEditModal,
  } from "../../store/common";
  import { IFormBook } from "../../types/interfaces";
  import EditBookModal from "../../modals/EditBookModal";
  import DeleteBookModal from "../../modals/DeleteBookModal";
  import { useGetBooksQuery } from "../../store/slice/app.slice";
  export default function BookTable() {
    const dispatch = useAppDispatch();
    const openEditModal = useAppSelector((state) => state.common.editModalState);
    const openDeleteModal = useAppSelector(
      (state) => state.common.deleteModalState
    );

    const { data } = useGetBooksQuery(undefined, {})
    console.log(data);
    

  const handleDeleteModalOpen = (book: IFormBook) => {
    dispatch(toggleDeleteModal(true));
    dispatch(toggleBookId(book.id));
  };
  const handleEditModalOpen = (book: IFormBook) => {
    dispatch(toggleEditModal(true));
    dispatch(toggleBookId(book));
  };
  return (
    <>
      {openEditModal && <EditBookModal />}
      {openDeleteModal && <DeleteBookModal />}

      <ImageList sx={styles.imageList} cols={4} rowHeight={250}>
        {itemData.map((item) => (
          <ImageListItem key={item.id} sx={styles.imageListItem}>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={styles.imageStyle as CSSProperties}
            />

            <ImageListItemBar
              sx={styles.imageListItemBar}
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <Box>
                  <IconButton
                    onClick={() => handleEditModalOpen(item)}
                    sx={styles.iconButton}
                    aria-label={`edit about ${item.title}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteModalOpen(item)}
                    sx={styles.iconButton}
                    aria-label={`delete about ${item.title}`}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    published: 23,
    pages: 20,
    id: "1",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    published: 23,
    pages: 20,
    id: "2",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    published: 23,
    pages: 20,
    id: "3",
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    published: 23,
    pages: 20,
    id: "4",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    published: 23,
    pages: 20,
    id: "5",
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    published: 23,
    pages: 20,
    id: "6",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    published: 23,
    pages: 20,
    id: "7",
    image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    published: 23,
    pages: 20,
    id: "8",
    image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    published: 23,
    pages: 20,
    id: "9",
    image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    published: 23,
    pages: 20,
    id: "10",
    image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    published: 23,
    pages: 20,
    id: "11",
    image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    published: 23,
    pages: 20,
    id: "12",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
