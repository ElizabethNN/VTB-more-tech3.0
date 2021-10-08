import { Button } from '@mui/material';
import CreateData from "./CreateData/CreateData";
import { BrowserRouter, Route } from 'react-router-dom'
import AvailableData from "./AvailableData/AvailableData";

function MainPage() {
    return (
        <BrowserRouter>
            <div>
                <Button href="/AvailableData">Доступные данные</Button>
                <Button href="/CreateData">Создание фичи</Button>
            </div>
            <div>
                <Route path="/AvailableData" component={AvailableData}/>
                <Route path="/CreateData" component={CreateData}/>
            </div>
        </BrowserRouter>
    );
}

export default MainPage;
