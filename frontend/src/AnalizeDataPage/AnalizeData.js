import React from "react";
import s from "./AnalizeData.module.css";
import CardAnalize from "./../CardAnalize/CardAnalize";
import graph from "../Graphic.png";
import CustomTable from "../Table/CustomTable";

class AnalizeData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null,
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("http://80.80.96.244:3000/datasets/getTableInfo", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)"}) // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    });
    
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
                {/*<img src={graph} alt={"None"} />*/}
              </div>
              <div className={s.infoData}>
                <CardAnalize 
                title={data.dataset.platform.name} 
                type={data.dataset.type}
                platform={data.dataset.platform.type}
                owner={data.dataset.ownership.owners[0].owner.username}
                status={data.dataset.status}
                tag={data.dataset.tags.tags[0].tag.name}
                  />
              </div>
            </div>
            <div className={s.content}>
              <CustomTable/>
            </div>
          </div>
        ) : (
          <div>Loading.. please wait!</div>
        )}
      </div>
    );
  }
}

export default AnalizeData;
