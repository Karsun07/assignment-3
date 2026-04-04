import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [size, setSize] = useState(16);
  const editorRef = useRef(null);
  const savedRange = useRef(null);

  const handleRef = (ref) => {
    editorRef.current = ref.current;
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedRange.current = sel.getRangeAt(0);
    }
  };

  const restoreSelection = () => {
    const sel = window.getSelection();
    if (savedRange.current && sel) {
      sel.removeAllRanges();
      sel.addRange(savedRange.current);
    }
  };

  const execCmd = (command, value = null) => {
    restoreSelection();
    document.execCommand(command, false, value);
  };

  const loadTemplate = (html) => {
    if (editorRef.current) {
      editorRef.current.innerHTML = html;
      editorRef.current.focus();
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  return (
    <div id="mainContainer">
      <div id="mainGrid">
        <Sidebar loadTemplate={loadTemplate} />
        <Header setSize={setSize} execCmd={execCmd} saveSelection={saveSelection} />
        <Content size={size} onRef={handleRef} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);