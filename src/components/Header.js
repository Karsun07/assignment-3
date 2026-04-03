export default function Header(){
    return(
        <>
        <div id="headerContainer">
            <h1 id="textEditor">Text Editor</h1>
        <div id="heading">      
            <div id="customs">
                {/* bold */}
                <button>B</button>
                {/* italic */}
                <button>I</button>
                {/* font weight dropdown */}
                <select id="fontWeight">
                <option value="p">Normal</option>
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                </select>
                {/* font size drop down */}
                <select id="fontSize">
                <option value="12px">12</option>
                <option value="16px">16</option>
                <option value="24px">24</option>
                <option value="32px">32</option>
                </select>
                {/* bullet points */}
                <button>ul</button>
                <button>ol</button>
                 {/* Alignment */}
                <button>left</button>
                <button>center</button>
                <button>right</button>

            </div>

        </div>

        </div>

        </>
    )
}