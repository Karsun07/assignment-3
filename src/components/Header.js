export default function Header({ setSize, execCmd, saveSelection }) {
  const cmd = (command, value = null) => (e) => {
    e.preventDefault();
    execCmd(command, value);

    // Toggle .active class for formatting buttons
    const btn = e.currentTarget;
    btn.classList.toggle("active");
  };

  return (
    <div id="headerContainer">
      <h1>Text Editor</h1>
      <div id="customs">
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("bold")}><b>B</b></button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("italic")}><i>I</i></button>
        <button onMouseDown={(e) => { e.preventDefault(); saveSelection(); }} onClick={cmd("underline")} style={{ textDecoration: "underline" }}>U</button>

        <select onChange={(e) => execCmd("formatBlock", e.target.value)}>
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