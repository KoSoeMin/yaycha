import { useContext, useRef } from "react";
import { AppContext } from "./ThemedApp";

export default function Form({ add }) {
    const { mode } = useContext(AppContext);
    const contentRef = useRef();
    const nameRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const content = contentRef.current.value;
        const name = nameRef.current.value;
        
        // Validation
        if (!content || !name) return;

        add(content, name);
        e.currentTarget.reset(); // Form ကို အလိုအလျောက် ပြန်ရှင်းပေးတာ
      }}
       style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: mode === "dark" ? "#555" : "#def",
      }}
    >
      <input
        ref={contentRef}
        type="text"
        placeholder="Content"
        style={{ padding: 5 }}
      />
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        style={{ padding: 5 }}
      />
      <button
        type="submit"
        style={{
          padding: 8,
          background: "#0d6efd",
          color: "white",
          border: "0 none",
          cursor: "pointer", 
        }}
      >
        Post
      </button>
    </form>
  );
}