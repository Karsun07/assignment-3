export default function Header({ setWeight, setSize, setFStyle, setAlign }) {
    return (
        <div id="headerContainer">
            <h1>Text Editor</h1>

            <div id="customs">

                {/* Bold */}
                <button onClick={() => setWeight("bold")}>B</button>

                {/* Italic */}
                <button onClick={() => setFStyle("italic")}>I</button>

                {/* Heading (acts like H1, H2, etc.) */}
                <select onChange={(e) => setSize(Number(e.target.value))}>
                    <option value={16}>Normal</option>
                    <option value={32}>H1</option>
                    <option value={24}>H2</option>
                    <option value={18}>H3</option>
                </select>

                {/* Font Size */}
                <select onChange={(e) => setSize(Number(e.target.value))}>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={24}>24</option>
                    <option value={32}>32</option>
                </select>

                {/* Alignment */}
                <button onClick={() => setAlign("left")}>Left</button>
                <button onClick={() => setAlign("center")}>Center</button>
                <button onClick={() => setAlign("right")}>Right</button>

            </div>
        </div>
    );
}