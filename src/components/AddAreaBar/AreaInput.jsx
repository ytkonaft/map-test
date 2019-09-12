import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";

const AreaInput = () => {
  const handleClick = () => {
    console.log("azazazaz");
  };
  return (
    <TextField
      value={"azazaz"}
      hiddenLabel
      variant="filled"
      margin="dense"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClick}>
              <CheckIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default AreaInput;
