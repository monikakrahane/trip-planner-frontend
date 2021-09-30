import React, { useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function SavedHotel(props) {
  const { hotel } = props;
  console.log(hotel);
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
  const apiUrl = "http://localhost:8080/hotels/delete";
  function deleteHotel(id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // let history = useHistory();
    const user = JSON.parse(localStorage.getItem("myData"));
    console.log(id, user.id);

    // debugger;
    // const data = { userId: user.id, destId: id };
    const url = `${apiUrl}/${id}/${user.id}`;
    axios.delete(url).then((result) => {
      // debugger;
      if (result.data.status === 200) {
        console.log(result.data.message);
        setAlert();
        window.location.reload(false);
      } else {
        setAlertError();
      }
    });
  }
  return (
    <ThemeProvider theme={theme}>
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
                  hotel.title.length > 10
                    ? hotel.title.substring(0, 15) + "..."
                    : hotel.title
                }`}
              </Typography>
              <Typography>{hotel.city}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={
                {
                  // 16:9
                  // pt: "56.25%",
                }
              }
              image={hotel.image}
              alt={hotel.title}
            />
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
              <Button size="small" onClick={() => deleteHotel(hotel.id)}>
                Not Interested
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>{" "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Hotel Deleted Successfully ..!!!
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
          Error occurred while deleting Hotel from Saved Hotels List !!!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default SavedHotel;
