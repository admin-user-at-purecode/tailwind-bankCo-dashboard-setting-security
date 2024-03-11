import logo from "../../../assets/images/logo/logo-short.svg";
import logoW from "../../../assets/images/logo/logo-short-white.svg";
import { Svg } from "./index";

const menuItems = [
    "Dashboard Default",
    "Dashboard two",
    "Statistics",
    "Analytics",
    "Landing page",
];

const items = Array.from({ length: 7 });

function Enhance() {
    return (
        <li className="item px-[43px] py-[11px]">
            <a href="#">
                <Svg />
            </a>
        </li>
    );
}

function SidebarV2() {
    return (
        <aside className="relative hidden w-[96px] bg-white  dark:bg-darkblack-600 sm:block">
            <div className="sidebar-wrapper-collapse relative top-0 z-30 w-full">
                <div className="sidebar-header sticky top-0 z-20 flex h-[108px] w-full items-center justify-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] bg-white dark:border-darkblack-500 dark:bg-darkblack-600">
                    <a href="#">
                        <img
                            src={logo}
                            className="block dark:hidden"
                            alt="logo"
                        />
                        <img
                            src={logoW}
                            className="hidden dark:block"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="sidebar-body w-full pt-[14px]">
                    <div className="flex flex-col items-center">
                        <div className="nav-wrapper mb-[36px]">
                            <div className="item-wrapper mb-5">
                                <ul className="mt-2.5 flex flex-col items-center justify-center">
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                        <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">
                                            {menuItems.map((item, index) => (
                                                <li key={index}>
                                                    <a
                                                        href="#"
                                                        className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800`}
                                                    >
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    {items.map((each, index) => (
                                        <Enhance key={index} />
                                    ))}

                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-wrapper mb-5">
                                <ul className="mt-2.5 flex flex-col items-center justify-center">
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                    <li className="item px-[43px] py-[11px]">
                                        <a href="#">
                                            <Svg />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="upgrade-wrapper">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-success-300">
                                <span>
                                    <Svg />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SidebarV2;