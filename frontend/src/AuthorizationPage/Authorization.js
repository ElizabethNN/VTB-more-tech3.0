import { Button, TextField } from "@mui/material";
import s from "./Authorization.module.css";

function Authorization() {
  return (
    <div style={{display: "flex", flexDirection: "column", padding: "20%"}}>
      <TextField  id="outlined-basic" label="Логин" variant="outlined" sx={{my:1}}/>
      <TextField  id="outlined-basic" label="Пароль" variant="outlined" type="password" sx={{my:1}} />
      <Button variant="contained" sx={{my:1}} size="large">Авторизация</Button>
    </div>
  );
}

export default Authorization;
