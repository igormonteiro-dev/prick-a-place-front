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
        variant="outlined"
        onClick={handleOpenLogin}
        sx={[
          {
            px: "15px",
            py: "7px",
            mr: 1,
            borderRadius: 0,
            fontSize: ".9rem",
            color: "#303030",
            fontFamily: "Open Sans",
            fontWeight: 400,
            opacity: 0.6,
          },
          {
            "&:hover": {
              backgroundColor: "#fff",

              opacity: 0.9,
            },
          },
        ]}
      >
        LOGIN
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
