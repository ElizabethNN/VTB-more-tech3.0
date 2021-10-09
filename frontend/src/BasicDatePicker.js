import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { TextField } from "@mui/material";

export default function BasicDatePicker(props) {
  const [date, setDate] = useState(new Date());

  return <DatePicker label={props.text} value={date} onChange={setDate} autoOk
  renderInput={(params) => <TextField {...params} />} />;
}
