import { useState, createContext, useContext, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme, Snackbar, Alert } from "@mui/material";
import App from "./App";
import AppDrawer from "./components/AppDrawer";
import { deepPurple, grey } from "@mui/material/colors";

export const AppContext = createContext();
export function useApp() { return useContext(AppContext); }

export default function ThemedApp() {
  const [showForm, setShowForm] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(null);
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: deepPurple,
      banner: mode === "dark" ? grey[800] : grey[200],
    },
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ 
        showDrawer, setShowDrawer, showForm, setShowForm, 
        globalMsg, setGlobalMsg, auth, setAuth, mode, setMode 
      }}>
        <CssBaseline />
        <App />
        <AppDrawer />
        <Snackbar 
          open={Boolean(globalMsg)} 
          autoHideDuration={3000} 
          onClose={() => setGlobalMsg(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" variant="filled">{globalMsg}</Alert>
        </Snackbar>
      </AppContext.Provider>
    </ThemeProvider>
  );
}