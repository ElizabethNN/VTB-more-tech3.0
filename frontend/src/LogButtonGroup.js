import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonGroup } from "@mui/material";

const LogButtonGroup = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <ButtonGroup aria-label="secondary button group">
      <Button onClick={() => loginWithRedirect()}>
        Вход
      </Button>
      <Button color="secondary" onClick={() => logout({ returnTo: window.location.origin })}>
        Выход
      </Button>
    </ButtonGroup>
  );
};

export default LogButtonGroup;