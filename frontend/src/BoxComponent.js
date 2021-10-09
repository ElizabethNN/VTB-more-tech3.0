import * as React from "react";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function BoxComponent() {
  return (
    <Button
      maxWidth
      sx={{ my: 3, p: 5, border: "1px dashed grey" }}
      endIcon={<UploadFileIcon fontSize="large" />}
    >
      Загрузить датасет{" "}
    </Button>
  );
}
