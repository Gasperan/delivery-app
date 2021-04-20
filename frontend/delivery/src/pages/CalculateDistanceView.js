import {
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { GEO_SERVICE_HOST } from "../configuration/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    textDecoration: "none",
    color: "white",
    marginRight: 10,
    marginTop: 10,
  },
  textField: {
    marginRight: 10,
    marginTop: 10,
    minWidth: 300,
  },
}));

export default function SearchHistoryView() {
  const classes = useStyles();
  const [originTextField, setOriginTextField] = useState("");
  const [destinationTextField, setDestinationTextField] = useState("");
  const [distance, setDistance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let history = useHistory();

  const calculateDistance = async () => {
    setIsLoading(true);
    try {
      const {
        data: { distanceInKilometers },
      } = await axios(
        `http://${GEO_SERVICE_HOST}/distance?origin=${originTextField}&destination=${destinationTextField}`
      );
      setDistance(Math.floor(distanceInKilometers * 100) / 100);
      setError(null);
    } catch (error) {
      setDistance(null);
      setError(error);
    }

    setIsLoading(false);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={10} m={10}>
          <Typography variant="h3" component="h3" gutterBottom>
            Calculate distance
          </Typography>
          <Typography paragraph gutterBottom>
            Write the origin and destination address, if everything is fine you
            are going to see the distance in Kilometers between these points.
          </Typography>
          <TextField
            id="filled-basic"
            label="Origin"
            variant="filled"
            value={originTextField}
            onChange={(e) => setOriginTextField(e.target.value)}
            className={classes.textField}
          />

          <TextField
            id="filled-basic"
            label="Destination"
            variant="filled"
            onChange={(e) => setDestinationTextField(e.target.value)}
            className={classes.textField}
          />
        </Grid>

        <Grid item xs={10}>
          <Button
            onClick={calculateDistance}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Calculate distance
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => {
              history.push("/search-history");
            }}
          >
            Search history
          </Button>
          <Typography variant="h6" component="h6" gutterBottom></Typography>
          {isLoading && <LinearProgress />}
          {!isLoading && error && (
            <MuiAlert
              onClose={() => {
                setError(null);
              }}
              elevation={6}
              variant="filled"
              severity="error"
            >
              Something wrong trying to get distance :(
            </MuiAlert>
          )}
          {!isLoading && distance && (
            <MuiAlert
              onClose={() => {
                setDistance(null);
              }}
              elevation={6}
              variant="filled"
              severity="success"
            >
              Distance: {distance} KM
            </MuiAlert>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
