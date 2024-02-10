import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { maximizeAction } from "../store/maximizeSlice";

const Publication = () => {
    const [maximize, setMaximize] = useState(false);
    const dispatch = useDispatch();
    return <>
        <div className={`${!maximize ? "w-3/5 h-3/4 absolute " : "w-full h-[96%]"} left-0 right-0 top-0 bottom-0 m-auto flex flex-col shadow-2xl`}>
            <div className="w-full flex bg-slate-50 dark:bg-[#3b3b3bcf] rounded-t-lg shadow-2xl p-2">
                <div className="flex justify-start pt-2 pl-2">
                    <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onClick={() => { setMaximize(!maximize); dispatch(maximizeAction.toggleMaximize()); }} />
                </div>
                <div className="text-black dark:text-white w-full text-center">Blogs and Publications</div>
            </div>
            <div className="flex flex-col items-center w-full h-full bg-neutral-200 dark:bg-[#242424] rounded-b-lg p-2 overflow-auto ">
                <div className="flex p-2 w-full justify-evenly flex-wrap ">
                    <div className="text-black dark:text-white w-full ">
                        Blogs
                        <div className="flex w-full ">
                            <Link to="https://medium.com/@pranjalbajpai400/a-linux-categorically-the-best-os-99e0d0b0445f" target="_blank" className="flex flex-col items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 ">
                                <img className="w-24 h-28 bg-white rounded-md" src="medium.svg" alt="" />
                                <span className="text-black dark:text-white">Linux: Categorically the best OS</span>
                            </Link>
                        </div>
                    </div>

                    <div className="text-black dark:text-white w-full">
                        Still Writting
                        <div className="flex w-full">
                            <Link className="flex flex-col justify-center items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-36 mx-2">
                                <div className="border border-zinc-700 shadow rounded-md p-2 w-11/12">
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
                            <Link className="flex flex-col justify-center items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-36 mx-2">
                                <div className="border border-zinc-700 shadow rounded-md p-2 w-11/12">
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
                            <Link className="flex flex-col justify-center items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-36 mx-2">
                                <div className="border border-zinc-700 shadow rounded-md p-2 w-11/12">
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
                            <Link className="flex flex-col justify-center items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-36 mx-2">
                                <div className="border border-zinc-700 shadow rounded-md p-2 w-11/12">
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
                            <Link className="flex flex-col justify-center items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-36 mx-2">
                                <div className="border border-zinc-700 shadow rounded-md p-2 w-11/12">
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
        </div >


    </>
}
export default Publication;