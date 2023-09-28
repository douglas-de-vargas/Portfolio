"use client";
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define um tipo para o contexto
type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" && localStorage.getItem("theme") !== "dark"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    const removeOldTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useTheme deve ser usado dentro de um ThemeContextProvider"
    );
  }
  return context;
}