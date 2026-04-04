import { useRef } from "react";

export default function Content({ size, onRef }) {
  const ref = useRef(null);

  // Expose ref to parent
  if (onRef) onRef(ref);

  return (
    <div id="contentContainer" style={{ padding: "20px" }}>
      <div
        id="editor"
        ref={ref}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="editorArea"
        style={{ fontSize: `${size}px` }}
        data-placeholder="Start writing your content..."
      />
    </div>
  );
}