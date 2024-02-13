import { Link, NavLink, useNavigate } from "react-router-dom";
import MyIntroduction from "../components/MyIntroduction";
import Summary from "../components/Summary";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { maximizeAction } from "../store/maximizeSlice";
import Draggable from "react-draggable";
const About = () => {
    const [isOpenAbout, setOpenAbout] = useState(false);
    const [isOpenSummay, setOpenSummary] = useState(false);
    const [maximize, setMaximize] = useState(false);
    const theme = useSelector(state => state.theme);
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

    const maximizing=()=>{
        setMaximize(!maximize); 
        setState({ ...state, controlledPosition: { x: 0, y: 0 } }); 
        dispatch(maximizeAction.toggleMaximize());
    }

    return <>
        <Draggable axis="y" bounds="parent" handle=".handle" onDrag={onControlledDrag} position={controlledPosition} onStop={onControlledDragStop}>
            <div className={`${!maximize ? "w-3/5 h-4/5 max-md:w-9/12" : "w-full h-5/6"}  flex shadow-2xl`}>
                <div className="w-60  bg-slate-50/75 dark:bg-[#3b3b3bcf] rounded-l-lg shadow-2xl handle">
                    <div className="flex  justify-start pt-2 pl-2 ">
                        <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" onTouchStart={() => (navigate('/'))} />
                        <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                        <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onTouchStart={maximizing} onClick={maximizing}/>
                    </div>
                    <div className="pt-8 max-md:hidden">
                        <NavLink className="flex items-center justify-start pl-4 mx-2 rounded bg-[#cdcdcdbf]/75"> <img className="w-5" src="aboutMe.svg" alt="" /><span className=" pl-2 text-sm font-normal text-white/75" > About</span></NavLink>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-[#242424] rounded-r-lg handle">
                    <div className="border-black border-b-2 py-1 ">
                        <div className="w-2/5 ml-8 rounded flex py-0.5  border-2 border-black items-center justify-between px-2 bg-slate-200 dark:bg-[#4a4b4aa6]">
                            <div className="flex items-center">
                                <img className="w-4 h-4 ml-1" src={theme ? "user.svg" : "user.png"} alt="" /> <span className="text-black dark:text-white ml-2 text-sm">About</span>
                            </div>
                            <img className="w-4 h-4" src="threeDots.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex p-2">
                        <button className="flex flex-col items-center px-2" onClick={() => setOpenAbout(true)}>
                            <img src={theme ? "aboutIcon.svg" : "aboutIconDark.svg"} className="w-16 h-16" alt="" />
                            <span className="text-black dark:text-white text-sm">me.md</span>
                        </button>
                        <MyIntroduction open={isOpenAbout} onClose={() => setOpenAbout(false)} />

                        <button className="flex flex-col items-center px-2" onClick={() => setOpenSummary(true)}>
                            <img src={theme ? "aboutIcon.svg" : "aboutIconDark.svg"} className="w-16 h-16" alt="" />
                            <span className="text-black dark:text-white text-sm">summary.md</span>
                        </button>
                        <Summary open={isOpenSummay} onClose={() => setOpenSummary(false)} />
                        <a href="https://drive.google.com/file/d/1IUYMRXO1jUKvMxEOl9DmxoWbbdf-wk8k/view?usp=sharing" target="_blank" rel="noreferrer" className="flex flex-col items-center px-2 ">
                            <img src="pdf.svg" className="w-16 h-16" alt="" />
                            <span className="text-black dark:text-white text-sm">resume.pdf</span>
                        </a>
                    </div>
                </div>
            </div>
        </Draggable>
    </>
}
export default About;