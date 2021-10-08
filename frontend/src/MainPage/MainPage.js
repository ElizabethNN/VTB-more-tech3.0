import { Button, ButtonGroup } from '@mui/material';
import CreateData from "../CreateDataPage/CreateData";
import { BrowserRouter, Route } from 'react-router-dom'
import AvailableData from "../AvailableDataPage/AvailableData";
import SendData from '../SendDataPage/SendData';
import AnalizeData from '../AnalizeDataPage/AnalizeData';

function MainPage() {
    return (
        <BrowserRouter>
            <ButtonGroup variant="text" aria-label="outlined button group">
                <Button href="/AvailableData">Доступные данные</Button>
                <Button href="/AnalizeData">Анализ данных</Button>
                <Button href="/CreateData">Создание фичи</Button>
                <Button href="/SendData">Отправка датасета</Button>
                <Button color="secondary" variant="outlined" href="/">Выход</Button>
            </ButtonGroup>
            <div>
                <Route path="/AvailableData" component={AvailableData}/>
                <Route path="/CreateData" component={CreateData}/>
                <Route path="/SendData" component={SendData}/>
                <Route path="/AnalizeData" component={AnalizeData}/>
            </div>
        </BrowserRouter>
    );
}

export default MainPage;