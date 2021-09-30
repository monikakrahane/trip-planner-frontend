
//import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
//import Container from "@mui/material/Container";
//import React, { useState } from "react";
//import Typography from "@mui/material/Typography";
//import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Navbar from "../Navbar";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

//const baseURL = "http://localhost:8080/user/sign-up";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        TripPlanner
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
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

export default function AddPackage(props) {
  const classes = useStyles();

  const [data, setdata] = useState({
    tripname: "",
    //image: null,
    duration: "",
    description: "",
    package_inclusions: "",
    amount: "",
  });
  const apiUrl = "http://localhost:8080/Packages/Addpackage";

  const addpkg = (e) => {
    e.preventDefault();

    var a = localStorage.getItem("myData");
    var b = JSON.parse(a);
    console.log(b.fname);

    console.log("Inside front end addpckg : Here is your user id" + [b.id]);

    // debugger;
    const data1 = {
      tripname: data.tripname,
      //image: data.image,
      duration: data.duration,
      description: data.description,
      package_inclusions: data.package_inclusions,
      amount: data.amount,
      vendor_id: b.id,
    };

    //const formData = new FormData();
    console.log(data);
    console.log("Selected file: " + data.image.name);

    axios.post(apiUrl, data1).then((result) => {
      //  debugger;
      console.log(result.data);
      if (result.data.Status === "Invalid") alert("Invalid User");
      else {
        //localStorage.setItem("user-info", JSON.stringify(result.data));
        //props.history.push("/UserLogin");
        console.log("package added successfully");
        props.history.push("/VendorPackages");
      }
    });
  };
  const onChange = (e) => {
    e.persist();
    // debugger;
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const uploadHandler = (e) => {
    e.persist();
    // debugger;
    //const formData = new FormData();
    //formData.append('file', e.target.files[0]);
    //setdata({ ...data, [e.target.name]: formData });
    setdata({ ...data, [e.target.name]: e.target.files[0] });
  };
  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            //  flexGrow: 1,
            // height: "100vh",
            // overflow: "auto",
          }}
        >
          <Container >
            <Wrapper className="section-center">
              <article className="content">
                <div className={classes.paper}>
                  <h1>Add Package</h1>
                  <form className={classes.form} onSubmit={addpkg} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="tripname"
                          name="tripname"
                          variant="outlined"
                          required
                          fullWidth
                          id="tripname"
                          label="Trip Name"
                          autoFocus
                          onChange={onChange}
                          value={data.tripname}
                        />
                      </Grid>
                      {/* <Grid item xs={12}>
                        <TextField
                          type="file"
                          variant="outlined"
                          required
                          fullWidth
                          id="image"
                          name="image"
                          autoComplete="image"
                          value={data.image}
                          // onChange={uploadHandler}
                        />
                      </Grid> */}
                      <Grid item xs={12}>
                        <input type="file"
                          required
                          fullWidth
                          id="image"
                          name="image"
                          onChange={uploadHandler}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="duration"
                          label="Duration"
                          name="duration"
                          autoComplete="duration"
                          value={data.duration}
                          onChange={onChange}
                        />
                      </Grid>


                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="description"
                          label="Description"
                          name="description"
                          autoComplete="description"
                          value={data.description}
                          onChange={onChange}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="package_inclusions"
                          label="Package Inclusions"
                          name="package_inclusions"
                          autoComplete="package_inclusions"
                          value={data.package_inclusions}
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="amount"
                          label="Amount"
                          name="amount"
                          autoComplete="amount"

                          onChange={onChange}
                        />
                      </Grid>



                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Add Package
                    </Button>

                  </form>
                </div>
              </article>
            </Wrapper>

            <Copyright sx={{ pt: 4 }} />
          </Container>

        </Box>
      </Box>
    </ThemeProvider>
  );
}

/*uploadHandler()
{
  console.log("img ");
}*/

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;


//export default VendorPackage;
