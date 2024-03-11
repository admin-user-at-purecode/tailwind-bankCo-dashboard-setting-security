import logo from "../../../assets/images/logo/logo-color.svg";
import logoW from "../../../assets/images/logo/logo-white.svg";
import profileImg from "../../../assets/images/avatar/profile-xs.png";
import { useState } from "react";

export function Svg() {
    return (
        <span className="item-ico">
            <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="path-1"
                    d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                    fill="#1A202C"
                />
                <path
                    className="path-2"
                    d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                    fill="#22C55E"
                />
            </svg>
        </span>
    );
}

function ListItem({ text }) {
    return (
        <li className={`item py-[11px] text-bgray-900 dark:text-white`}>
            <a href="#">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                        <Svg />
                        <span className="item-text text-lg font-medium leading-none">
                            {text}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
}

const menuItems = [
    "Dashboard Default",
    "Dashboard Two",
    "Statistics",
    "Analytics",
    "Landing Page",
];

function Sidebar({ handleActive }) {
    const [activeDashboard, setActiveDashboard] = useState(false);
    return (
        <aside className="sidebar-wrapper fixed top-0 z-30 block h-full w-[308px] bg-white dark:bg-darkblack-600 sm:hidden xl:block">
            <div className="sidebar-header relative z-30 flex h-[108px] w-full items-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] pl-[50px] dark:border-darkblack-400">
                <a href="#">
                    <img src={logo} className="block dark:hidden" alt="logo" />
                    <img src={logoW} className="hidden dark:block" alt="logo" />
                </a>
                <button
                    aria-label="none"
                    type="button"
                    onClick={handleActive}
                    className="drawer-btn absolute right-0 top-auto"
                    title="Ctrl+b"
                >
                    <span>
                        <svg
                            width="16"
                            height="40"
                            viewBox="0 0 16 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                                fill="#22C55E"
                            />
                            <path
                                d="M10 15L6 20.0049L10 25.0098"
                                stroke="#ffffff"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="sidebar-body overflow-style-none relative z-30 h-screen w-full overflow-y-scroll pb-[200px] pl-[48px] pt-[14px]">
                <div className="nav-wrapper mb-[36px] pr-[50px]">
                    <div className="item-wrapper mb-5">
                        <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
                            Menu
                        </h4>
                        <ul className="mt-2.5">
                            <li
                                className={`item py-[11px] text-bgray-900 dark:text-white nav-active`}
                                onClick={() =>
                                    setActiveDashboard(!activeDashboard)
                                }
                            >
                                <a className="cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2.5">
                                            <Svg />
                                            <span className="item-text text-lg font-medium leading-none">
                                                Dashboards
                                            </span>
                                        </div>
                                        <span
                                            className={`transition-all ${
                                                activeDashboard
                                                    ? "-rotate-90"
                                                    : "rotate-0"
                                            }`}
                                        >
                                            <svg
                                                width="6"
                                                height="12"
                                                viewBox="0 0 6 12"
                                                fill="none"
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    fill="currentColor"
                                                    d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                                <ul
                                    className={`sub-menu ml-2.5 mt-[22px] border-l transition-all overflow-hidden border-success-100 pl-5 ${
                                        activeDashboard ? "active" : ""
                                    }`}
                                >
                                    {menuItems.map((menuItem, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className={`text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300`}
                                            >
                                                {menuItem}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <ListItem text={"Transaction"} />
                            <ListItem text={"Statistics"} />
                            <ListItem text={"My Wallet"} />
                            <ListItem text={"Analytics"} />
                            <li
                                className={`item py-[11px] text-bgray-900 dark:text-white`}
                            >
                                <a href="#">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2.5">
                                            <Svg />

                                            <span className="item-text text-lg font-medium leading-none">
                                                Inbox
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2.5">
                                            <span>
                                                <svg
                                                    width="10"
                                                    height="11"
                                                    viewBox="0 0 10 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M0.879751 10.0038L3.16823 9.67657C3.49833 9.62937 3.80424 9.47626 4.04003 9.24024L8.45886 4.81709C8.45886 4.81709 7.36911 4.81709 6.27936 3.72628C5.18961 2.63546 5.18961 1.54465 5.18961 1.54465L0.770776 5.9678C0.534986 6.20382 0.382033 6.51002 0.334876 6.84045L0.00795056 9.13116C-0.0646994 9.64021 0.371201 10.0765 0.879751 10.0038Z"
                                                        fill="#1A202C"
                                                    />
                                                    <path
                                                        opacity="0.4"
                                                        d="M9.5487 1.5446L8.45895 0.453784C7.8571 -0.148657 6.8813 -0.148657 6.27945 0.453784L5.1897 1.5446C5.1897 1.5446 5.1897 2.63542 6.27945 3.72623C7.3692 4.81705 8.45895 4.81705 8.45895 4.81705L9.5487 3.72623C10.1506 3.12379 10.1506 2.14704 9.5487 1.5446Z"
                                                        fill="#1A202C"
                                                    />
                                                </svg>
                                            </span>
                                            <div>
                                                <img
                                                    src={profileImg}
                                                    alt="profile"
                                                />
                                            </div>
                                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success-300">
                                                <span className="text-[10px] font-semibold text-white">
                                                    5
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <ListItem text={"Integrations"} />
                            <ListItem text={"User"} />
                            <ListItem text={"Calender"} />
                            <ListItem text={"History"} />
                        </ul>
                    </div>
                    <div className="item-wrapper mb-5">
                        <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
                            Help
                        </h4>
                        <ul className="mt-2.5">
                            <ListItem text={"Support"} />
                            <ListItem text={"Setting"} />
                        </ul>
                    </div>
                    <div className="item-wrapper mb-5">
                        <h4 className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50">
                            Others
                        </h4>
                        <ul className="mt-2.5">
                            <ListItem text={"SignIn"} />
                            <ListItem text={"Signup"} />
                            <ListItem text={"Coming Soon"} />
                            <ListItem text={"404"} />
                            <ListItem text={"Logout"} />
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;