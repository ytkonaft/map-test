import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./SearchBar.scss";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const handleType = e => {
    setValue(e.target.value);
  };
  return (
    <div className="search-bar_wrp">
      <TextField
        label="Search for address"
        value={value}
        className="search-bar_input"
        onChange={handleType}
        variant="outlined"
      />
      <Button variant="outlined" margin="normal" color="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
