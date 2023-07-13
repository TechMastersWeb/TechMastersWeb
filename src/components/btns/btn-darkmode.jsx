import { useState, useEffect } from "react";
function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      className={`px-4 py-2 rounded-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <i class="bx bx-sun"></i> : <i class="bx bx-moon"></i>}
    </button>
  );
}

export default DarkModeButton;
