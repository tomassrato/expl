import { Pi } from "lucide-react";
import TopBar from "../components/TopBar";

  function UnidadesCurriculares() {
    return (
      <div>
          <TopBar />  
          <div className="mx-[20px] transition-colors flex-1 mt-[90px] relative z-0">
              <div className="dark:text-white text-black">
                  <div className="grid gap-[15px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      <a href="/unidadescurriculares/am2" className="min-w-[300px] w-full bg-gray-100 dark:bg-gray-950 p-4 rounded-[20px] border-yellow-400 dark:border-purple-600 border flex flex-col justify-center items-center hover:bg-yellow-300 dark:hover:bg-purple-600 cursor-pointer">
                          <p className="text-[26px] font-bold mb-[20px]">Análise Matemática 2</p>
                          <Pi size={200} />
                      </a>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  export default UnidadesCurriculares;
