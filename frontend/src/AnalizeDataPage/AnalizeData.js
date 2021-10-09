import s from "./AnalizeData.module.css";
import CardAnalize from "./../CardAnalize/CardAnalize";
import graph from "../Graphic.png"

function AnalizeData() {
  return (

    <div className={s.container}>
      <div className={s.content}>
        <div className={s.graphic}>
           <img src={graph} alt={"None"}/>
        </div>
        <div className={s.infoData}>
          <CardAnalize />
        </div>
      </div>
    </div>
  );
}

export default AnalizeData;
