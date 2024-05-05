import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  modal: {
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
  },
  modalImage: { marginTop: "10px", objectFit: "cover" },
  formGroup: { marginTop: "20px" },
  textField: { width: "100%", marginBottom: "20px" },
  modalButton: { width: "100%", margin: "10px 0" },
  addButton: { width: "100%" },
  deleteModal: {
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
  },
  buttonGroup: { marginTop: "20px", marginLeft: "30%" },
};

export default styles;
