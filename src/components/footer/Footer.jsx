import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "../../themes/commonStyles";

export default function Footer() {
  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: "1px solid #ddd",
        my: "40px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Stack>
            <Paper>
              <Link href="#"> 2022 Pick a Place Copyright </Link>
            </Paper>
          </Stack>

          <Stack>
            <Paper sx={justifyCenter}></Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
