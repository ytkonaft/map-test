import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import AreasList from "./components/AreasList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item md={8}>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={8}>
          <Map />
        </Grid>

        <Grid item md={4}>
          <AreasList />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
