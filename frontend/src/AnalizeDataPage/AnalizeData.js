import React from "react";
import s from "./AnalizeData.module.css";
import CardAnalize from "./../CardAnalize/CardAnalize";
import graph from "../Graphic.png";

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
      "http://80.80.96.244:3000/datasets/getAllTables"
    );
    const data = await response.json();
    this.setState({ id: data[0].id, title: data[0].title });
  }

  render() {
    const { id, title } = this.state;
    return (
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.graphic}>
            <img src={graph} alt={"None"} />
          </div>
          <div className={s.infoData}>
            <CardAnalize id={id} title={title}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AnalizeData;