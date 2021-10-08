import * as React from "react";
import SearchInput from "../SearchInput/SearchInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CreateData() {
  return (
    <div>
      <SearchInput
        text={"Введите название фичи"}
        icon={<AddCircleOutlineIcon />}
      />
      <SearchInput text={"Введите правило"} icon={<AddCircleOutlineIcon />} />
    </div>
  );
}

export default CreateData;
