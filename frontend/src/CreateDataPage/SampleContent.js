import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function SampleContent() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={dataset}
      renderInput={(params) => (
        <TextField {...params} label="Выберите признак" />
      )}
    />
  );
}

export default SampleContent;

let dataset = [
    { label: "Название" },
    { label: "Год" },
    { label: "Время" },
    { label: "Пол" },
  ];