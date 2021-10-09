import * as React from "react";
import { Pagination } from "@mui/material";
import InfoCard from "./InfoCard/InfoCard";
import SearchInput from "../SearchInput/SearchInput";
import { SearchOutlined } from "@material-ui/icons";


function AvailableData() {
    let Info_card = ["DataInfo-1","DataInfo-2","DataInfo-3"];
  return (
    <div>
      <SearchInput text={"Поиск"} icon={<SearchOutlined />} />
        {Info_card.map((info) =>
            <InfoCard info={info}/>
        )}
      <Pagination count={10} />
    </div>
  );
}

export default AvailableData;
