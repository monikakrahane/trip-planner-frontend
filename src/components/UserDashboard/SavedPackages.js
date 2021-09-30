import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";
import Container from "@mui/material/Container";
import Copyright from "../pages/Footer";
const mdTheme = createTheme();

const SavedPackages = () => {
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
          <h2 style={{ marginLeft: "20px" }}>Saved Packages</h2>
          <Container sx={{ py: 1 }}>
            <main></main>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SavedPackages;
