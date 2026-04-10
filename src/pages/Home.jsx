import { useState } from "react";
import { Box, Container } from "@mui/material";
import Form from "../components/Form";
import Item from "../components/Item";
import { useApp } from "../ThemedApp";

export default function Home() {
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
    <Box>
      {/* Template ထဲမှာ Header ပါပြီးသားမို့လို့ ဒီမှာ ထပ်ထည့်စရာမလိုပါဘူး */}
      {showForm && <Form add={add} />}
      <Box sx={{ mt: 2 }}>
        {data.map(item => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
      </Box>
    </Box>
  );
}