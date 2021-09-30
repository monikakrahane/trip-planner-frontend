import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Copyright from "../pages/Footer";

const mdTheme = createTheme();

function DashboardContent() {
  const [user, setuser] = useState("");
  useEffect(() => {
    var a = localStorage.getItem("myData");
    var b = JSON.parse(a);
    console.log(b.fname);
    setuser(b);
    //console.log(user.fname);
  }, [user.fname]);

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
          <Container>
            <Wrapper className="section-center">
              <article className="content">
                <h1>
                  Welcome
                  <span style={{ fontSize: "30px" }}> {user.fname}</span>
                  <br />
                  Build Your Own Customized Trip Plans
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto, at sed omnis corporis doloremque possimus velit!
                  Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero
                  et quia tempora excepturi quis alias?
                </p>
                <Button
                  style={{
                    backgroundColor: "#29b6f6",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Link to="/destinations">start Planning Your Trip</Link>
                </Button>
              </article>
              <article className="img-container">
                <img
                  src="https://cdn.pixabay.com/photo/2021/08/20/19/49/boat-6561172_1280.jpg"
                  alt="nice table"
                  className="main-img"
                />
                <img
                  src="https://cdn.pixabay.com/photo/2021/08/23/11/06/nature-6567542_1280.jpg"
                  alt="person working"
                  className="accent-img"
                />
              </article>
            </Wrapper>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

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
    height: calc(100vh - 5rem);
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

export default function Dashboard() {
  return <DashboardContent />;
}
