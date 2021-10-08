import { TextField, Grid, Button } from '@mui/material';

function AvailableData() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Поиск" variant="outlined" />
                    <Button variant="outlined" href="/CreateData">Создание фичи</Button>
                </Grid>
            </Grid>    
        </div>
    );
}

export default AvailableData;
