import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Destination from "./Destination";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Copyright from "../../pages/Footer";
const API_URL = "http://localhost:8080";

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

const Destionations = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    const url = `${API_URL}/destinations`;
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
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Destionations</h2>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search places,city,.."
              inputProps={{ "aria-label": "search" }}
              type="text"
              onChange={(event) => handleSearch(event)}
            />
          </Search>
          <Container sx={{ py: 1 }}>
            {/* End hero unit */}
            <Grid container spacing={3}>
              {filteredData.map((item, index) => (
                <Grid item key={item.id} md={4}>
                  <div>
                    <Destination
                      dest={item}

                      // id={item.id}
                      // title={item.title}
                      // image={item.image}
                      // description={item.description}
                      // address={item.address}
                      // city={item.city}
                      // state={item.state}
                      // visiting_fee={item.visiting_fee}
                      // visiting_hours={item.visiting_hours}
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
export default Destionations;
