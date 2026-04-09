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
import { deepPurple } from "@mui/material/colors";
import { useApp } from "../ThemedApp";

export default function AppDrawer() {
  const { showDrawer, setShowDrawer, auth, setAuth } = useApp();

  return (
    <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
      <Box sx={{ width: 300 }}>
        {/* Header/Banner Section */}
        <Box
          sx={{
            height: 140,
            bgcolor: "banner",
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
                bgcolor: deepPurple[500],
                border: "4px solid white",
              }}
            >
              {auth ? "A" : "?"}
            </Avatar>
            <Typography sx={{ fontWeight: "bold", mt: 4 }}>
              {auth ? "Alice" : "Guest"}
            </Typography>
          </Box>
        </Box>

        <List sx={{ mt: 2 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setShowDrawer(false)}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          
          <Divider />

          {auth ? (
            <>
              <ListItem disablePadding>
                <ListItemButton>
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
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon><RegisterIcon /></ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => { setAuth(true); setShowDrawer(false); }}>
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