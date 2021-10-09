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

function SendData() {
  return (
    <Grid item xs={12} container rowSpacing={5} >
      <Grid item xs={12}>
        <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Название датасета" />
        </Paper>
      </Grid>
        <Grid  container
               direction="row" item xs={12} >
      <Grid>
        Начало сбора статистики
        <BasicDatePicker />
      </Grid>
      <Grid>
        Конец сбора статистики
        <BasicDatePicker />
      </Grid>
        </Grid>
      <Grid item xs={12}>
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
      <Grid>
        <Button variant="outlined">Отправить датасет</Button>
      </Grid>
    </Grid>
  );
}

export default SendData;