import s from "./AnalizeData.module.css";
import CardAnalize from "./../CardAnalize/CardAnalize";

function AnalizeData() {
  return (

    <div className={s.container}>
      <div className={s.nameData}>Name</div>

      <div className={s.content}>
        <div className={s.graphic}>
           ffdffd
        </div>
        <div className={s.infoData}>
          <CardAnalize />
        </div>
      </div>
    </div>
  );
}

export default AnalizeData;
