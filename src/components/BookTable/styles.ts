import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  imageList: {
    width: "100%",
    height: "100%",
    marginTop: "100px",
  },
  imageStyle: {
    borderRadius: "10px",
  },
  iconButton: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  imageListItemBar: {
    borderRadius: "0 0 10px 10px",
  },
  imageListItem: {
    margin: "10px",
    borderRadius: "10px",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 1px 8px 1px rgba(0, 0, 255, 1)",
    },
  },
};

export default styles;
