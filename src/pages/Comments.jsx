import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

export default function Comments() {
  return (
    <Box>
      {/* ပထမဆုံး Item ကို Primary အနေနဲ့ (Header အရောင်နဲ့) ပြပါမယ် */}
      <Item
        primary
        item={{ id: 1, content: "Main Post Content", name: "Alice" }}
        remove={() => {}}
      />

      {/* ကျန်တဲ့ Item (Comments) တွေကို ရိုးရိုးပဲ ပြပါမယ် */}
      <Item
        item={{ id: 2, content: "First comment here", name: "Bob" }}
        remove={() => {}}
      />
      <Item
        item={{ id: 3, content: "Second comment here", name: "Ssu" }}
        remove={() => {}}
      />

      {/* Reply Box Section */}
      <form onSubmit={(e) => e.preventDefault()}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            mt: 3,
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Write a reply..."
            fullWidth
            size="small"
            variant="outlined"
          />
          <Button variant="contained" type="submit">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  );
}