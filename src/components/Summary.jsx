import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Summary = ({ open, onClose }) => {
    if (!open) {
        return <></>
    }
    return <>
        <div className="w-3/5 h-3/4 absolute left-0 right-0 top-0 bottom-0 m-auto flex flex-col shadow-2xl">
            <div className="w-full  rounded-t-lg shadow-2xl p-2 bg-slate-50 dark:bg-[#3b3b3bcf]">
                <div className="flex  justify-start pt-2 pl-2">
                    <Link className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" onClick={onClose} />
                    <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" />
                </div>
            </div>
            <div className="w-full h-full bg-neutral-200 dark:bg-[#242424]  p-2  text-justify">
                <span className="text-black dark:text-white h-full text-justify p-2">
                    I am a final year student, pursuing B-Tech in the Field of I.T from Shri Ramswaroop Memorial College of Engineering and Management.
                    Technology excites me, and am always fascinated how fast it is revolutionizing the world. Skills that I have worked with include Data Structure and Algorithm (C++), Web Development (React.js, Node.js , MY SQL), Linux OS, and what I might lack I make up for with my determination to learn.
                </span>
            </div>
        </div>
    </>
}
export default Summary;