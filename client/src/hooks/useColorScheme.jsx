import { useState, useEffect } from 'react';

export function useColorScheme() {
    // Get dark mode from local storage
    const getDarkMode = () => {
        let ls = JSON.parse(localStorage.getItem('darkmode'));
        return ls !== null ? ls : false;
    };

    const [darkMode, setDarkMode] = useState(getDarkMode());

    useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(darkMode));

        const meta = document.querySelector('meta[name="theme-color"]');

        if (darkMode) {
            document.body.classList.add('dark');
            meta.setAttribute('content', '#121212');
        } else {
            document.body.classList.remove('dark');
            meta.setAttribute('content', '#FFFFFF');
        }
    }, [darkMode]);

    return {
        darkMode,
        setDarkMode,
    };
}