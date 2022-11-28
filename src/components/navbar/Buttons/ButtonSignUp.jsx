import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SignUpPage from "../../Authentication/SignUpPage";

export default function ButtonSignUp() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenSignup = () => {
    setOpen(true);
  };

  const handleCloseSignup = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpenSignup}
        sx={[
          {
            px: "15px",
            py: "8px",

            color: "#303030",
            fontSize: ".9rem",
            fontWeight: "400",
            borderRadius: 0,
            backgroundColor: "#ff395c",
            fontFamily: "Open Sans",
          },
          {
            "&:hover": {
              backgroundColor: "#303030",
              color: "white",
              opacity: 0.9,
            },
          },
        ]}
      >
        SIGN UP
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseSignup}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <SignUpPage handleCloseSignup={handleCloseSignup} />s
        </DialogContent>
      </Dialog>
    </div>
  );
}
