import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shutdownAction } from "../store/shutdownSlice";
import { themeAction } from "../store/themeSlice";

const Navbar = () => {
    const locale = 'en';
    const theme = useSelector(state => state.theme);
    const [today, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const options = { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = today.toLocaleString(locale, options).replace(/,/g, '');

    const handleOpen = () => {
        setOpen(!open);
    };
    const [wifi, setWifi] = useState(false);
    const handleDropDwn = (name) => {
        if (name == "shutdown") {
            dispatch(shutdownAction.toggleShutdown());
            setOpen(false)
        }
        else if (name == "wifi") {
            setWifi(!wifi);
        }
        else if (name == "dark") {
            dispatch(themeAction.toggleTheme());
        }

    }
    return (
        <div className="flex items-center w-full justify-between pt-1.5 px-1 md:px-4">
            <div className="w-1/12 pl-2">
                <img src="logo.svg" alt="" className="w-4" />
            </div>
            <div className="text-white  hover:bg-[#242424] px-2 rounded-md"><span className="text-sm">{formattedDate}</span></div>
            <button className="flex w-1/12 justify-evenly rounded-md hover:bg-slate-400 p-1" onClick={handleOpen}>
                <img className="w-4 h-4  mx-1" src={"darkModeWhite.svg"} alt="" />
                <img className="w-4 h-4  mx-1" src={"wifiWhite.svg"} alt="" />
                <img className="w-6" src="sound.svg" alt="" />
                <img className="w-4" src="shutdownWhite.svg" alt="" />
            </button>
            {open ? (
                <ul ref={dropdownRef} className={`absolute w-48 bg-white p-2 top-10 right-2 flex flex-col items-center  text-center rounded-md dark:bg-[#242424]`}>
                    <button className="w-full flex flex-row-reverse items-center justify-end hover:bg-blue-700 rounded" onClick={() => handleDropDwn("wifi")}>
                        <span className="text-back dark:text-white text-center  mx-1">{wifi ? "Pranjal" : "connect wifi"}</span>
                        <img className="w-4 h-4  mx-1" src={wifi ? (theme ? "wifiWhite.svg" : "wifi.svg") : (theme ? "wifiDisconnect.svg" : "wifiDisconnectDark.svg")} alt="" />
                    </button>
                    <button id="theme-toggle" className="w-full flex flex-row-reverse items-center justify-end hover:bg-blue-700 rounded" onClick={() => handleDropDwn("dark")}>
                        <span className="text-back dark:text-white text-center  mx-1">{theme ? "Dark Mode " : "Light Mode "} on</span>
                        <img className="w-4 h-4  mx-1" src={theme ? "darkModeWhite.svg" : "lightMode.svg"} alt="" />
                    </button>
                    <button className="w-full flex flex-row-reverse items-center justify-end hover:bg-blue-700 rounded" onClick={() => handleDropDwn("shutdown")}>
                        <span className="text-back dark:text-white  text-center  mx-1">shutdown</span>
                        <img className="w-4 h-4  mx-1" src={theme ? "shutdownWhite.svg" : "shutdownDark.svg"} alt="" />
                    </button>
                </ul>
            ) : null}

        </div>
    );
}

export default Navbar;
