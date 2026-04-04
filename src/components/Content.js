import { useRef, useEffect } from "react";

export default function Content({ size, onRef }) {
  const ref = useRef(null);

  useEffect(() => {
    if (onRef) onRef(ref);
  }, []);

  return (
    <div id="contentContainer" style={{ padding: "20px" }}>
      <div
        id="editor"
        ref={ref}
        contentEditable="true"
        suppressContentEditableWarning={true}
        className="editorArea"
        style={{
          fontSize: `${size}px`,
          cursor: "text",
          userSelect: "text",
          WebkitUserSelect: "text",
          outline: "none",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
        data-placeholder="Start writing your content..."
        onMouseDown={(e) => e.stopPropagation()}
        onClick={() => ref.current?.focus()}
      />
    </div>
  );
}