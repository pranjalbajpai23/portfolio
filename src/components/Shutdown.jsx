import { useDispatch } from "react-redux"
import { shutdownAction } from "../store/shutdownSlice";
import { useState } from "react";
const Shutdown = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleShutDown = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
            dispatch(shutdownAction.toggleShutdown());
        }, 5000);
    }
    return <>
        {
            show ? <div className="w-dvw h-dvh bg-black flex items-center justify-center cursor-pointer">
                <img src="Hello2.gif" alt="hellogif " />
            </div>
                : <div className="w-dvw h-dvh bg-black flex items-center justify-center cursor-pointer" onClick={() => handleShutDown()}>
                    <div className="text-white animate-pulse font-sans text-2xl flex flex-col items-center ">Click to wake up
                        <img className="w-28 h-28 " src="tap.svg" alt="" />
                        <span className="text-base">
                            For best user experience, please ensure to maximize the screen by pressing the F11 key.
                        </span>
                        <span className="text-sm">
                            (*This website is desktop-only. For the best experience, switch to desktop mode on your phone or to a larger screen.)
                        </span>
                    </div>
                </div>
        }


    </>
}
export default Shutdown;