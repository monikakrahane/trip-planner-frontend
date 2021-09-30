import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { useHistory } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Destination(props) {
  const [readMore, setReadMore] = useState(false);
  const [readMoreAddress, setReadMoreAddress] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  function setAlert() {
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function setAlertError() {
    setOpenError(true);
  }
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const theme = createTheme();
  const { dest } = props;

  function addDestination(id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // let history = useHistory();
    const user = JSON.parse(localStorage.getItem("myData"));
    console.log(id, user.id);

    const apiUrl = "http://localhost:8080/destinations/add";

    // debugger;
    const data = { userId: user.id, destId: id };
    axios.post(apiUrl, data).then((result) => {
      // debugger;
      if (result.data.status === 201) {
        console.log(result.data.message);
        setAlert();
      } else {
        setAlertError();
      }
    });
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
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {`${
                  dest.title.length > 25
                    ? dest.title.substring(0, 30) + "..."
                    : dest.title
                }`}
                {/* {dest.title} */}
              </Typography>
              <Typography>{dest.city}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={
                {
                  // 16:9
                  // pt: "56.25%",
                }
              }
              image={dest.image}
              alt={dest.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>
                {/* {`${
                  dest.description.length > 20
                    ? dest.description.substring(0, 20) + "..."
                    : dest.description
                }`} */}

                {readMore
                  ? dest.description
                  : `${dest.description.substring(0, 20)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "show less" : "read more"}
                </span>
              </Typography>
              <Typography>
                <b>Address : </b>

                {readMoreAddress
                  ? dest.address + " " + dest.state
                  : `${dest.address.substring(0, 20)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMoreAddress(!readMoreAddress)}
                >
                  {readMore ? "show less" : "read more"}
                </span>
              </Typography>
              <Typography>
                <b>Visiting Hours: </b>
                {dest.visiting_hours}
              </Typography>
              <Typography>
                <b>Visiting Fee : </b>
                {dest.visiting_fee}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/destinations/${dest.id}`}>View</Link>
              <a href={`/destinations/${dest.id}`}>View Destionation</a>
              <Button size="small" onClick={() => addDestination(dest.id)}>
                Add
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>{" "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Destination added to saved Destinations List..!!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Error occurred while adding Destination to Saved Destinations List !!!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default Destination;
