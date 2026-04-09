import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { 
  Add as AddIcon, 
  LightMode as LightModeIcon, 
  DarkMode as DarkModeIcon,
  Remove as RemoveIcon 
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";

export default function Header() {
  const { showForm, setShowForm, mode, setMode } = useApp();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Yaycha</Typography>
        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            {showForm ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          <IconButton color="inherit" onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}