import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonGroup } from "@mui/material";

const LogButtonGroup = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button variant="outlined" color="success" onClick={() => loginWithRedirect()}>
        Вход
      </Button>
      <Button variant="outlined" color="error" onClick={() => logout({ returnTo: window.location.origin })}>
        Выход
      </Button>
    </ButtonGroup>
  );
};

export default LogButtonGroup;