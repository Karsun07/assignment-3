import { useState, useRef } from "react";
import Header from "./Header";
import Content from "./Content";

export default function Parent() {
  const [size, setSize] = useState(16);
  const editorRef = useRef(null);

  const handleRef = (ref) => {
    editorRef.current = ref.current;
  };

  const execCmd = (command, value = null) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

  return (
    <>
      <Header
        setSize={setSize}
        execCmd={execCmd}
      />
      <Content
        size={size}
        onRef={handleRef}
      />
    </>
  );
}