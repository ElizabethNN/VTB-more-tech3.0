import * as React from "react";
import { Pagination } from "@mui/material";
import InfoCard from "./InfoCard/InfoCard";
import SearchInput from "../SearchInput/SearchInput";
import { SearchOutlined } from "@material-ui/icons";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

class AvailableData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null,
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch(
      "http://80.80.96.244:3000/datasets/getAllTables"
    );
    const data = await response.json();
    this.setState({ data: data });
  }

  render() {
    let totalData = [];
    totalData = this.state.data;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <SearchInput text={"Поиск"} icon={<SearchOutlined />} />

        {totalData !== undefined ? (
          totalData.map((element) => (
            <InfoCard
              id={element.id}
              title={element.dataset ? element.dataset : "none"}
              description={element.description ? element.description : "none" }
              key={element.id}
            />
          ))
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "40%" }}
          >
            <CircularProgress />
          </Box>
        )}
        <Pagination count={10} />
      </div>
    );
  }
}

export default AvailableData;
