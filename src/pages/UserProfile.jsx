import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Favorites from "../components/favorites/Favorites";
import { Container } from "@mui/system";
import AuthorPage from "../components/user/AuthorPage";

function UserProfile(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

UserProfile.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 5, pl: 10 }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Favorites"
              {...a11yProps(0)}
              sx={{ fontSize: "1rem", color: "#404040" }}
            />
            <Tab
              label="Account info"
              {...a11yProps(1)}
              sx={{ fontSize: "1rem", color: "#404040" }}
            />
            <Tab
              label="Change password"
              {...a11yProps(2)}
              sx={{ fontSize: "1rem", color: "#404040" }}
            />
          </Tabs>
        </Box>
        <UserProfile value={value} index={0}>
          <Favorites />
        </UserProfile>
        <UserProfile value={value} index={1}>
          <AuthorPage />
        </UserProfile>
        <UserProfile value={value} index={2}>
          Item Three
        </UserProfile>
      </Box>
    </Container>
  );
}
