import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Register from "./Register";
import Copyright from "../pages/Footer";

import { useFormControls } from "./vendorFormControls";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VendorRegistration(props) {
  const classes = useStyles();
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <div>
      <Register />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1> Vendor Registration</h1>
          <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
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
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
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
                  id="company_name"
                  label="business Name"
                  name="company_name"
                  autoComplete="business"
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.company_name && {
                    error: true,
                    helperText: errors.company_name,
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
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.address && {
                    error: true,
                    helperText: errors.address,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="pincode"
                  label="Pin Code"
                  name="pincode"
                  autoComplete="pincode"
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.pincode && {
                    error: true,
                    helperText: errors.pincode,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="city"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.city && {
                    error: true,
                    helperText: errors.city,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  {...(errors.state && {
                    error: true,
                    helperText: errors.state,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="mobno"
                  label="Phone Number"
                  name="mobno"
                  autoComplete="phone"
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
                <Link href="/VendorLogin" variant="body2">
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
