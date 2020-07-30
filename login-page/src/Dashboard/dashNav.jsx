import React, { useContext, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DashNav = props => {
    const [darkMode, setDarkMode, toggle] = useDarkMode(false);

    useEffect(() => {
        const body = document.querySelector("body");

        if (darkMode) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }

    }, [darkMode])

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        window.location.assign("/login");
    }

    return (
        <nav id="dashNav">
            <input
                type="checkbox"
                name="darkMode"
                id="darkMode"
                onClick={toggle}
                checked={darkMode}
            />
            <a className="signout" onClick={logOut}>Sign Out</a>
        </nav>
    )
}

export default DashNav;