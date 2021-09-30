import React, { useState, useEffect } from "react";
import axios from "axios";
//import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PackageDetails from "./PackageDetails";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import styled from "styled-components";

const API_URL = "http://localhost:8080";

class VendorPackage extends React.Component {
  state = {
    vendorId: 0,
  };

  handleClick = () => {
    console.log(this.props.id);
    const url = `${API_URL}/packages/${this.props.id}`;
    console.log(url);

    axios(url)
      .then((response) => {
        console.log(response.data);
        this.setState({
          vendorId: this.props.id,
        });
        //this.props.history.push(`${API_URL}/PackageDetails`, response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  };

  handleModify = () => {};

  handleDelete = (id) => {
    const vendor = JSON.parse(localStorage.getItem("myData"));
    console.log(id, vendor.id);

    // debugger;
    // const data = { userId: user.id, destId: id };
    const url = `${API_URL}/packages/${id}/${vendor.id}`;
    axios.delete(url).then((result) => {
      // debugger;
      if (result.data.status === 200) {
        console.log(result.data.message);

        window.location.reload(false);
        alert(result.data.message);
      } else {
        alert(result.data.message);
      }
    });
  };

  render() {
    const theme = createTheme();
    if (this.state.vendorId > "0") {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Wrapper className="section-center">
              <article className="content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {this.props.tripname}
                  </Typography>
                  <Typography>{this.props.duration}</Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={
                    {
                      // 16:9
                      // pt: "56.25%",
                    }
                  }
                  image={API_URL + "/" + this.props.image}
                  //  image={API_URL + "/" + this.props.image}
                  alt={this.props.tripname}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>{this.props.description}</Typography>
                  <Typography> {this.props.package_inclusions}</Typography>
                  <Typography>{this.props.amount}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={this.handleModify}>
                    Modify
                  </Button>
                  <Button
                    size="small"
                    onClick={() => this.handleDelete(this.props.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </article>
            </Wrapper>
          </Container>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              {/* {this.props.id} */}
              <CardContent>
                <Typography>{this.props.id}</Typography>

                <Typography gutterBottom variant="h6" component="h2">
                  {`${
                    this.props.tripname.length > 10
                      ? this.props.tripname.substring(0, 15) + "..."
                      : this.props.tripname
                  }`}
                </Typography>
                <Typography>{this.props.duration}</Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={
                  {
                    // 16:9
                    // pt: "56.25%",
                  }
                }
                image={API_URL + "/" + this.props.image}
                //   image={this.props.image}
                alt={this.props.tripname}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  {`${
                    this.props.description.length > 20
                      ? this.props.description.substring(0, 20) + "..."
                      : this.props.description
                  }`}
                </Typography>
                <Typography>
                  {" "}
                  {`${
                    this.props.package_inclusions.length > 25
                      ? this.props.package_inclusions.substring(0, 25) + "..."
                      : this.props.package_inclusions
                  }`}
                </Typography>
                <Typography>{this.props.amount}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.handleClick}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.section`
          min-height: 60vh;
          display: grid;
          place-items: center;
          .img-container {
            display: none;
  }
          p {
            line - height: 2;
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
            margin - bottom: 2rem;
    }
          p {
            font - size: 1.25rem;
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

export default VendorPackage;
