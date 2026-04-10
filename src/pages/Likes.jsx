import UserList from "../components/UserList";
import { Box } from "@mui/material";

export default function Likes() {
  const likedUsers = [
    { id: 1, name: "Alice", bio: "Software Developer" },
    { id: 2, name: "Bob", bio: "UI/UX Designer" },
    { id: 3, name: "Ssu", bio: "UCS Pathein Student" },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <UserList title="People who liked" users={likedUsers} />
    </Box>
  );
}