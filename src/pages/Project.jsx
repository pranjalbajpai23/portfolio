import { useState } from "react";
import { Link } from "react-router-dom";
import { maximizeAction } from "../store/maximizeSlice";
import { useDispatch } from "react-redux";

const Project = () => {
    const [maximize, setMaximize] = useState(false);
    const dispatch = useDispatch();
    return <>
        <div className={`${!maximize ? "w-3/5 h-3/4 absolute " : "w-full h-[96%]"} left-0 right-0 top-0 bottom-0 m-auto flex flex-col shadow-2xl`} >
            <div className="w-full flex bg-slate-50 dark:bg-[#3b3b3bcf] rounded-t-lg shadow-2xl p-2">
                <div className="flex justify-start pt-2 pl-2">
                    <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onClick={() => { setMaximize(!maximize); dispatch(maximizeAction.toggleMaximize()); }} />
                </div>
                <div className="text-black dark:text-white w-full text-center p-1">Project Store</div>
                <Link to='https://github.com/pranjalbajpai23' target="_blank" rel="noreferrence" className="p-1 rounded flex items-center justify-center inline-block">
                    <img className="w-5 h-5 mx-1" src="git.svg" alt="github" />
                    <span className="inline-block text-black dark:text-white mx-1">GitHub</span>
                </Link>
            </div>
            <div className="flex flex-col items-center w-full h-full bg-white dark:bg-[#242424] rounded-b-lg p-2 overflow-auto ">
                <Link to='https://github.com/pranjalbajpai23/whatsAmail' target="_blank" rel="noreferrence" className="flex justify-center bg-white dark:bg-zinc-700/50 w-8/12"><img className="w-8/12" src="projectHeadImg.svg" alt="" /> </Link>
                <div className="flex p-2 w-full justify-evenly flex-wrap ">

                    {/* <Link className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="faceSketchMaker.svg" alt="" />
                        <span className="text-black dark:text-white">Face Sketch Maker</span>
                    </Link>*/}
                    <Link to="https://github.com/pranjalbajpai23/E-commerce" target="_blank" rel="noreferrence" className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="eCommerce.svg" alt="" />
                        <span className="text-black dark:text-white">E-Commerce</span>
                    </Link>

                    <Link to="https://mysplash.netlify.app/" target="_blank" rel="noreferrence" className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="mysplash.svg" alt="" />
                        <span className="text-black dark:text-white">My Splash</span>
                    </Link>

                    <Link to="https://github.com/pranjalbajpai23/Recommend-IT" target="_blank" rel="noreferrence" className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="recommendIT.svg" alt="" />
                        <span className="text-black dark:text-white">Trendy Mart</span>
                    </Link>
                    <Link to="https://pranjalbajpai23.github.io/RockPaperScissor/" target="_blank" rel="noreferrence" className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="rockPaperScissior.svg" alt="" />
                        <span className="text-black dark:text-white w-24 text-center">Rock Paper Scissors</span>
                    </Link>
                    <Link to="https://github.com/pranjalbajpai23/Simon-Game" target="_blank" rel="noreferrence" className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="simionGame.svg" alt="" />
                        <span className="text-black dark:text-white w-24 text-center">Simion Game</span>
                    </Link>
                    <Link to="https://github.com/pranjalbajpai23/Bank-Management-System" target="_blank" rel="noreferrence" className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                        <img className="w-24 h-28" src="bankManagementSystem.svg" alt="" />
                        <span className="text-black dark:text-white w-24 text-center">Bank Management System</span>
                    </Link>
                    <div className="flex flex-wrap">
                        <Link className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                            <div className="border border-zinc-700 shadow rounded-md p-2 m-2">
                                <div className="animate-pulse flex flex-col space-x-4">
                                    <div className="rounded bg-slate-700 h-10 w-10"></div>
                                    <div className="flex  space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                            <div className="border border-zinc-700 shadow rounded-md p-2 m-2">
                                <div className="animate-pulse flex flex-col space-x-4">
                                    <div className="rounded bg-slate-700 h-10 w-10"></div>
                                    <div className="flex  space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                            <div className="border border-zinc-700 shadow rounded-md p-2 m-2">
                                <div className="animate-pulse flex flex-col space-x-4">
                                    <div className="rounded bg-slate-700 h-10 w-10"></div>
                                    <div className="flex  space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                            <div className="border border-zinc-700 shadow rounded-md p-2 m-2">
                                <div className="animate-pulse flex flex-col space-x-4">
                                    <div className="rounded bg-slate-700 h-10 w-10"></div>
                                    <div className="flex  space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link className="flex flex-col items-center border border-black shadow-xl bg-slate-100 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 text-center">
                            <div className="border border-zinc-700 shadow rounded-md p-2 m-2">
                                <div className="animate-pulse flex flex-col space-x-4">
                                    <div className="rounded bg-slate-700 h-10 w-10"></div>
                                    <div className="flex  space-y-6 py-1">
                                        <div className="h-2 bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        </div>

    </>
}
export default Project;
