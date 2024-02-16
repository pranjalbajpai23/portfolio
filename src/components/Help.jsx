/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";


const Help = ({ open, isOpen }) => {
    const helpRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (helpRef.current && !helpRef.current.contains(event.target)) {
                isOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [helpRef,isOpen]);

    if (!open) {
        return <></>
    }
    return <>
        <div ref={helpRef} className=" absolute top-10 right-24  m-auto flex flex-col shadow-2xl bg-neutral-200/75 dark:bg-[#242424]/75 rounded-lg p-2">
            <div className="w-full h-full  p-2  text-justify flex flex-col text-black dark:text-white">
                <span> <b>Hint 1</b> Try clicking Icons</span>
                <span> <b>Hint 2</b> Try using the top bar</span>
                <span><i>feeling bored ? </i> Try using Terminal</span>
            </div>
        </div>
    </>
}
export default Help;