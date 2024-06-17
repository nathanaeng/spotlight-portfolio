import { useEffect, useState, useCallback, useRef } from 'react';
import Searchbar from './components/Searchbar.jsx';
import Results from './components/Results.jsx';
import About from './components/About.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import './styles/DarkModeToggle.css';
import './styles/App.css';

// Get dark mode from local storage
const getDarkMode = () => {
  let ls = JSON.parse(localStorage.getItem('darkmode'));
  return ls !== null ? ls : false;
}

function App() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(getDarkMode());
  const abortControllerRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const fetchData = useCallback(async (query) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const text = query.replace("", "+");
      const res = await fetch(`https://99khxxmb8j.execute-api.us-east-2.amazonaws.com/opensearch-api-1?q=${text}`, {
        signal: abortControllerRef.current.signal,
      });
      const body = await res.json();
      setData(body);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error(error);
      }
    }
  }, []);

  const clearResults = useCallback(() => setData([]), []);

  useEffect(() => {
    // Avoid cold start
    fetch('https://99khxxmb8j.execute-api.us-east-2.amazonaws.com/opensearch-api-1?q=!');

    // Fade-in effect on load
    setTimeout(() => {document.querySelector('.title').classList.add('fade-in')}, 100);
    setTimeout(() => {
      document.querySelector('.about').classList.add('fade-in');
      document.querySelector('#about-icon').setAttribute('data-bs-target', '#about-more');
      document.querySelector('#about-icon').style.cursor = 'pointer';
    }, 1000);
    setTimeout(() => {
      document.querySelector('.darkmode-toggle-btn').classList.add('fade-in');
      // document.querySelector('.darkmode-toggle-btn').style.cursor = 'pointer';
    }, 2000);
  }, []);

  return (
    <div className="all">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="title-container">
        <h1 className="title">Nathan Eng</h1>
        <About fetchData={fetchData}/>
      </div>
      <div className="content">
        <div className="content-box">
          <Searchbar fetchData={fetchData} clearResults={clearResults}/>
          <Results data={data} darkMode={darkMode}/>
        </div>
        <ResumeModal />
      </div>
    </div>
  );
}

export default App;