import { Button, TextField, Grid, Box } from "@mui/material";
import "./Authorization.css";

function Authorization() {
  return (
    <div className="Authorization" style={{display: "flex", flexDirection: "column", padding: "20%"}}>
      <TextField className="item" id="outlined-basic" label="Логин" variant="outlined" />
      <TextField className="item" id="outlined-basic" label="Пароль" variant="outlined" type="password" />
      <Button className="item" variant="contained">Авторизация</Button>
    </div>
  );
}

export default Authorization;
