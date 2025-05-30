import { useEffect, useState, useCallback, lazy } from 'react';
import Fuse from 'fuse.js';
import jsonData from './data/data.json';
import Searchbar from './components/search-bar/Searchbar.jsx';
import Results from './components/results/Results.jsx';
import About from './components/about/About.jsx';
import DarkModeToggle from './components/dark-mode/DarkModeToggle.jsx';
const ResumeModal = lazy(() => import('./components/results/result-types/resume/ResumeModal.jsx'));
import './App.css';

// Get dark mode from local storage
const getDarkMode = () => {
    let ls = JSON.parse(localStorage.getItem('darkmode'));
    return ls !== null ? ls : false;
};

function App() {
    const [data, setData] = useState([]);
    const [darkMode, setDarkMode] = useState(getDarkMode());

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const fetchData = useCallback((query) => {
        const options = {
            keys: [
                // core
                {
                    name: 'label',
                    weight: 2
                },
                'info',
                {
                    name: 'tags',
                    weight: 2
                },
                // secondary
                'category',
                'name',
                'by',
                'location',
                'start date',
                'end date',
                'position',
                'date',
                'description',
                'tools used',
            ],
            threshold: 0.2,
        };
        const fuse = new Fuse(jsonData, options);
        const results = fuse.search(query);
        setData(results.map((result) => result.item));
    }, []);

    const clearResults = useCallback(() => setData([]), []);

    useEffect(() => {
        // Fade-in effect on load
        setTimeout(() => {
            document.querySelector('.title').classList.add('fade-in');
        }, 100);
        setTimeout(() => {
            document.querySelector('.about').classList.add('fade-in');
            document
                .querySelector('#about-icon')
                .setAttribute('data-bs-target', '#about-more');
            document.querySelector('#about-icon').style.cursor = 'pointer';
        }, 1000);
        setTimeout(() => {
            document
                .querySelector('.darkmode-toggle-btn')
                .classList.add('fade-in');
            // document.querySelector('.darkmode-toggle-btn').style.cursor = 'pointer';
        }, 2000);
    }, []);

    return (
        <div className="all">
            <DarkModeToggle
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <div className="title-container">
                <h1 className="title">Nathan Eng</h1>
                <About fetchData={fetchData} />
            </div>
            <div className="content">
                <div className="content-box">
                    <Searchbar
                        fetchData={fetchData}
                        clearResults={clearResults}
                    />
                    <Results data={data} darkMode={darkMode} />
                </div>
                <ResumeModal />
            </div>
        </div>
    );
}

export default App;
