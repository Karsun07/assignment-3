export default function Content({ text, setText, weight, size, fStyle, align }) {
    return (
        <div id="contentContainer" style={{ padding: "20px" }}>
            
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your text here..."
                rows={6}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: `${size}px`,
                    fontStyle: fStyle,
                    fontWeight: weight,
                    textAlign: align
                }}
            />

        </div>
    );
}