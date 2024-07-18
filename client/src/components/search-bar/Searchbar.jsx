import { useEffect, useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchCancel from './SearchCancel.jsx';
import searchbarStyles from './Searchbar.module.css';
import styles from '../results/Results.module.css';
import darkStyles from '../dark-mode/DarkModeToggle.module.css';

const Searchbar = ({ fetchData, clearResults }) => {
    const [query, setQuery] = useState('');

    // When search icon clicked
    const selectSearch = () => {
        document.querySelector(`.${searchbarStyles['search-input']}`).focus();
    }

    // Clear query and results
    const clear = useCallback(() => {
        document.querySelector(`.${searchbarStyles['search-input']}`).value = '';
        setQuery('');
        clearResults();
    }, [clearResults]);

    useEffect(() => {
        const input = document.querySelector(`.${searchbarStyles['search-input']}`);
        const content = document.querySelector('.content-box');
        const container = document.querySelector('.title-container');
        const dm = document.querySelector(`.${darkStyles['darkmode-toggle-btn']}`);

        const toggleFocus = e => {
            const resumeModal = document.querySelector('.modal.resume');
    
            if (input === document.activeElement) {
                content.classList.add('expand');
                container.classList.add('blur');
                dm.classList.add('blur');
            } else if (!content.contains(e.target) && !dm.contains(e.target) && !resumeModal.contains(e.target)) {
                content.classList.remove('expand');
                container.classList.remove('blur');
                dm.classList.remove('blur');
                clear();
            }
        }

        const escapeKeyFocus = e => {
            if ((e.key === 'Escape' || e.key === 'Esc') && input.value === '') {
                content.classList.remove('expand');
                container.classList.remove('blur');
                dm.classList.remove('blur');
                clear();
                input.blur();
            }
        }

        document.addEventListener('click', e => toggleFocus(e));
        input.addEventListener('keydown', e => escapeKeyFocus(e));
        
        return () => {
            document.removeEventListener('click', toggleFocus);
            input.removeEventListener('keydown', escapeKeyFocus);
        }
    }, [clear]);

    // Toggle placeholder values
    useEffect(() => {
        const toggle = (...values) => {
            let index = 0;
    
            return function next() {
                index++;
                if (index >= values.length) {
                    index = 0;
                }
                return values[index];
            };
        }
    
        const togglePlaceholder = toggle('e.g. work experience', 'e.g. hobbies', 'e.g. about',
                'e.g. favorite movies', 'e.g. interests', 'e.g. education', 'e.g. pets',
                'e.g. resume', 'e.g. home town', 'e.g. languages I know', 'e.g. projects',
                'e.g. LinkedIn');

        const interval = setInterval(() => {
            document.querySelector(`.${searchbarStyles['search-input']}`).placeholder = togglePlaceholder();
        }, 2000);
        
        return () => clearInterval(interval);
    }, []);

    // Querying
    useEffect(() => {
        if (query !== '') {
            fetchData(query);
        } else {
            clearResults();
        }
    }, [query, fetchData, clearResults]);

    // Mobile: hide keyboard after touch event
    useEffect(() => {
        const results = document.querySelector(`.${styles['results-container']}`);
        const hideKeyboard = () => {
            document.activeElement.blur();
        }
        results.addEventListener('touchstart', hideKeyboard);

        return () => results.removeEventListener('touchstart', hideKeyboard);
    }, []);

    return (
        <div className={searchbarStyles.searchbar}>
            <button className={searchbarStyles["search-icon"]} onClick={ selectSearch }><FiSearch size={20} /></button>
            <input className={searchbarStyles["search-input"]} type="search" placeholder="e.g. work experience" onChange={e => setQuery(e.target.value)} maxLength="50" />
            <SearchCancel query={query} clear={clear}/>
        </div>
    );
}

export default Searchbar;