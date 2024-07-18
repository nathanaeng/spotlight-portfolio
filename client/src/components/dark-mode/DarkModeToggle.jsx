import { useEffect } from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { BiMoon } from 'react-icons/bi';
import { IoIosSunny } from 'react-icons/io';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useColorScheme();
    
    const toggleDarkMode = () => setDarkMode(!darkMode);

    // Fade-in effect on load
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(`.${styles['darkmode-toggle-btn']}`).classList.add('fade-in');
            // document.querySelector('.darkmode-toggle-btn').style.cursor = 'pointer';
          }, 2000);
    }, []);

    return (
        <button className={styles["darkmode-toggle-btn"]} onClick={toggleDarkMode}>
            {darkMode ? <IoIosSunny className={styles["darkmode-svg"]} size={32} color="white"/>
                    : <BiMoon className={styles["darkmode-svg"]} size={30} color="rgb(97, 97, 97)"/>}
        </button>
    );
}

export default DarkModeToggle;