import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { maximizeAction } from "../store/maximizeSlice";
import Draggable from "react-draggable";
const Techstack = () => {
    const [maximize, setMaximize] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [state, setState] = useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: 0, y: 0
        }
    });

    const onStop = () => {
        setState({ ...state, activeDrags: --state.activeDrags });
    };

    const onControlledDrag = (e, position) => {
        const { x } = position;
        setState({ ...state, controlledPosition: { x, y: state.controlledPosition.y } });
    };

    const onControlledDragStop = (e, position) => {
        onControlledDrag(e, position);
        onStop();
    };
    const { controlledPosition } = state;
    const maximizing = () => {
        setMaximize(!maximize);
        setState({ ...state, controlledPosition: { x: 0, y: 0 } });
        dispatch(maximizeAction.toggleMaximize());
    }
    return <>
        <Draggable axis="y" bounds="parent" handle=".handle" onDrag={onControlledDrag} position={controlledPosition} onStop={onControlledDragStop}>
            <div className={`${!maximize ? "w-3/5 h-4/5 max-md:w-9/12" : "w-full h-5/6"} flex flex-col shadow-2xl `} >
                <div className="w-full flex bg-slate-50 dark:bg-[#3b3b3bcf]  rounded-t-lg shadow-2xl p-2 handle">
                    <div className="flex justify-start pt-2 pl-2">
                        <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" onTouchStart={() => (navigate('/'))} />
                        <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                        <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onTouchStart={maximizing} onClick={maximizing} />
                    </div>
                    <div className="text-black dark:text-white w-full text-center">Tech Stack</div>
                </div>
                <div className="flex flex-col items-center w-full h-full bg-neutral-200 dark:bg-[#242424] rounded-b-lg p-2 overflow-auto ">
                    <div className="flex p-2 w-full justify-evenly flex-wrap justify-center">
                        <div className="text-black dark:text-white w-full max-md:flex-wrap">
                            Framework & Libraries
                            <div className="flex w-full flex-wrap">
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 ">
                                    <img className="w-24 h-28" src="react.svg" alt="" />
                                    <span className="text-black dark:text-white">React Js</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28 bg-slate-400" src="nodejs.svg" alt="" />
                                    <span className="text-black dark:text-white">Node Js</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28 bg-slate-400" src="express.svg" alt="" />
                                    <span className="text-black dark:text-white">Express Js</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="redux.svg" alt="" />
                                    <span className="text-black dark:text-white">React Redux</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="bootstrap.svg" alt="" />
                                    <span className="text-black dark:text-white">Bootstrap</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="tailWind.svg" alt="" />
                                    <span className="text-black dark:text-white">Tailwind CSS</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-black dark:text-white w-full flex-wrap ">
                            Languages
                            <div className="flex w-full flex-wrap">
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="cpp.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">C++</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="javaScript.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">Javascript</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="html.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">HTML</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="css.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">CSS</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-black dark:text-white w-full flex-wrap">
                            Tools & Technologies
                            <div className="flex w-full flex-wrap">
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="linux.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">Linux</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="git.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">Git</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48">
                                    <img className="w-24 h-28" src="postman.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">Postman</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-black dark:text-white w-full flex-wrap">
                            Learning...
                            <div className="flex w-full flex-wrap">
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50 p-2 m-2 w-36 h-48 w-36 h-48">
                                    <img className="w-24 h-28" src="nextjs.svg" alt="" />
                                    <span className="text-black dark:text-white w-24 text-center">Next Js</span>
                                </Link>
                                <Link className="flex flex-col justify-evenly justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-48 m-2">
                                    <div className="border border-zinc-700 shadow rounded-md p-2 w-11/12">
                                        <div className="animate-pulse flex flex-col justify-evenly space-x-4">
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
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-48 m-2">
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
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-48 m-2">
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
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-48 m-2">
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
                                <Link className="flex flex-col justify-evenly items-center border border-black shadow-xl bg-neutral-300 dark:bg-zinc-700/50  w-36 h-48 m-2">
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

        </Draggable>
    </>
}
export default Techstack;