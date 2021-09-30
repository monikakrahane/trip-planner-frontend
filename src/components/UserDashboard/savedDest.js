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
function SavedDest(props) {
  const { dest } = props;
  console.log(dest);
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
  const apiUrl = "http://localhost:8080/destinations/delete";
  function deleteDestination(id) {
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
      <Grid item>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {dest.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {dest.city}
            </Typography>
            <Typography component={"div"} paragraph>
              {readMore
                ? dest.description
                : `${dest.description.substring(0, 30)}...
        `}
              <span
                variant="subtitle1"
                style={{ cursor: "pointer", color: "#1976d2" }}
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "read more"}
              </span>

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
                  {readMoreAddress ? "show less" : "read more"}
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
            </Typography>

            <CardActions>
              <Button size="small" onClick={() => deleteDestination(dest.id)}>
                Not Interested
              </Button>
            </CardActions>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
            }}
            image={dest.image}
            alt={dest.title}
          />
        </Card>{" "}
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Destination Deleted Successfully ..!!!
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
          Error occurred while deleting Destination from Saved Destinations List
          !!!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default SavedDest;
