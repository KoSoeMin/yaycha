import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemedApp";

export default function Login() {
    const navigate = useNavigate();
    const { setAuth } = useApp();

    return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>Login</Typography>
      
      <Alert severity="warning" sx={{ mb: 2 }}>All fields required</Alert>

      <form onSubmit={e => {
        e.preventDefault();
        setAuth({ name: "Alice" });
        navigate("/");
      }}>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField 
            label="Username"
            fullWidth 
            required 
          />
          <TextField 
            type="password" 
            label="Password" 
            fullWidth 
            required 
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            size="large"
            sx={{ mt: 1 }}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}