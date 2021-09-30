import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";

import Container from "@mui/material/Container";
import Copyright from "./Footer";

const mdTheme = createTheme();

const About = () => {
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
          <h2 style={{ marginLeft: "20px" }}>About</h2>
          <Container sx={{ py: 1 }}>
            <main>
              <Wrapper className="page section section-center">
                <img
                  src="https://cdn.pixabay.com/photo/2021/08/29/08/49/petit-minou-lighthouse-6582717_1280.jpg"
                  alt="lighthouse"
                />
                <article>
                  <div className="title">
                    <h2>our story</h2>
                    <div className="underline"></div>
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat accusantium sapiente tempora sed dolore esse deserunt
                    eaque excepturi, delectus error accusamus vel eligendi,
                    omnis beatae. Quisquam, dicta. Eos quod quisquam esse
                    recusandae vitae neque dolore, obcaecati incidunt sequi
                    blanditiis est exercitationem molestiae delectus saepe odio
                    eligendi modi porro eaque in libero minus unde sapiente
                    consectetur architecto. Ullam rerum, nemo iste ex, eaque
                    perspiciatis nisi, eum totam velit saepe sed quos similique
                    amet. Ex, voluptate accusamus nesciunt totam vitae esse
                    iste.
                  </p>
                </article>
              </Wrapper>
            </main>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default About;
