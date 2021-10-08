import * as React from "react";
import { Pagination } from "@mui/material";
import InfoCard from "./InfoCard/InfoCard";
import SearchInput from "../SearchInput/SearchInput";

function AvailableData() {
  return (
    <>
        <SearchInput/>
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <Pagination count={10} />
    </>
  );
}

export default AvailableData;
