import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import PersonOutlineRounded from "@mui/icons-material/PersonOutlineRounded";
import Container from "@mui/material/Container";
import Copyright from "../pages/Footer";
const mdTheme = createTheme();

export default class UserProfile extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeMobno = this.onChangeMobno.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fname: "",
      lname: "",
      address: "",
      mobno: "",
      email: "",
    };
  }

  // Form Events
  onChangeFname(e) {
    this.setState({ fname: e.target.value });
  }
  onChangeLname(e) {
    this.setState({ lname: e.target.value });
  }

  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangeMobno(e) {
    this.setState({ mobno: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      fname: "",
      lname: "",
      address: "",
      mobno: "",
      email: "",
    });
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("myData"));

    if (localStorage.getItem("user")) {
      this.setState({
        fname: this.userData.fname,
        lname: this.userData.lname,
        address: this.userData.address,
        mobno: this.userData.mobno,
        email: this.userData.email,
      });
    } else {
      this.setState({
        fname: "",
        lname: "",
        address: "",
        mobno: "",
        email: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    return (
      <ThemeProvider theme={mdTheme}>
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                //marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>User Profile</h2>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <PersonOutlineRounded />
              </Avatar>

              <Box sx={{ mt: 3 }}>
                <form onSubmit={this.onSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={this.state.fname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={this.state.lname}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={this.state.address}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="mobno"
                        name="mobno"
                        label="Phone Number"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={this.state.mobno}
                      />
                    </Grid>{" "}
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        value={this.state.email}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update
                  </Button>
                </form>
              </Box>

              <Copyright sx={{ pt: 4 }} />
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    );
  }
}

// export default UserProfile;
