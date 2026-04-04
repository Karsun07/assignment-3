import templates from "./templates";

export default function Sidebar({ loadTemplate }) {
  return (
    <div id="sidebarContainer">
      <h1>Pallets</h1>
      {Object.keys(templates).map((name) => (
        <button key={name} onClick={() => loadTemplate(templates[name])}>
          {name}
        </button>
      ))}
    </div>
  );
}