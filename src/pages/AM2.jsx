import ResumoPDF from "../PDF/AM2/Resumo/Resumo.pdf"

import Freq1_2223 from "../PDF/AM2/Freqs/1/Freqs/1freq_amii202223_Moodle.pdf"
import Freq2_2223 from "../PDF/AM2/Freqs/2/Freqs/2freq_amii202223_Moodle.pdf"
import Freq3_2223 from "../PDF/AM2/Freqs/3/Freqs/3freq_amii202223_Moodle.pdf"
import Freq1_2324 from "../PDF/AM2/Freqs/1/Freqs/1freq_amii202324_Moodle.pdf"
import Freq2_2324 from "../PDF/AM2/Freqs/2/Freqs/2freq_amii202324_Moodle.pdf"
import Freq3_2324 from "../PDF/AM2/Freqs/3/Freqs/3freq_amii202324_Moodle.pdf"
import Freq1_2425 from "../PDF/AM2/Freqs/1/Freqs/1freq_amii202425_Moodle.pdf"
import Freq2_2425 from "../PDF/AM2/Freqs/2/Freqs/2freq_amii202425_Moodle.pdf"
import Freq1_Extra from "../PDF/AM2/Freqs/1/Freqs/1freq_amiiextra.pdf"
import Freq2_Extra from "../PDF/AM2/Freqs/2/Freqs/2freq_amiiextra.pdf"
import Freq3_Extra from "../PDF/AM2/Freqs/3/Freqs/3freq_amiiextra.pdf"

import Res_Freq1_2223 from "../PDF/AM2/Freqs/1/Resol/res_1freq_amii202223_Moodle.pdf"
import Res_Freq2_2223 from "../PDF/AM2/Freqs/2/Resol/res_2freq_amii202223_Moodle.pdf"
import Res_Freq3_2223 from "../PDF/AM2/Freqs/3/Resol/res_3freq_amii202223_Moodle.pdf"
import Res_Freq1_2324 from "../PDF/AM2/Freqs/1/Resol/res_1freq_amii202324_Moodle.pdf"
import Res_Freq2_2324 from "../PDF/AM2/Freqs/2/Resol/res_2freq_amii202324_Moodle.pdf"
import Res_Freq3_2324 from "../PDF/AM2/Freqs/3/Resol/res_3freq_amii202324_Moodle.pdf"
import Res_Freq1_2425 from "../PDF/AM2/Freqs/1/Resol/res_1freq_amii202425_Moodle.pdf"
import Res_Freq2_2425 from "../PDF/AM2/Freqs/2/Resol/res_2freq_amii202425_Moodle.pdf"
import Res_Freq1_Extra from "../PDF/AM2/Freqs/1/Resol/res_1freq_amiiextra.pdf"
import Res_Freq2_Extra from "../PDF/AM2/Freqs/2/Resol/res_2freq_amiiextra.pdf"
import Res_Freq3_Extra from "../PDF/AM2/Freqs/3/Resol/res_3freq_amiiextra.pdf"

import Exame_2223 from "../PDF/AM2/Exames/Exames/exame_amii202223_Moodle.pdf"
import Exame_2324 from "../PDF/AM2/Exames/Exames/exame_amii202223_Moodle.pdf"
import Exame_Extra from "../PDF/AM2/Exames/Exames/exame_amiiextra.pdf"

import Res_Exame_2223 from "../PDF/AM2/Exames/Resol/res_exame_amii202223_Moodle.pdf"
import Res_Exame_2324 from "../PDF/AM2/Exames/Resol/res_exame_amii202223_Moodle.pdf"
import Res_Exame_Extra from "../PDF/AM2/Exames/Resol/res_exame_amiiextra.pdf"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import TopBar from "../components/TopBar.jsx"

