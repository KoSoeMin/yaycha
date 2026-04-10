import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Paper,
} from "@mui/material";

export default function UserList({ title, users = [] }) {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, px: 1 }}>
        {title}
      </Typography>
      
      <Paper variant="outlined" sx={{ borderRadius: 2 }}>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemAvatar>
                {/* Avatar မှာ နာမည်ရဲ့ ရှေ့ဆုံးစာလုံးကို ပြပေးပါမယ် */}
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  {user.name ? user.name[0] : "?"}
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={user.name} 
                secondary={user.bio || "No bio available"} 
              />
            </ListItem>
          ))}

          {/* User မရှိရင် ပြမယ့် စာသား */}
          {users.length === 0 && (
            <ListItem>
              <ListItemText primary="No users found" />
            </ListItem>
          )}
        </List>
      </Paper>
    </Box>
  );
}