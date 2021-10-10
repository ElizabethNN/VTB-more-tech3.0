import * as React from "react";
import BasicDatePicker from "./BasicDatePicker";

function TimeRangeContent() {
  return (
    <div
      style={{
        marginBottom: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
        <BasicDatePicker text="Начало временного промежутка" />
        <BasicDatePicker text="Конец временного промежутка" />
    </div>
  );
}

export default TimeRangeContent;
