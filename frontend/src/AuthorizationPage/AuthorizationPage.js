import './AuthorizationPage.css';
import { Button, TextField, Grid, Box } from '@mui/material';

function AuthorizationPage() {
  return (
    <div className="AuthorizationPage">
        <Box sx={{ mx: "auto", my: "auto", p: 10, height: 500 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Логин" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">Авторизация</Button>
                </Grid>
            </Grid>        
        </Box>
    </div>
  );
}

export default AuthorizationPage;