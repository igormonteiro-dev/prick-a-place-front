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
            px: 2,
            py: 1,
            minWidth: 90,
            color: "#FFF",
            fontSize: ".9rem",
            fontWeight: "600",
            borderRadius: 2,
            backgroundColor: "#ff395c",
          },
          {
            "&:hover": {
              backgroundColor: "#ff395c",
              opacity: 0.9,
            },
          },
        ]}
      >
        Sign up
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
