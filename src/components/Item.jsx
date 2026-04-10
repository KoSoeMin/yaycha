import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton,
  CardMedia,
} from "@mui/material";

import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Item({ item, remove, primary }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
      {/* Primary ဖြစ်ခဲ့ရင် CardMedia ဒါမှမဟုတ် Box နဲ့ အရောင်ပြပါမယ် */}
      {primary && (
        <CardMedia 
          sx={{ height: 50, bgcolor: green[500] }} 
          component="div" 
        />
      )}

      <CardContent 
        sx={{ cursor: "pointer" }} // Mouse တင်ရင် လက်ညှိုးပုံလေးဖြစ်အောင်
        onClick={() => navigate("/comments/1")}
      >
        {/* Top Section: Time and Delete Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}>
            <TimeIcon sx={{ fontSize: 16 }} color="success" />
            <Typography
              variant="caption"
              sx={{ color: green[500], fontWeight: "bold" }}>
              A few seconds ago
            </Typography>
          </Box>

          {/* Delete Button */}
          <IconButton
            size="small"
            sx={{ color: "grey.500" }} // text.fade နေရာမှာ grey.500 သုံးနိုင်ပါတယ်
            onClick={(e) => {
              e.stopPropagation(); // CardContent ရဲ့ onClick ကို မရောက်အောင် တားလိုက်တာပါ
              remove(item.id);
            }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Content Section */}
        <Typography sx={{ my: 2, fontSize: "1.1rem" }}>
          {item.content}
        </Typography>

        {/* Bottom Section: User Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
          <UserIcon sx={{ fontSize: 18 }} color="info" />
          <Typography 
            variant="caption" 
            sx={{ fontWeight: "medium", color: "text.secondary" }}>
            {item.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}