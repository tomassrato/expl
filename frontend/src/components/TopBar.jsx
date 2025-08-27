import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { PowerOff } from "lucide-react";

function TopBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); 
    navigate("/");                    
  };

  return (
    <div className="font-semibold text-black dark:text-white text-[17px] fixed top-0 left-0 w-full h-[70px] z-50 flex items-center bg-gray-200 dark:bg-gray-950 border-b border-yellow-400 dark:border-purple-600 px-[12px]">
      <div
        onClick={handleLogout}
        className="mr-[12px] dark:bg-red-600 transition-colors duration-200 hover:bg-red-400 bg-red-300 flex items-center p-2 border-2 border-red-400 rounded-full cursor-pointer dark:border-red-500 dark:hover:bg-red-500 text-black hover:text-gray-900 dark:text-white dark:hover:text-gray-100"
      >
        <PowerOff size={30} />
      </div>

      <span className="h-[50px] w-[1px] bg-black dark:bg-white"></span>

      <a
        href="/unidadescurriculares"
        className="dark:hover:bg-purple-600 hover:bg-yellow-300 h-[70px] transition-colors duration-200 cursor-pointer flex items-center justify-center px-[10px]"
      >
        <span className="block break-words text-center px-2">
          Unidades Curriculares
        </span>
      </a>

      <span className="h-[50px] w-[1px] bg-black dark:bg-white"></span>

      <a
        href="/ferramentas"
        className="dark:hover:bg-purple-600 hover:bg-yellow-300 h-[70px] transition-colors duration-200 cursor-pointer flex items-center justify-center px-[10px]"
      >
        <span className="block break-words text-center px-2">
          Ferramentas
        </span>
      </a>

      <DarkModeToggle className="ml-auto" />
    </div>
  );
}

export default TopBar;
