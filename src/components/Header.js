export default function Header({ setSize, execCmd, saveSelection }) {
  const cmd = (command, value = null) => (e) => {
    e.preventDefault();
    execCmd(command, value);
  };

  return (
    <div id="headerContainer">
      <h1>Text Editor</h1>
      <div id="customs">
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("bold")}>B</button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("italic")}>I</button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} style={{ textDecoration: "underline" }} onClick={cmd("underline")}>U</button>

        <select onChange={(e) => {
          const val = e.target.value;
          execCmd("formatBlock", val);
        }}>
          <option value="p">Normal</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
        </select>

        <select onChange={(e) => setSize(Number(e.target.value))}>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
        </select>

        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("justifyLeft")}>Left</button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("justifyCenter")}>Center</button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("justifyRight")}>Right</button>

        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("insertUnorderedList")}>• UL</button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("insertOrderedList")}>1. OL</button>
      </div>
    </div>
  );
}