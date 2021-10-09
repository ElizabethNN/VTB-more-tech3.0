import * as React from "react";
import RuleCard from "./RuleCard";
import ComboBox from "./ComboBox";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CreateData() {
  return (
    <div>
      <div style={{ margin: "30px 0px", display: "flex", flexDirection: "column" }}>
        <ComboBox />
        <Button
          maxWidth
          sx={{ my: 1, p: 1, border: "1px dashed grey" }}
          endIcon={<AddCircleOutlineIcon fontSize="large" />}
        >
          Добавить датасет
        </Button>
      </div>

      <RuleCard title="Объединение" content={null} />
      <RuleCard title="Временной промежуток" content={null} />
      <RuleCard title="Сэмплирование" content={null} />
      <RuleCard title="Преобразование" content={null} />
    </div>
  );
}

export default CreateData;
