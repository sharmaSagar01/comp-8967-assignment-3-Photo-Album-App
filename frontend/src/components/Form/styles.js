import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "3px 3px 3px 3px #888888",
    backgroundColor: "lightgrey",
  },
  heading: {
    marginBottom: theme.spacing(5),
    fontSize: "20px",
  },
  input: {
    outline: "none",
    border: "none",
    backgroundColor: "white",
    // marginTop: "5px",
    paddin: "3px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // width: "100%",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: "10px",
  },
}));
