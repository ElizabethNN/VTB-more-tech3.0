import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete 
      disablePortal
      id="combo-box-demo"
      options={datasets}
      renderInput={(params) => <TextField  {...params} label="Выберите датасет" />}
    />
  );
}

const datasets = [
  { label: 'Яндекс'},
  { label: 'ВТБ'},
  { label: 'Ростелеком'},
  { label: '1С — БухОбслуживание'}
];