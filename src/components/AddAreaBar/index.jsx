import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import AreaInput from "./AreaInput";

const LightTooltip = withStyles(() => ({
  tooltip: {
    borderRadius: "3px",
    boxShadow: "0 7.5px 19.5px 0 rgba(0, 0, 0, 0.07)",
    backgroundColor: "#ffffff",
    color: "#808080",
    fontSize: "11px"
  }
}))(Tooltip);

const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: "#4bb0dd",
    "&:hover": {
      backgroundColor: "#2382ad"
    }
  }
}))(Fab);

const AddAreaBar = () => {
  const [displayInput, setDisplay] = useState(false);
  const [value, setValue] = useState("");
  const handleDisplay = e => {
    setDisplay(true);
  };
  return (
    <div>
      {displayInput && <AreaInput />}
      <LightTooltip title="Add new area" aria-label="add" placement="top">
        <ColorButton color="primary" aria-label="add" onClick={handleDisplay}>
          <AddIcon />
        </ColorButton>
      </LightTooltip>
    </div>
  );
};

export default AddAreaBar;
