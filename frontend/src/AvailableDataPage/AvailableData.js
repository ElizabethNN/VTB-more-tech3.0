import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { SearchOutlined } from '@material-ui/icons';
import { Pagination } from '@mui/material'
import InfoCard from "./InfoCard/InfoCard";
import {BrowserRouter} from "react-router-dom";

function AvailableData() {
    return (
      <>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Поиск"
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchOutlined/>
        </IconButton>
      </Paper>
          <InfoCard/>
          <InfoCard/>
          <InfoCard/>
      <Pagination count={10} />
      </>
    );
}

export default AvailableData;
