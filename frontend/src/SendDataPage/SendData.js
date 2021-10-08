import { Button, TextField } from '@mui/material';

function SendData() {
    return (
        <div>
            <TextField id="standard-basic" label="Название датасета" variant="standard" />
            <Button variant="outlined">Отправить датасет</Button>

        </div>
    );
}

export default SendData;