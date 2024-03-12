import { useState } from "react";
import SearchBar from "../../forms/SearchBar";
import Author from "./Author";
import MassagePopup from "./MassagePopup";
import NotificationPopup from "./NotificationPopup";
import ProfilePopup from "./ProfilePopup";
import StorePopUp from "./StorePopUp";
import ModeToggler from "./ModeToggler";

function HeaderOne({ handleSidebar }) {
    const [popup, setPopup] = useState(false);

    const handlePopup = (name) => {
        setPopup({ [name]: popup?.[name] ? false : true });
    };

    return (
        <header className="header-wrapper fixed z-30 hidden w-full md:block">
            <div className="relative flex h-[108px] w-full items-center justify-between bg-white px-10 dark:bg-darkblack-600 2xl:px-[76px]">
                <button
                    aria-label="none"
                    onClick={handleSidebar}
                    title="Ctrl+b"
                    type="button"
                    className="drawer-btn absolute left-0 top-auto rotate-180 transform"
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
                <div>
                    <h3 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px]">
                        Dashboard
                    </h3>
                    <p className="text-xs font-medium text-bgray-600 dark:text-bgray-50 lg:text-sm lg:leading-[25.2px]">
                        Let’s check your update today
                    </p>
                </div>
                <SearchBar />

                <div className="quick-access-wrapper relative">
                    <div className="flex items-center space-x-[43px]">
                        <div className="hidden items-center space-x-5 xl:flex">
                            <div
                                onClick={() => setPopup(false)}
                                id="noti-outside"
                                className={`fixed left-0 top-0  h-full w-full ${
                                    popup ? "block" : "hidden"
                                }`}
                            ></div>
                            <ModeToggler />
                   
                        </div>
                        <div className="hidden h-[48px] w-[1px] bg-bgray-300 dark:bg-darkblack-400 xl:block"></div>
                        {/* author */}
                        <Author showProfile={handlePopup} />
                    </div>
                    {/* notification ,message, store */}

                    <ProfilePopup
                        active={popup?.profile}
                        handlePopup={handlePopup}
                    />
                </div>
            </div>
        </header>
    );
}

export default HeaderOne;
