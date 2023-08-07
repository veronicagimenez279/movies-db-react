import { useState, useEffect } from 'react';

import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

import styles from "./styles.module.scss"

const ColorSchemeButton = () => {

    //Sets isDarkMode to the stored preference if there is one, if not it matches the system's
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedPreference = localStorage.getItem('colorScheme');
        return (
            storedPreference
                ?
                JSON.parse(storedPreference)
                :
                window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    //Changes between dark and light mode when clicking the button
    const toggleColorScheme = () => {
        setIsDarkMode((prevState: boolean) => !prevState);
    };

    //If isDarkMode is true it sets the color scheme to dark, if not it sets it to light, 
    //and it sets the colorScheme value in localstorage to true or false depending on the 
    //value of isDarkMode
    useEffect(() => {
        const colorScheme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('color-scheme', colorScheme);
        localStorage.setItem('colorScheme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);


    return (
        <button
            onClick={toggleColorScheme}
            className={styles.btn}
            aria-label='Dark/Light Mode Button'
        >
            {isDarkMode
                ?
                <BsFillSunFill style={{ background: "transparent" }} />
                :
                <BsMoonStarsFill style={{ background: "transparent" }} />
            }
        </button>
    );
};

export default ColorSchemeButton;
