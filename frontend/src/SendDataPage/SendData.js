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
import BoxComponent from "../BoxComponent"

function SendData() {
  return (
    <Grid container spacing={2} xs={12}>
      <Grid item xs={10}>
        <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Название датасета" />
        </Paper>
      </Grid>

      <Grid container item xs={10} direction="row" alignItems="center">
        <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          Начало сбора статистики
          <BasicDatePicker />
        </Paper>
      </Grid>
      <Grid container item xs={10} direction="row" alignItems="center">
      <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          Конец сбора статистики
          <BasicDatePicker />
        </Paper>
      </Grid>

      <Grid item xs={10}>
        Выберите, кто будет видеть Ваш датасет:
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="KFC" />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Macdonalds"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Burger king"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Subway"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={10}>
        <BoxComponent/>
      </Grid>

      <Grid item xs={10}>
        <Button variant="outlined">Отправить датасет </Button>
      </Grid>
    </Grid>
  );
}

export default SendData;