import { createContext, useContext, useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: "dark";
  setTheme: () => void;
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement;

    // Fuerza dark mode siempre
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  const value = {
    theme: "dark" as const,
    setTheme: () => null,
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={value}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider",
    );
  }

  return context;
}