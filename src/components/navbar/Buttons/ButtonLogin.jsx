import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import Login from "../Login";
import LoginPage from "../../Authentication/LoginPage";

export default function ButtonLogin() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenLogin = () => {
    setOpen(true);
  };

  const handleCloseLogin = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpenLogin}
        sx={[
          {
            px: 2,
            py: 1,
            minWidth: 90,
            fontSize: ".9rem",
            color: "#303030",
          },
        ]}
      >
        Login
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseLogin}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <LoginPage handleCloseLogin={handleCloseLogin} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
