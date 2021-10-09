import { Button, TextField } from "@mui/material";
import s from "./Authorization.module.css";

function Authorization() {
  return (
    <div className="Authorization" style={{display: "flex", flexDirection: "column", padding: "20%"}}>
      <TextField className={s.item} id="outlined-basic" label="Логин" variant="outlined" />
      <TextField className={s.item} id="outlined-basic" label="Пароль" variant="outlined" type="password" />
      <Button className={s.item} variant="contained">Авторизация</Button>
    </div>
  );
}

export default Authorization;
