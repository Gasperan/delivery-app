import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import { GEO_SERVICE_HOST } from "../configuration/constants";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    flexGrow: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function SearchHistoryView() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://${GEO_SERVICE_HOST}/search-history`);

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item m={10} xs={10}>
          <Typography variant="h3" component="h3" gutterBottom>
            Search History
          </Typography>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Origin</TableCell>
                  <TableCell align="left">Destination</TableCell>
                  <TableCell align="left">distance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="left" component="th" scope="row">
                      {row.origin}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {row.destination}
                    </TableCell>
                    <TableCell align="left">
                      {Math.floor(row.distance * 100) / 100} KM
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
