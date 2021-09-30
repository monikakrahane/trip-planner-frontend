import React from "react";
import axios from "axios";
//import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const API_URL = "http://localhost:8080";

function CartContent(props) {
  const [readMore, setReadMore] = React.useState(false);
  const [readMoreAddress, setReadMoreAddress] = React.useState(false);
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
  const handleClick = () => {
    console.log("Amol");
    const url = `${API_URL}/packages/2`;
    console.log(url);

    axios(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  };
  const apiUrl = "http://localhost:8080/packages/delete";
  function deletePackage(id) {
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

  const { pack } = props;
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
            <CardContent>
              {/* <Typography>{pack.id}</Typography> */}

              <Typography gutterBottom variant="h6" component="h2">
                {`${
                  pack.tripname.length > 10
                    ? pack.tripname.substring(0, 15) + "..."
                    : pack.tripname
                }`}
              </Typography>
              <Typography>{pack.duration}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={
                {
                  // 16:9
                  // pt: "56.25%",
                }
              }
              image={API_URL + "/" + pack.image}
              //image={pack.image}
              alt={pack.tripname}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>
                {readMore
                  ? pack.description
                  : `${pack.description.substring(0, 20)}...
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
                {readMoreAddress
                  ? pack.package_inclusions
                  : `${pack.package_inclusions.substring(0, 20)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMoreAddress(!readMoreAddress)}
                >
                  {readMore ? "show less" : "read more"}
                </span>
              </Typography>
              <Typography>{pack.amount}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleClick}>
                View
              </Button>
              <Button size="small" onClick={() => deletePackage(pack.id)}>
                Not Interested
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>{" "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Package deleted Successfully ..!!!
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
          Error occurred while deleting Package ..!!! !!!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
export default CartContent;
