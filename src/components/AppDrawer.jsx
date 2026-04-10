import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
  PersonAdd as RegisterIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { deepPurple, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom"; // navigate သုံးဖို့ import လုပ်ရပါမယ်
import { useApp } from "../ThemedApp";

export default function AppDrawer() {
  const { showDrawer, setShowDrawer, auth, setAuth } = useApp();
  const navigate = useNavigate();

  // Navigation လုပ်ပြီးတိုင်း Sidebar ကို ပြန်ပိတ်ဖို့ function လေးပါ
  const handleNav = (path) => {
    navigate(path);
    setShowDrawer(false);
  };

  return (
    <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
      <Box sx={{ width: 300 }}>
        {/* User Banner Section */}
        <Box
          sx={{
            height: 140,
            bgcolor: grey[200],
            position: "relative",
            mb: 6,
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              position: "absolute",
              left: 20,
              bottom: -30,
            }}>
            <Avatar
              sx={{
                width: 94,
                height: 94,
                color: "white",
                background: deepPurple[500],
                border: "4px solid white",
              }}
            >
              {auth ? auth.name[0] : "?"}
            </Avatar>
            <Typography sx={{ fontWeight: "bold" }}>
              {auth ? auth.name : "Guest"}
            </Typography>
          </Box>
        </Box>

        {/* Menu List Section */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNav("/")}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <Divider />

          {auth && (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleNav("/profile/1")}>
                  <ListItemIcon><ProfileIcon /></ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => { setAuth(null); setShowDrawer(false); }}>
                  <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          )}

          {!auth && (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleNav("/register")}>
                  <ListItemIcon><RegisterIcon /></ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => handleNav("/login")}>
                  <ListItemIcon><LoginIcon /></ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
}