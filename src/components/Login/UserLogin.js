import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Login from "./Login";
import Copyright from "../pages/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserLogin(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  function setAlert() {
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function setAlertError() {
    setOpenError(true);
  }
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const [user, setuser] = useState({ email: "", password: "" });
  const apiUrl = "http://localhost:8080/user/login";
  const LoginFn = (e) => {
    e.preventDefault();
    // debugger;
    const data = { email: user.email, password: user.password };
    axios.post(apiUrl, data).then((result) => {
      // debugger;
      console.log(result.data);
      const serializedState = JSON.stringify(result.data.user);
      var a = localStorage.setItem("myData", serializedState);
      if (result.data.status === 200) {
        console.log(result.data.message);
        setAlert();
        props.history.push("/userDashboard");
      } else if (result.data.status === 401) {
        console.log(result.data.message);
        setAlertError();
      } else {
        alert("Invalid user");
      }
    });
  };

  const onChange = (e) => {
    e.persist();
    //  debugger;
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Login />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1> User Log In</h1>
          <form className={classes.form} onSubmit={LoginFn} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Container>{" "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Login Successful....!!!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid credentials...!! Please Try Again...!!!
        </Alert>
      </Snackbar>
    </div>
  );
}
