import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { maximizeAction } from "../store/maximizeSlice";
import Draggable from "react-draggable";
const AllAplications = () => {
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
                <div className="w-full flex bg-slate-50 dark:bg-[#3b3b3bcf] rounded-t-lg shadow-2xl p-2 handle">
                    <div className="flex justify-start pt-2 pl-2">
                        <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" onTouchStart={() => (navigate('/'))} />
                        <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                        <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onTouchStart={maximizing} onClick={maximizing} />
                    </div>
                    <div className="dark:text-white w-full text-center">All Applications</div>
                </div>
                <div className="flex flex-col items-center w-full h-full bg-slate-300 dark:bg-[#242424] rounded-b-lg p-2 overflow-auto ">
                    <img className="w-2/5 animate-pulse pt-4" src="construction.svg" alt="" />
                    <span className="dark:text-white pt-6 animate-pulse">Still Working on it.......</span>
                </div>
            </div >

        </Draggable>
    </>
}
export default AllAplications;