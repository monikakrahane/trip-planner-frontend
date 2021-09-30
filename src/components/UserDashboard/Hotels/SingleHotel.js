import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Copyright from "../../pages/Footer";
const API_URL = "http://localhost:8080/hotels/";

const mdTheme = createTheme();

const SingleHotel = () => {
  const { id } = useParams();
  const history = useHistory();
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const url = `${API_URL}${id}`;
    axios(url)
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        //setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const {
    title,
    image,
    description,
    address,
    city,
    contact_no,
    website,
    price,
  } = allData;

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
          <h2 style={{ marginLeft: "20px" }}>About</h2>
          <Container sx={{ py: 1 }}>
            <main>
              <Wrapper>
                <div className="section section-center page">
                  <Link to="/hotels" className="btn">
                    back to Hotels
                  </Link>
                  <div className="product-center">
                    <img src={image} alt={title} />
                    <section className="content">
                      <h2>{title}</h2>
                      <h5 className="price">{price}</h5>
                      <p className="desc">{description}</p>
                      <p className="desc">{address}</p>
                      <p className="desc">{city}</p>
                      <p className="desc">{contact_no}</p>
                      <p className="desc">{website}</p>
                      <p className="desc">{price}</p>
                      <hr />
                    </section>
                  </div>
                </div>
              </Wrapper>
            </main>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleHotel;
