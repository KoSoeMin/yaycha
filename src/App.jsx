import { useState } from "react";
import { useApp } from "./ThemedApp";
import Header from "./components/Header";
import Form from "./components/Form";
import Item from "./components/Item";
import { Box, Container } from "@mui/material";

export default function App() {
  const { showForm } = useApp();
  const [data, setData] = useState([
    { id: 1, content: "Hello React", name: "Alice" },
    { id: 2, content: "React is fun?", name: "Bob" },
    { id: 3, content: "Yay, Interesting", name: "Ko Soe Min" }
  ]);

  const remove = (id) => setData(data.filter(item => item.id !== id));

  const add = (content, name) => {
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([...data, { id, content, name }]);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
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