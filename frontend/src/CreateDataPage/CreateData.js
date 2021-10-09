import * as React from "react";
import SearchInput from "../SearchInput/SearchInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import RuleCard from "./RuleCard";
import ComboBox from "./ComboBox";
import { IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateData() {
  return (
    <div>
      <div style={{ margin: "30px 0px" }}>
        <ComboBox />
        <IconButton aria-label="delete" color="primary" size="large">
          <AddCircleIcon />
        </IconButton>
      </div>

      <RuleCard title="Объединение" content={null} />
      <RuleCard title="Временной промежуток" content={null} />
      <RuleCard title="Сэмплирование" content={null} />
      <RuleCard title="Преобразование" content={null} />
    </div>
  );
}

export default CreateData;
