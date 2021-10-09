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
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Название датасета" />
      </Paper>

      <div style={{marginTop: 30, marginBottom: 2, display: "flex", alignItems: "center"}}>
        <p style={{marginRight: 10}}>Начало сбора статистики</p>
        <BasicDatePicker />
      </div>

      <div style={{marginTop: 2, marginBottom: 2, display: "flex", alignItems: "center"}}>
        <p style={{marginRight: 10}}>Конец сбора статистики</p>
        <BasicDatePicker />
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
            control={<Checkbox defaultChecked />}
            label="Яндекс"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="КЭССБИ"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Национальная Юридическая служба"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Ростелеком"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Калуга Астрал"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Хэдхантер"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="1С — БухОбслуживание"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Вымпелком"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel 
            control={<Checkbox defaultChecked />} 
            label="ПА ЛОГИСТИКС" 
            />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ЭСК"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Мэйл.Ру"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
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
