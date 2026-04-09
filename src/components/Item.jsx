import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton,
} from "@mui/material";

import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";

export default function Item({ item, remove }) {
  return (
    <Card sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
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
            <TimeIcon
              sx={{ fontSize: 16 }} // MUI မှာ fontSize ကို sx ထဲမှာ ထည့်တာ ပိုအဆင်ပြေပါတယ်
              color="success"
            />
            <Typography
              variant="caption"
              sx={{ color: green[500], fontWeight: "bold" }}>
              A few seconds ago
            </Typography>
          </Box>
          <IconButton
            size="small"
            color="error"
            onClick={() => remove(item.id)}>
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
          <UserIcon
            sx={{ fontSize: 18 }}
            color="info"
          />
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