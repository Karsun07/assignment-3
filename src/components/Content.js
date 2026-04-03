import { useState } from "react";

export default function Content() {
    const [text, setText] = useState("");

    return (
        <div id="contentContainer" >
            
            <h2>Write something:</h2>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your text here..."
                rows={6}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px"
                }}
            />

           

        </div>
    );
}