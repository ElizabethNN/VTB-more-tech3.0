import { Grid, Box } from "@mui/material";
import s from "./AnalizeData.module.css";
import CardAnalize from "./../CardAnalize/CardAnalize";

function AnalizeData() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid>Name</Grid>
      <div className={s.container}></div>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Box sx={{display: "flex", bgcolor: 'primary.dark', height:"100%"}}/>
        </Grid>
        <Grid item xs={6} md={5}>
          <div>
            <CardAnalize />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AnalizeData;
