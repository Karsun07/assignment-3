export default function Header() {

    const applyStyle = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    return (
        <div id="headerContainer">
            <h1 id="textEditor">Text Editor</h1>

            <div id="customs">

                {/* Bold */}
                <button onClick={() => applyStyle("bold")}>B</button>

                {/* Italic */}
                <button onClick={() => applyStyle("italic")}>I</button>

                {/* Heading / Font Size */}
                <select onChange={(e) => applyStyle("fontSize", e.target.value)}>
                    <option value="3">Normal</option>
                    <option value="5">H1</option>
                    <option value="4">H2</option>
                    <option value="3">H3</option>
                </select>

                {/* Alignment */}
                <button onClick={() => applyStyle("justifyLeft")}>Left</button>
                <button onClick={() => applyStyle("justifyCenter")}>Center</button>
                <button onClick={() => applyStyle("justifyRight")}>Right</button>

                {/* Bullet List */}
                <button onClick={() => applyStyle("insertUnorderedList")}>
                    • List
                </button>

                {/* Numbered List */}
                <button onClick={() => applyStyle("insertOrderedList")}>
                    1. List
                </button>

            </div>
        </div>
    );
}