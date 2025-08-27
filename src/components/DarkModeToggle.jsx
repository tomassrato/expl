import { useState, useLayoutEffect } from "react";
import { Sun, Moon } from "lucide-react";

function DarkModeToggle({ className = "" }) {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("darkMode") === "true"; 
    });

    useLayoutEffect(() => {
        if (isDark) {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", isDark);
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={`dark:bg-purple-600 transition-colors duration-200 hover:bg-yellow-400 bg-yellow-300 flex items-center p-2 border-2 border-yellow-400 rounded-full cursor-pointer dark:border-purple-500 dark:hover:bg-purple-500 text-black hover:text-gray-900 dark:text-white dark:hover:text-gray-100 ${className}`}     onClick={toggleDarkMode}>
            {isDark ? <Moon size={30} /> : <Sun size={30} />}
        </div>
    );
}

export default DarkModeToggle;
