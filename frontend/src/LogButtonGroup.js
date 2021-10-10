import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonGroup } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Authorization from "./AuthorizationPage/Authorization";

const LogButtonGroup = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <ButtonGroup variant="text" aria-label="text button group" >
      <Button
        variant="outlined"
        href="/Authorization"
        // onClick={() => loginWithRedirect()}
      >
        <LoginOutlinedIcon/>
      </Button>
      {/* <Button
        variant="outlined"
        color="error"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Выход
      </Button> */}
    </ButtonGroup>
  );
};

export default LogButtonGroup;
