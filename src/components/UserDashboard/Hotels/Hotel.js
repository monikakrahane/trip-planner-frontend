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
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const apiUrl = "http://localhost:8080/hotels/add";

function Hotel(props) {
  const [readMore, setReadMore] = useState(false);
  const [readMoreAddress, setReadMoreAddress] = useState(false);
  const theme = createTheme();
  const { hotel } = props;

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

  function addHotels(id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // let history = useHistory();
    const user = JSON.parse(localStorage.getItem("myData"));
    console.log(id, user.id);

    // debugger;
    const data = { userId: user.id, hotelId: id };
    axios.post(apiUrl, data).then((result) => {
      // debugger;
      if (result.data.status === 201) {
        console.log(result.data.message);
        setAlert();
        // setAlertError();
      } else {
        // console.log(result.data.message);
        // console.log("Something went wrong!!");
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
            {" "}
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {`${
                  hotel.title.length > 20
                    ? hotel.title.substring(0, 30) + "..."
                    : hotel.title
                }`}
              </Typography>
              <Typography>{hotel.city}</Typography>
            </CardContent>
            <CardMedia component="img" image={hotel.image} alt={hotel.title} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>
                {readMore
                  ? hotel.description
                  : `${hotel.description.substring(0, 20)}...
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
                  ? hotel.address + " " + hotel.state
                  : `${hotel.address.substring(0, 20)}...
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
                <b>Contact No : </b>
                {hotel.contact_no}
              </Typography>
              <Typography>
                <b>Website : </b>
                {hotel.website}
              </Typography>
              <Typography>
                <b>Price : </b>
                {hotel.price}
              </Typography>
              <Typography>
                <b>Star : </b>
                {hotel.star}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/hotels/${hotel.id}`}>View</Link>
              <Button size="small" onClick={() => addHotels(hotel.id)}>
                Add
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Hotel added to saved Hotels List..!!!
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
          Error occurred while adding Hotel to Saved Hotel List !!!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
export default Hotel;
