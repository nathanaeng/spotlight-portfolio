import { useEffect, useState, useCallback, useRef } from 'react';
import Searchbar from './components/search-bar/Searchbar.jsx';
import Results from './components/results/Results.jsx';
import About from './components/about/About.jsx';
import DarkModeToggle from './components/dark-mode/DarkModeToggle.jsx';
import ResumeModal from './components/results/result-types/resume/ResumeModal.jsx';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const abortControllerRef = useRef(null);

  const fetchData = useCallback(async (query) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const text = query.replace('', '+');
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
    setTimeout(() => {document.querySelector('.title').classList.add('fade-in');}, 100);
  }, []);

  return (
    <div className="all">
      <DarkModeToggle />
      <div className="title-container">
        <h1 className="title">Nathan Eng</h1>
        <About fetchData={fetchData} />
      </div>
      <div className="content">
        <div className="content-box">
          <Searchbar fetchData={fetchData} clearResults={clearResults} />
          <Results data={data} />
        </div>
        <ResumeModal />
      </div>
    </div>
  );
}

export default App;