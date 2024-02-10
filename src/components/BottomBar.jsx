import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const BottomBar = () => {
    const bottomBar = [
        {
            name: "Project store",
            src: "appStore.svg",
            routes: "/project"
        },
        {
            name: "Contact me",
            src: "contact.svg",
            routes: "/contact"
        },
        {
            name: "Terminal",
            src: "terminal.svg",
            routes: "/terminal"
        },
        {
            name: "About me",
            src: "aboutlogo.svg",
            routes: "/about"
        },
        {
            name: "Tech Stack",
            src: "sheets.svg",
            routes: "/techStack"
        },
        {
            name: "My Publication",
            src: "books.svg",
            routes: "/publication"
        }
    ];

    const [hover, setHover] = useState("");

    const onHover = (hoverState) => {
        setHover(hoverState);
    };

    const onLeave = () => {
        setHover('');
    };


    return (
        <div className={`"w-full h-auto"`}>
            <div className="pb-4 absolute bottom-0 w-max m-auto left-0 right-0">
                <div className="flex justify-evenly items-center p-2.5 rounded-2xl" style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}>
                    {
                        bottomBar.map(items => (
                            <NavLink key={items.name} to={items.routes} className="relative w-16 rounded-2xl hover:bg-white/25 p-1.5" onMouseEnter={() => onHover(items.name)} onMouseLeave={onLeave}>
                                {hover === items.name && <span className="absolute bg-black text-white -top-8 left-0 right-0 m-auto w-fit p-1 text-xs w-max rounded-2xl bg-slate-800 text-slate-200">{items.name}</span>}
                                <img src={items.src} alt="" className="" />
                                <span className={`absolute w-1.5 h-1.5 rounded-full bg-slate-200 -bottom-1 left-1/2 transform -translate-x-1/2 hidden`}></span>
                            </NavLink>
                        ))
                    }
                    <div className="w-1 h-8 rounded-full bg-white/50 mx-1"></div>
                    <Link to='/allApp' className="relative w-16 rounded-2xl hover:bg-white/25 p-1.5" >
                        <img src="allApp.svg" alt="" className="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
