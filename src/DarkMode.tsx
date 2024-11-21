import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //Efecto para cargar la preferencia de tema al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "true");
    }
  }, []);

  // Efecto para guardar la preferencia de tema cuando cambia
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={toggleTheme}
        className={`px-6 py-2 rounded ${
          isDarkMode ? "bg-yellow-500 text-gray-900" : "bg-gray-800 text-white"
        } hover:opacity-80`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
