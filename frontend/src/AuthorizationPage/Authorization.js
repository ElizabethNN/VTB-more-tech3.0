import { Button, TextField } from "@mui/material";
import s from "./Authorization.module.css";

function Authorization() {
  return (
    <div style={{display: "flex", flexDirection: "column", padding: "20%"}}>
      <TextField  id="outlined-basic" label="Логин" variant="outlined" className={s.item}/>
      <TextField  id="outlined-basic" label="Пароль" variant="outlined" type="password" className={s.item} />
      <Button variant="contained" className={s.item} size="large">Авторизация</Button>
    </div>
  );
}

export default Authorization;
