import ChatGPT from "../assets/chatgpt.png"
import MathGPT from "../assets/mathgpt.png"
import IntegralCalculator from "../assets/integralcalculator.png"
import Demos2DGraph from "../assets/desmos2dgraph.png"
import Demos3DGraph from "../assets/desmos3dgraph.png"

import TopBar from "../components/TopBar.jsx"

function Ferramentas () {
    return (
        <div>
            <TopBar />
            <div className="mx-[20px] transition-colors relative z-0 flex-1 mt-[90px]">
                <div className="dark:text-white text-black">
                    <div className="grid gap-[15px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <div to="/" className="min-w-[300px] w-full bg-gray-100 dark:bg-gray-950 p-4 rounded-[20px] border-yellow-400 dark:border-purple-600 border flex flex-col justify-center items-center hover:bg-yellow-300 dark:hover:bg-purple-600 cursor-pointer" onClick={() => window.open("https://chatgpt.com")}>
                            <p className="text-[26px] font-bold mb-[20px]">ChatGPT</p>
                            <img src={ChatGPT} alt="ChatGPT" className="w-[200px] h-[200px] object-contain mb-[20px] dark:invert" />
                        </div>
                        <div to="/" className="min-w-[300px] w-full bg-gray-100 dark:bg-gray-950 p-4 rounded-[20px] border-yellow-400 dark:border-purple-600 border flex flex-col justify-center items-center hover:bg-yellow-300 dark:hover:bg-purple-600 cursor-pointer" onClick={() => window.open("https://math-gpt.org/")}>
                            <p className="text-[26px] font-bold mb-[20px]">MathGPT</p>
                            <img src={MathGPT} alt="MathGPT" className="w-[200px] h-[200px] mb-[20px] object-contain" />
                        </div>
                        <div to="/" className="min-w-[300px] w-full bg-gray-100 dark:bg-gray-950 p-4 rounded-[20px] border-yellow-400 dark:border-purple-600 border flex flex-col justify-center items-center hover:bg-yellow-300 dark:hover:bg-purple-600 cursor-pointer" onClick={() => window.open("https://www.integral-calculator.com/")}>
                            <p className="text-[26px] font-bold mb-[20px]">Integral Calculator</p>
                            <img src={IntegralCalculator} alt="Integral Calculator" className="w-[200px] h-[200px] mb-[20px] object-contain" />
                        </div>
                        <div to="/" className="min-w-[300px] w-full bg-gray-100 dark:bg-gray-950 p-4 rounded-[20px] border-yellow-400 dark:border-purple-600 border flex flex-col justify-center items-center hover:bg-yellow-300 dark:hover:bg-purple-600 cursor-pointer" onClick={() => window.open("https://www.desmos.com/calculator")}>
                            <p className="text-[26px] font-bold mb-[20px]">Desmos 2D Graph</p>
                            <img src={Demos2DGraph} alt="Desmos 2D Graph" className="w-[200px] h-[200px] mb-[20px] object-contain" />
                        </div>
                        <div to="/" className="min-w-[300px] w-full bg-gray-100 dark:bg-gray-950 p-4 rounded-[20px] border-yellow-400 dark:border-purple-600 border flex flex-col justify-center items-center hover:bg-yellow-300 dark:hover:bg-purple-600 cursor-pointer" onClick={() => window.open("https://www.desmos.com/3d")}>
                            <p className="text-[26px] font-bold mb-[20px]">Desmos 3D Graph</p>
                            <img src={Demos3DGraph} alt="Desmos 3D Graph" className="w-[200px] h-[200px] mb-[20px] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ferramentas;