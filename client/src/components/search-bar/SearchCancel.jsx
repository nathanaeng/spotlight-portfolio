import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import searchbarStyles from './Searchbar.module.css';
import styles from './SearchCancel.module.css';

const SearchCancel = ({ query, clear }) => {
    const clearInput = e => {
        clear();
        document.querySelector(`.${searchbarStyles['search-input']}`).focus();    // focus input if not already focused
        e.preventDefault(); // keep input focus
    }

    useEffect(() => {
        const cancel = document.querySelector(`.${styles['search-cancel']}`);
        query ? cancel.style.display = 'block'
            : cancel.style.display = 'none';
    }, [query]);

    return (
        <button type="reset" className={styles["search-cancel"]} onMouseDown={e => clearInput(e)}>
            <MdClose size={27}/>
        </button>
    );
}

export default SearchCancel