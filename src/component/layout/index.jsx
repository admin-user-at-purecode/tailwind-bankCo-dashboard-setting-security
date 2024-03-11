import Sidebar from "./sidebar/index";
import SidebarV2 from "./sidebar/SidebarV2";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import { useState } from "react";
import { createContext } from "react";
import Settings from "../../pages/settings/index.jsx";

export const ThemeContext = createContext("");

function Layout() {
    const [sidebar, setSidebar] = useState(true);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "" || localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : ""
    );

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div
                className={`layout-wrapper ${
                    sidebar && "active"
                }  w-full dark:bg-darkblack-600 `}
                style={{
                    borderColor: "#2a313c",
                }}
            >
                <div className="relative flex w-full">
                    <Sidebar handleActive={() => setSidebar(!sidebar)} />
                    <SidebarV2 />
                    <div
                        className={`body-wrapper flex-1 overflow-x-hidden`}
                    >
                        <HeaderOne handleSidebar={() => setSidebar(!sidebar)} />
                        <HeaderTwo handleSidebar={() => setSidebar(!sidebar)} />
                        <Settings/>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default Layout;