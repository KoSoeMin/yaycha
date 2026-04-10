import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemedApp";

export default function Register() {
  const navigate = useNavigate();
  const { setGlobalMsg } = useApp();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Register
      </Typography>

      <Alert severity="warning" sx={{ mb: 2 }}>
        All fields required
      </Alert>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGlobalMsg("Account created successfully");
          navigate("/login");
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Name" fullWidth required />
          <TextField label="Username" fullWidth required />
          <TextField label="Bio" fullWidth multiline rows={3} />
          <TextField type="password" label="Password" fullWidth required />
          
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            size="large" 
            sx={{ mt: 1 }}
          >
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
}