function AM2 () {
    const [notification, setNotification] = useState("")

    const handleOpen = (file) => {
        if (file) {
            window.open(file, "_blank")
        } else {
            setNotification("O ficheiro não existe!")
            setTimeout(() => setNotification(""), 2000)
        }
    }

    return (
        <div>
            <TopBar />
            <div className="mx-[20px] transition-colors flex-1 mt-[90px]">

                <AnimatePresence>
                    {notification && (
                    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 0.4 }} className="fixed top-20 left-0 right-0 mx-auto w-max bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg z-5">
                        {notification}
                    </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="dark:text-white text-black">
                    <p className="text-[30px] ml-[20px] mb-[10px] font-bold">
                        Análise Matemática II
                    </p>
                    <div className="w-full bg-gray-100 dark:bg-gray-950 px-[15px] pt-[10px] pb-[20px] mb-[25px] rounded-[20px] border-yellow-400 dark:border-purple-600 border">
                        <div className="px-[50px] mb-[30px]">
                            <p className="text-[25px] text-center font-medium mb-[10px]">Resumos</p>
                            <a href={ResumoPDF} target="_blank" rel="noopener noreferrer" className="button-link">
                                Ver PDF
                            </a>
                        </div>
                        <div className="px-[50px] mb-[30px]">
                            <p className="text-[25px] text-center font-medium mb-[10px]">1ª Frequência</p>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq1_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 22/23
                                </a>
                                <a href={Res_Freq1_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 22/23
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq1_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 23/24
                                </a>
                                <a href={Res_Freq1_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 23/24
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq1_2425} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 24/25
                                </a>
                                <a href={Res_Freq1_2425} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 24/25
                                </a>
                            </div>
                            <div className="flex gap-x-[20px]">
                                <a href={Freq1_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - Extra
                                </a>
                                <a href={Res_Freq1_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - Extra
                                </a>
                            </div>
                        </div>
                        <div className="px-[50px] mb-[30px]">
                            <p className="text-[25px] text-center font-medium mb-[10px]">2ª Frequência</p>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq2_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 22/23
                                </a>
                                <a href={Res_Freq2_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 22/23
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq2_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 23/24
                                </a>
                                <a href={Res_Freq2_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 23/24
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq2_2425} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 24/25
                                </a>
                                <a href={Res_Freq2_2425} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 24/25
                                </a>
                            </div>
                            <div className="flex gap-x-[20px]">
                                <a href={Freq2_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - Extra
                                </a>
                                <a href={Res_Freq2_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - Extra
                                </a>
                            </div>
                        </div>
                        <div className="px-[50px] mb-[30px]">
                            <p className="text-[25px] text-center font-medium mb-[10px]">3ª Frequência</p>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq3_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 22/23
                                </a>
                                <a href={Res_Freq3_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 22/23
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Freq3_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - 23/24
                                </a>
                                <a href={Res_Freq3_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 23/24
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <button className="button-link" onClick={() => handleOpen(null)}>
                                    Frequência - 24/25
                                </button>
                                <button className="button-link" onClick={() => handleOpen(null)}>
                                    Resolução - 24/25
                                </button>
                            </div>
                            <div className="flex gap-x-[20px]">
                                <a href={Freq3_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Frequência - Extra
                                </a>
                                <a href={Res_Freq3_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - Extra
                                </a>
                            </div>
                        </div>
                        <div className="px-[50px] mb-[30px]">
                            <p className="text-[25px] text-center font-medium mb-[10px]">Exame de Época Normal</p>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Exame_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Exame - 22/23
                                </a>
                                <a href={Res_Exame_2223} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 22/23
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <a href={Exame_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Exame - 23/24
                                </a>
                                <a href={Res_Exame_2324} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - 23/24
                                </a>
                            </div>
                            <div className="flex gap-x-[20px] mb-[25px]">
                                <button className="button-link" onClick={() => handleOpen(null)}>
                                    Exame - 24/25
                                </button>
                                <button className="button-link" onClick={() => handleOpen(null)}>
                                    Resolução - 24/25
                                </button>
                            </div>
                            <div className="flex gap-x-[20px]">
                                <a href={Exame_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Exame - Extra
                                </a>
                                <a href={Res_Exame_Extra} target="_blank" rel="noopener noreferrer" className="button-link">
                                    Resolução - Extra
                                </a>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AM2;