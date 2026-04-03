export default function Content() {
    return (
        <div id="contentContainer">
            <div
                id="editor"
                className="editorArea"
                contentEditable={true}
                suppressContentEditableWarning={true}
            ></div>
        </div>
    );
}