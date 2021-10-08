import { Button, ButtonGroup } from '@mui/material';
import CreateData from "../CreateDataPage/CreateData";
import { BrowserRouter, Route } from 'react-router-dom'
import AvailableData from "../AvailableDataPage/AvailableData";
import SendData from '../SendDataPage/SendData';
import AnalizeData from '../AnalizeDataPage/AnalizeData';
import LogButtonGroup from '../LogButtonGroup'; 

function MainPage() {
    return (
        <BrowserRouter>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button href="/AvailableData">Доступные данные</Button>
                <Button href="/AnalizeData">Анализ данных</Button>
                <Button href="/CreateData">Создание фичи</Button>
                <Button href="/SendData">Отправка датасета</Button>
            </ButtonGroup>

            <LogButtonGroup/>

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