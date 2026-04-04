export default function Header({ setSize, execCmd }) {
  return (
    <div id="headerContainer">
      <h1>Text Editor</h1>
      <div id="customs">
        {/* Bold - applies only to selection */}
        <button onClick={() => execCmd("bold")}>B</button>

        {/* Italic - applies only to selection */}
        <button onClick={() => execCmd("italic")}>I</button>

        {/* Underline */}
        <button onClick={() => execCmd("underline")} style={{ textDecoration: "underline" }}>U</button>

        {/* Heading size */}
        <select onChange={(e) => {
          const val = e.target.value;
          if (val === "p") {
            execCmd("formatBlock", "p");
          } else {
            execCmd("formatBlock", val);
          }
        }}>
          <option value="p">Normal</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
        </select>

        {/* Font Size */}
        <select onChange={(e) => setSize(Number(e.target.value))}>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
        </select>

        {/* Alignment */}
        <button onClick={() => execCmd("justifyLeft")}>Left</button>
        <button onClick={() => execCmd("justifyCenter")}>Center</button>
        <button onClick={() => execCmd("justifyRight")}>Right</button>

        {/* Bullet List (ul) */}
        <button onClick={() => execCmd("insertUnorderedList")}>• UL</button>

        {/* Numbered List (ol) */}
        <button onClick={() => execCmd("insertOrderedList")}>1. OL</button>
      </div>
    </div>
  );
}