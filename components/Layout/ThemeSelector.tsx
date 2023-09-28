import { useState, useEffect } from "react";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState("lighte");

  useEffect(() => {
    document.documentElement.className = selectedTheme;
  }, [selectedTheme]);

  const themeChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedTheme(selectedOption);
  };

  return (
    <div className="flex items-center gap-1 px-3">
      <label htmlFor="themeSelect">Escolha um tema:</label>
      <select id="themeSelect" onChange={themeChange} value={selectedTheme}>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
        {/* Adicione outras opções de temas conforme necessário */}
      </select>
    </div>
  );
}
