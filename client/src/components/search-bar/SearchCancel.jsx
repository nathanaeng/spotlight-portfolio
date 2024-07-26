import { MdClose } from 'react-icons/md';
import searchbarStyles from './Searchbar.module.css';
import styles from './SearchCancel.module.css';

const SearchCancel = ({ query, clear }) => {
    const clearInput = e => {
        clear();
        document.querySelector(`.${searchbarStyles['search-input']}`).focus();    // focus input if not already focused
        e.preventDefault(); // keep input focus
    };

    return (
        <button type="reset" className={styles['search-cancel']} onMouseDown={e => clearInput(e)} style={query ? { display: 'block'} : {display: 'none'}}>
            <MdClose size={27} />
        </button>
    );
};

export default SearchCancel;