import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Register from "./Register";
import Box from "@material-ui/core/Box";
//import { useHistory } from "react-router-dom";
//import axios from "axios";

import { useFormControls } from "./userFormControls";
//const baseURL = "http://localhost:8080/user/sign-up";

import Copyright from "../pages/Footer";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserRegistration(props) {
  const classes = useStyles();
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <div>
      <Register />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1>User Registration</h1>
          <form
            className={classes.form}
            onSubmit={handleFormSubmit}
            //onSubmit={Registration}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                  // onChange={onChange}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  // value={data.fname}
                  {...(errors.fname && {
                    error: true,
                    helperText: errors.fname,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                  // value={data.lname}
                  // onChange={onChange}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.lname && {
                    error: true,
                    helperText: errors.lname,
                  })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  // value={data.address}
                  // onChange={onChange}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.address && {
                    error: true,
                    helperText: errors.address,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="tel"
                  id="mobno"
                  label="Phone Number"
                  name="mobno"
                  autoComplete="phone"
                  // value={data.mobno}
                  // onChange={onChange}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.mobno && {
                    error: true,
                    helperText: errors.mobno,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // value={data.email}
                  // onChange={onChange}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.email && {
                    error: true,
                    helperText: errors.email,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  // value={data.password}
                  // onChange={onChange}
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.password && {
                    error: true,
                    helperText: errors.password,
                  })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!formIsValid()}
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/UserLogin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
}
