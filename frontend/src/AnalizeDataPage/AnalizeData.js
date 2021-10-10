import React from "react";
import s from "./AnalizeData.module.css";
import CardAnalize from "./../CardAnalize/CardAnalize";
import diagram from "../Diagram.png";
import CustomTable from "../Table/CustomTable";
import { CircularProgress } from "@mui/material"; 
import { Box } from "@mui/system";

class AnalizeData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null,
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch(
      "http://80.80.96.244:3000/datasets/getTableInfo",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: sessionStorage.getItem("id"),
        }), // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
    );

    const data = await response.json();
    this.setState({ data: data });
    console.log(data);
  }

  render() {
    let data = [];
    data = this.state.data;
    console.log(data);
    return (
      <div>
        {data !== undefined ? (
          <div className={s.container}>
            <div className={s.content}>
              <div className={s.graphic}>
                <img src={diagram}/>
              </div>
              <div className={s.infoData}>
                <CardAnalize
                  title= {data.dataset.platform.name ? data.dataset.platform.name : "none" }
                  type={data.dataset.type ? data.dataset.type : "none" }
                  platform={data.dataset.platform.type ? data.dataset.platform.type : "none" }
                  owner={data.dataset.ownership ? data.dataset.ownership.owners[0].owner.username : "none" }
                  status={data.dataset.status ? data.dataset.status : "none" }
                  tag={data.dataset.tags ? data.dataset.tags.tags[0].tag.name : "none" }
                />
              </div>
            </div>
            <div className={s.content}>
              <CustomTable />
            </div>
          </div>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", margin: "40%"}}>
            <CircularProgress />
          </Box>
        )}
      </div>
    );
  }
}

export default AnalizeData;
