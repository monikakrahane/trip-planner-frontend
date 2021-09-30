import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import VendorPackage from "./VendorPackage";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const API_URL = "http://localhost:8080";

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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  borderBottom: "1px solid",
  marginBottom: 2,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const mdTheme = createTheme();

const VendorPackages = () => {
  // state = {
  //   packages: [],
  //   // input: "",
  // };

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  // componentDidMount() {
  //   const url = `${API_URL}/packages`;
  //   axios
  //     .get(url)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       this.setState({ packages: data });
  //       console.log(this.state.packages);
  //     });
  // }

  // onChangeHandler(e) {
  //   this.setState({
  //     input: e.target.value,
  //   });
  // }

  useEffect(() => {
    //const [user, setuser] = useState("");
    //useEffect(() => {
    var a = localStorage.getItem("myData");
    var b = JSON.parse(a);
    console.log(b.fname);
    //  setuser(b);
    //console.log(user.fname);
    //}, [user.fname]);

    console.log("Here is your user id" + [b.id]);
    const url = `${API_URL}/packages/get-all/${[b.id]}`;
    axios(url)
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      console.log(data.city);
      return data.title.search(value) !== -1;
    });
    console.log(result);
    setFilteredData(result);
  };

  // const list = this.state.packages
  //   .filter((d) => this.state.input === "" || d.includes(this.state.input))
  //   .map((d, index) => <li key={index}>{d}</li>);

  return (
    <ThemeProvider theme={mdTheme}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            //  flexGrow: 1,
            //height: "100vh",
            // overflow: "auto",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Packages</h2>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search places,city,.."
              inputProps={{ "aria-label": "search" }}
              // value={this.state.input}
              // type="text"
              // onChange={this.onChangeHandler.bind(this)}
              type="text"
              onChange={(event) => handleSearch(event)}
            />
          </Search>
          <Container sx={{ py: 1 }}>
            {/* End hero unit */}
            <Grid container spacing={3}>
              {filteredData.map((item, index) => (
                <Grid item key={index} md={3}>
                  <div>
                    <VendorPackage
                      id={item.id}
                      tripname={item.tripname}
                      image={item.image}
                      duration={item.duration}
                      description={item.description}
                      package_inclusions={item.package_inclusions}
                      amount={item.amount}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default VendorPackages;
