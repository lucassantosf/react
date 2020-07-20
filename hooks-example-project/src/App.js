import React, { useState } from "react";

function App() {
  const [tech, setTech] = useState(["React", "Js", "Php"]);
  const [newTech, setNewTech] = useState("");
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech("");
  }
  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        onChange={(e) => setNewTech(e.target.value)}
        type="text"
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
