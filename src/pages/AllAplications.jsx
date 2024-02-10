import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { maximizeAction } from "../store/maximizeSlice";

const AllAplications = () => {
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
                <div className="dark:text-white w-full text-center">All Applications</div>
            </div>
            <div className="flex flex-col items-center w-full h-full bg-slate-300 dark:bg-[#242424] rounded-b-lg p-2 overflow-auto ">
                <img className="w-2/5 animate-pulse pt-4" src="construction.svg" alt="" />
                <span className="dark:text-white pt-6 animate-pulse">Still Working on it.......</span>
            </div>
        </div >


    </>
}
export default AllAplications;