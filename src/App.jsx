import { useState } from "react";
import { useApp } from "./ThemedApp";
import Header from "./components/Header";
import Form from "./components/Form";
import Item from "./components/Item";
import { Box, Container } from "@mui/material";

export default function App() {
  const { showForm, setGlobalMsg } = useApp();
  const [data, setData] = useState([
    { id: 1, content: "Hello React", name: "Alice" },
    { id: 2, content: "React is fun?", name: "Bob" },
    { id: 3, content: "Yay, Interesting", name: "Ko Soe Min" }
  ]);

  const remove = (id) => {
    setData(data.filter(item => item.id !== id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([...data, { id, content, name }]);
    setGlobalMsg("An item added");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}
        <Box sx={{ mt: 2 }}>
          {data.map(item => (
            <Item key={item.id} item={item} remove={remove} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}