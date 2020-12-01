import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    marginTop: "20px",
  },

  media: {
    height: 0,
    paddingTop: "70%",
    width: "100%",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
