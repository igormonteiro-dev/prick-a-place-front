import React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
// react icons
import { MdCelebration, MdLocalBar } from "react-icons/md";
import { GiArcTriomphe } from "react-icons/gi";
import { RiVipLine } from "react-icons/ri";
import PetsIcon from "@mui/icons-material/Pets";
import ForestIcon from "@mui/icons-material/Forest";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { tabType } from "../../themes/commonStyles";

export default function TabBar({ filter, setFilter }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue((oldValue) =>
      typeof newValue === "number" ? newValue : oldValue
    );
  };

  return (
    <Container maxWidth="xl" disableGutters={true}>
      <div className="flex flex-grow:1 pb-5 justify-center">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          visibleScrollbar={false}
          scrollButtons
          sx={{
            backgroundColor: "#fff",
            boxShadow: 5,
            borderRadius: { md: 50, lg: 50, xl: 50 },
            color: "#383838",
            mt: { xs: 5, sm: 5, md: 5, lg: -8, xl: -8 },
            zIndex: 1000,
            mb: 5,
          }}
        >
          <Tab
            onClick={(e) => setFilter({ ...filter, type: "" })}
            label="All"
            icon={<ForestIcon size={30} />}
            sx={{ ...tabType }}
          />
          <Tab
            onClick={(e) => setFilter({ ...filter, type: "historic" })}
            label="Historic"
            icon={<GiArcTriomphe size={30} />}
            sx={{ ...tabType }}
          />

          <Tab
            onClick={(e) => setFilter({ ...filter, type: "romantic" })}
            label="Romantic"
            icon={<FavoriteOutlinedIcon size={30} />}
            sx={{ ...tabType }}
          />
          <Tab
            onClick={(e) => setFilter({ ...filter, type: "festive" })}
            label="Festive"
            icon={<MdCelebration size={30} />}
            sx={{ ...tabType }}
          />
          <Tab
            onClick={(e) => setFilter({ ...filter, type: "local" })}
            label="Local"
            icon={<MapsHomeWorkIcon size={30} />}
            sx={{ ...tabType }}
          />
          <Tab
            onClick={(e) => setFilter({ ...filter, type: "trendy" })}
            label="Trendy"
            icon={<MdLocalBar size={30} />}
            sx={{ ...tabType }}
          />
          <Tab
            label="Secret"
            onClick={(e) => setFilter({ ...filter, type: "private" })}
            icon={<RiVipLine size={30} />}
            sx={{ ...tabType }}
          />
          <Tab
            label="Pets?"
            onClick={(e) => setFilter({ ...filter, type: "with pets" })}
            icon={<PetsIcon size={30} />}
            sx={{ ...tabType }}
          />
          <FormControl
            sx={{
              m: 2,
              minWidth: 120,
            }}
          >
            <InputLabel sx={{ fontWei4ht: 600 }}>With Who ?</InputLabel>
            <Select
              value={filter.with}
              label="With who ?"
              onChange={handleChange}
              sx={{
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "#ff395c",
              }}
            >
              <MenuItem
                onClick={(e) => setFilter({ ...filter, with: "" })}
                value={"All"}
              >
                All
              </MenuItem>
              <MenuItem
                onClick={(e) => setFilter({ ...filter, with: "Friends" })}
                value={"Friends"}
              >
                Friends
              </MenuItem>
              <MenuItem
                onClick={(e) => setFilter({ ...filter, with: "Couple" })}
                value={"Couple"}
              >
                Couple
              </MenuItem>
              <MenuItem
                onClick={(e) => setFilter({ ...filter, with: "Family" })}
                value={"Family"}
              >
                Family
              </MenuItem>
            </Select>
          </FormControl>
        </Tabs>
      </div>
    </Container>
  );
}
