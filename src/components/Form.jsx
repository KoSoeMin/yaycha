import { useRef } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

export default function Form({ add }) {
  const contentRef = useRef();
  const nameRef = useRef();

  return (
    <Paper sx={{ p: 2, mb: 2, bgcolor: "background.default" }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        const content = contentRef.current.value;
        const name = nameRef.current.value;
        if (!content || !name) return;
        add(content, name);
        e.currentTarget.reset();
      }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField inputRef={contentRef} label="Content" variant="outlined" fullWidth size="small" />
          <TextField inputRef={nameRef} label="Name" variant="outlined" fullWidth size="small" />
          <Button type="submit" variant="contained" fullWidth>Post</Button>
        </Box>
      </form>
    </Paper>
  );
}