import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import * as React from "react";

function SearchInput(props) {
  return (
    <div>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder={props.text} />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          {props.icon}
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchInput;
