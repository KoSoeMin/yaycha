import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { 
  Add as AddIcon, 
  LightMode as LightModeIcon, 
  DarkMode as DarkModeIcon,
  Remove as RemoveIcon,
  Menu as MenuIcon
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";

export default function Header() {
  const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Sidebar ဖွင့်မယ့် ခလုတ် */}
        <IconButton 
          color="inherit" 
          edge="start" 
          onClick={() => setShowDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

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