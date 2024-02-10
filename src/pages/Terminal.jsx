import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { maximizeAction } from "../store/maximizeSlice";
const Terminal = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const inputRef = useRef();
    const outputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const [maximize, setMaximize] = useState(false);
    const dispatch = useDispatch();


    return <>
        <div className={`${!maximize ? "w-3/5 h-3/4 absolute " : "w-full h-[96%]"} left-0 right-0 top-0 bottom-0 m-auto flex flex-col shadow-2xl`} >
            <div className="w-full flex bg-[#3b3b3bcf] rounded-t-lg shadow-2xl p-2">
                <div className="flex justify-start pt-2 pl-2">
                    <Link to='/' className="w-3 h-3 rounded-full bg-[#e9524a] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#f1ae1b] mr-1.5" />
                    <Link className="w-3 h-3 rounded-full bg-[#59c837] mr-1.5" onClick={() => { setMaximize(!maximize); dispatch(maximizeAction.toggleMaximize()); }} />
                </div>
                <div className="text-white w-full text-center">Terminal</div>
            </div>
            <div
                className="flex flex-col w-full h-full bg-[#242424] rounded-b-lg p-2 overflow-auto whitespace-pre-line overflow-auto"
                onClick={() => inputRef.current.focus()}
            >
                <div className="text-lime-600 flex flex-col"> <span className="mx-2"> list of available commands:</span>
                    <span className="mx-2 ">ls <span className="text-white">- List&apos;s the names of files and directories </span></span>
                    <span className="mx-2 ">pwd <span className="text-white">- Prints&apos;s working directory </span></span>
                    <span className="mx-2 ">whoami <span className="text-white">- It displays the username of the current user </span></span>
                    <span className="mx-2 ">clear <span className="text-white">- clears terminal </span> </span>
                </div>
                <div ref={outputRef} className="text-white px-2">{output}</div>
                <div className="flex items-center">
                    <span className="text-white px-2 whitespace-pre-line history"><span className="text-lime-600">friday@friday-B450M-H</span><span className="text-white">:</span><span className="text-blue-700"> ~$</span> </span>
                    <input
                        style={{ outline: 'none' }}
                        className="border-none shadow-none outline-none bg-transparent text-white"
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                let newOutput = "";
                                newOutput = " " + output + "\n" + "friday@friday-B450M-H:~$ " + input + "\n";
                                switch (input) {
                                    case "ls":
                                        newOutput += "ProjectStore ContactMe AboutMe Techstack Publications";
                                        break;
                                    case "pwd":
                                        newOutput += "/ you are on root directory";
                                        break;
                                    case "whoami":
                                        newOutput += "This Portfolio OS belongs to Pranjal Bajpai, you are logged in as Guest User";
                                        break;
                                    case "clear":
                                        outputRef.current.innerText = "";
                                        newOutput = "";
                                        break;
                                    default:
                                        newOutput += "Command not found, you can write my superuser to add it.";
                                        break;
                                }
                                setOutput(newOutput);
                                setInput("");
                            }
                        }}
                    />



                </div>

            </div>

        </div >


    </>
}
export default Terminal;