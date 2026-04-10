import { Avatar, Box, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Item from "../components/Item";
import { useApp } from "../ThemedApp";

export default function Profile() {
  const { auth } = useApp();

  return (
    <Box>
      {/* Profile Header Section */}
      <Box
        sx={{
          bgcolor: "banner",
          height: 150,
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mb: 4,
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: pink[500],
            mb: 1,
            fontSize: 32,
          }}
        >
          {auth ? auth.name[0] : "A"}
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {auth ? auth.name : "Alice"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Alice's profile bio content here
        </Typography>
      </Box>

      {/* User's Posts Section */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Posts
      </Typography>
      
      <Item
        remove={() => {}} // Profile မှာ delete logic မထည့်သေးရင် empty function ထားပါ
        item={{
          id: 1,
          content: "A post content from Alice",
          name: "Alice",
        }}
      />
    </Box>
  );
}