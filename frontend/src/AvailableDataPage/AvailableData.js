import * as React from "react";
import { Pagination } from "@mui/material";
import InfoCard from "./InfoCard/InfoCard";
import SearchInput from "../SearchInput/SearchInput";
import { SearchOutlined } from "@material-ui/icons";

function AvailableData() {
  return (
    <>
      <SearchInput text={"Поиск"} icon={<SearchOutlined />} />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <Pagination count={10} />
    </>
  );
}

export default AvailableData;
