import {
  Button,
  InputBase,
  Grid,
  Paper,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import BasicDatePicker from "../BasicDatePicker";
import BoxComponent from "../BoxComponent";

function SendData() {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", marginTop: 30 }}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase sx={{ ml: 1, flex: 1, padding: "5px 0px" }} placeholder="Название датасета" />
      </Paper>

      <div style={{marginTop: 30, marginBottom: 2, display: "flex", alignItems: "center"}}>
        <BasicDatePicker text="Начало сбора статистики" />
        <div style={{width: 50}}></div>
        <BasicDatePicker text="Конец сбора статистики"/>
      </div>

      <div style={{marginTop: 30, marginBottom: 5}}>
        Выберите, кто будет видеть Ваш датасет:
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  />}
            label="Яндекс"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="КЭССБИ"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="Национальная Юридическая служба"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="Ростелеком"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox  />}
            label="Калуга Астрал"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="Хэдхантер"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="1С — БухОбслуживание"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="Вымпелком"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel 
            control={<Checkbox  />} 
            label="ПА ЛОГИСТИКС" 
            />

          <FormControlLabel
            control={<Checkbox  />}
            label="ЭСК"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="Мэйл.Ру"
          />

          <FormControlLabel
            control={<Checkbox  />}
            label="Межрегиональный ТранзитТелеком"
          />
        </FormGroup>
      </div>

      <BoxComponent />

      <Button variant="outlined">Отправить датасет </Button>
    </div>
  );
}

export default SendData;
