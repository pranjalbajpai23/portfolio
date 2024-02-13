import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { maximizeAction } from "../store/maximizeSlice";
import Draggable from "react-draggable";
const Contact = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date());
    const [showDelayed, setShowDelayed] = useState(false);
    const [maximize, setMaximize] = useState(false);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(() => {
        const timer = () => {
            setDate(new Date());
        }

        setTimeout(() => {
            setShowDelayed(true);
        }, 2000);

        setTimeout;
        return () => {
            clearInterval(timer);
        }


    }, []);

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

    const options = { hour: '2-digit', minute: '2-digit' };
    const formattedDate = today.toLocaleString(locale, options).replace(/,/g, '');

    return <>
        <Draggable axis="y" bounds="parent" handle=".handle" onDrag={onControlledDrag} position={controlledPosition} onStop={onControlledDragStop}>
            <div className={`${!maximize ? "w-3/5 h-4/5 max-md:w-9/12" : "w-full h-5/6"} flex flex-col shadow-2xl `} >
                <div className="w-full flex bg-slate-50 dark:bg-[#3b3b3bcf] rounded-t-lg shadow-2xl p-2 handle">
                    <div className="flex justify-start pt-2 pl-2 text-center">
                        <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" onTouchStart={() => (navigate('/'))} />
                        <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                        <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onTouchStart={() => { setMaximize(!maximize);setState({...state, controlledPosition:{x:0,y:0}}); dispatch(maximizeAction.toggleMaximize()); }} />
                    </div>
                    <div className="text-black dark:text-white w-full text-center">Let&apos;s Talk</div>
                </div>
                <div className="flex  w-full h-full bg-slate-300 dark:bg-[#3b3b3bcf] rounded-b-lg p-2 overflow-auto ">
                    <div className="max-md:hidden w-64 h-full bg-slate-200 dark:bg-[#3b3b3bcf] rounded shadow-2xl">
                        <div className="pt-8 flex justify-center ">
                            <NavLink className="flex items-center justify-start  mx-2 rounded bg-blue-500 dark:bg-[#cdcdcdbf]/75 p-1 px-4"> <img className="w-10 rounded-full" src="profile.jpg" alt="" /><span className=" pl-2 text-x font-normal text-black dark:text-white/75" >Pranjal Bajpai</span></NavLink>
                        </div>
                    </div>
                    <div className=" w-full h-full rounded " style={{ backgroundImage: theme ? "url(wpDark.jpg)" : "url(wpWhite.jpeg)" }}>
                        <div className="flex justify-between items-center bg-slate-300 dark:bg-zinc-800 px-2">
                            <div className="flex">
                                <img className="w-10 rounded-full" src="profile.jpg" alt="" />
                                <div className="flex flex-col">
                                    <span className=" pl-2 text-lg font-normal text-black dark:text-white">Pranjal Bajpai</span>
                                    <span className=" pl-2 text-xs font-normal text-black dark:text-white">{showDelayed ? `last seen today at ${formattedDate}` : "online"}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <button>
                                    <img className="w-4 h-4 mx-1" src={theme ? "search.svg" : "searchBlack.svg"} alt="" />
                                </button>
                                <button>
                                    <img className="w-4 h-4 mx-2" src={theme ? "threeDots.svg" : "threeDotsDark.svg"} alt="" />
                                </button>

                            </div>
                        </div>
                        <div className="flex flex-col justify-between h-[93%] items-start gap-2.5">
                            {
                                showDelayed ?
                                    <div className="flex flex-col  max-w-[320px] leading-1.5 p-4 border-gray-200 bg-green-900 dark:bg-gray-100 rounded-e-xl rounded-es-xl bg-gray-700 mx-2 mt-2">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse justify-between ">
                                            <span className="text-sm font-semibold dark:text-gray-900 text-white">Hey,</span>
                                            <span className="text-sm font-normal dark:text-gray-400 text-white">{formattedDate}</span>
                                        </div>
                                        <p className="text-sm font-normal py-2.5  text-gray-900 text-justify text-white dark:text-black">Welcome to my Portfolio OS! Let&apos;s connect beyond these pages. Find me on <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pranjalbajpai/" className="text-sky-500">LinkedIn </a>  for professional insights and collaborations, and on <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_pranjal__bajpai_/" className="text-sky-500">Instagram </a>   for a glimpse into my world. Reach out via <a target="_blank" rel="noreferrer" href="mailto:pranjalbajpai400@gmail.com" className="text-sky-500">email </a> to start a conversation. Looking forward to connecting! 🚀

                                        </p>
                                        <span className="text-sm font-normal text-gray-500 text-gray-400">Delivered</span>
                                    </div>
                                    :
                                    <div className="flex flex-col max-w-[320px] leading-1.5  border-gray-200 bg-slate-300 dark:bg-gray-100 rounded-e-xl rounded-es-xl bg-gray-700 mx-2 mt-2">
                                        <div className="w-20 h-2 rounded-full bg-slate-300 dark:bg-gray-100 animate-pulse p-2 text-black ">typing...</div>
                                        <div className="flex-1  py-1 w-16">
                                            <div className=" w-16 h-2  rounded "></div>
                                            <div className="">
                                                <div className="grid grid-cols-3 gap-4">

                                                </div>
                                                <div className="h-2  rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                            }

                            <div className="flex bg-slate-300 dark:bg-zinc-800 p-2 items-center rounded w-full">
                                <img className="w-1/12 h-4 fill-white " src={theme ? "plusWhite.svg" : "plus.svg"} alt="" />
                                <img className="w-1/12 h-4 fill-white " src={theme ? "emojiWhite.svg" : "emoji.svg"} alt="" />
                                <input className="w-10/12 rounded p-1 px-2 cursor-not-allowed" type="text" placeholder="you can't reply to this" disabled />
                                <button ><img className="w-6 mx-2" src={theme ? "sendWhite.svg" : "send.svg"} alt="" /></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Draggable>
    </>
}
export default Contact;