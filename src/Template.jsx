import { Box, Container, Snackbar, Alert } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import { useApp } from "./ThemedApp";

export default function Template() {
  const { globalMsg, setGlobalMsg } = useApp();

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />
      <AppDrawer />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={Boolean(globalMsg)}
        autoHideDuration={3000}
        onClose={() => setGlobalMsg(null)}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {globalMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}