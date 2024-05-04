import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  header: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 10px",
    borderBottom: "1px solid blue",
    boxShadow: "0px 1px 10px 1px blue",
    marginBottom: "20px",
    backgroundColor: "white",
  },
  addButton: {
    marginRight: "5px"
  }
};

export default styles;
