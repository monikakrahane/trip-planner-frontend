import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SavedDest from "./savedDest";
import Copyright from "../pages/Footer";
const API_URL = "http://localhost:8080";

const mdTheme = createTheme();

const SavedDestinations = () => {
  const [repo, setRepo] = useState([]);
  const user = JSON.parse(localStorage.getItem("myData"));
  console.log(user.id);

  const url = `${API_URL}/destinations/get-all/${user.id}`;
  const getRepo = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      const myRepo = response.data;
      setRepo(myRepo);
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getRepo(), []);
  //const [readMore, setReadMore] = useState(true);

  if (repo.length === 0) {
    return (
      <ThemeProvider theme={mdTheme}>
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <section className="cart">
            {/* cart header */}
            <header>
              <h2 style={{ marginLeft: "20px" }}>Saved Destinations</h2>
              <h4
                style={{
                  color: "#617d98",
                  marginTop: "1rem",
                  textAlign: "center",
                  marginLeft: "20px",
                }}
              >
                No Records Added yet...!!!
              </h4>
            </header>
          </section>
        </Box>
      </ThemeProvider>
    );
  }

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
          <h2 style={{ marginLeft: "20px" }}>Saved Destinations</h2>
          <Container sx={{ py: 1 }}>
            <Grid container spacing={4}>
              {repo.map((item, index) => (
                <SavedDest dest={item} key={index} />
              ))}
            </Grid>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SavedDestinations;
