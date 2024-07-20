import { useRef, useEffect } from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { BiMoon } from 'react-icons/bi';
import { IoIosSunny } from 'react-icons/io';
import styles from './DarkModeToggle.module.css';

let isInitialized = false;

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useColorScheme();
    const buttonRef = useRef(null);

    useEffect(() => {
        const toggleDarkMode = () => setDarkMode(!darkMode);

        const button = buttonRef.current;

        if (!isInitialized) {
            setTimeout(() => {
                button.classList.add('fade-in');
                button.addEventListener('click', toggleDarkMode);
                button.style.cursor = 'pointer';
                isInitialized = true;
            }, 2000);
        } else {
            button.addEventListener('click', toggleDarkMode);
        }

        return () => {
            button.removeEventListener('click', toggleDarkMode);
        }
    }, [darkMode, setDarkMode]);

    return (
        <button ref={buttonRef} className={styles["darkmode-toggle-btn"]} style={{cursor: "default"}}>
            {darkMode ? <IoIosSunny className={styles["darkmode-svg"]} size={32} color="white"/>
                    : <BiMoon className={styles["darkmode-svg"]} size={30} color="rgb(97, 97, 97)"/>}
        </button>
    );
}

export default DarkModeToggle;