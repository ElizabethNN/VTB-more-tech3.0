import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

export default function BasicDatePicker() {
  const [date, setDate] = useState(new Date());

  return <DatePicker value={date} onChange={setDate} autoOk />;
}
