import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

class PackageDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      vendorId: props.match.params.vendorId || "unknown",
    };
  }

  /*
  handleClick = () => {
    //console.log("Monika");
    //console.log(this.props.id);
    const url = `${API_URL}/packages/${this.props.id}`;
    console.log(url);

    axios(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }
 */
  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item>
            <Typography>Welcome {this.props.tripname}</Typography>
            {/*<Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              
              <CardContent>
                <Typography>Helllo My Id is{this.props.id}</Typography>

                <Typography gutterBottom variant="h6" component="h2">
                  {`${this.props.tripname.length > 10
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
                image={this.props.image}
                alt={this.props.tripname}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  {`${this.props.description.length > 20
                    ? this.props.description.substring(0, 20) + "..."
                    : this.props.description
                    }`}
                </Typography>
                <Typography>
                  {" "}
                  {`${this.props.package_inclusions.length > 25
                    ? this.props.package_inclusions.substring(0, 25) + "..."
                    : this.props.package_inclusions
                    }`}
                </Typography>
                <Typography>{this.props.amount}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.handleClick}>View</Button>

              </CardActions>
                  </Card>*/}
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default PackageDetails;
