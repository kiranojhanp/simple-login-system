import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  logout: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Dashboard = () => {
  const history = useHistory();
  const classes = useStyles();

  const userData = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome {userData.full_name}
        </Typography>
        <Typography variant="body1">Your email is {userData.email}</Typography>
        <CardMedia
          className={classes.media}
          image={userData.avatar}
          title={userData.full_name}
        />

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Button
            type="submit"
            onClick={logout}
            fullWidth
            variant="contained"
            color="success"
            className={classes.logout}
          >
            Logout
          </Button>
        </Container>
      </footer>
    </div>
  );
};
