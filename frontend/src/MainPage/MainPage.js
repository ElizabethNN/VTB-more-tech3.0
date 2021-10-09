import { Button, ButtonGroup, Grid, Container } from "@mui/material";
import CreateData from "../CreateDataPage/CreateData";
import { BrowserRouter, Route } from "react-router-dom";
import AvailableData from "../AvailableDataPage/AvailableData";
import SendData from "../SendDataPage/SendData";
import AnalizeData from "../AnalizeDataPage/AnalizeData";
import LogButtonGroup from "../LogButtonGroup";

function MainPage() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Grid container spacing={2} justifyContent="space-between" mt={4}>
          <Grid item xs={10}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              fullWidth
            >
              <Button href="/AvailableData">Доступные данные</Button>
              <Button href="/AnalizeData">Анализ данных</Button>
              <Button href="/CreateData">Создание фичи</Button>
              <Button href="/SendData">Отправка датасета</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={2} direction-xs-row-reverse>
            <LogButtonGroup />
          </Grid>
          <Grid item xs={12}>
            <Route path="/AvailableData" component={AvailableData} />
            <Route path="/CreateData" component={CreateData} />
            <Route path="/SendData" component={SendData} />
            <Route path="/AnalizeData" component={AnalizeData} />
          </Grid>
        </Grid>
      </BrowserRouter>
    </Container>
  );
}

export default MainPage;