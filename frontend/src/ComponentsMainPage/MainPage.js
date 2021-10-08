import { Button } from '@mui/material';
import CreateData from "./CreateData/CreateData";
import { BrowserRouter, Route } from 'react-router-dom'
import AvailableData from "./AvailableData/AvailableData";

function MainPage() {
    return (
        <BrowserRouter>
            <div>
                <Button><Route path="/AvailableData" component={AvailableData}/> Доступные данные</Button>
                <Button><Route path="/CreateData" component={CreateData}/> Создание фичи</Button>
            </div>
        </BrowserRouter>
    );
}

export default MainPage;
