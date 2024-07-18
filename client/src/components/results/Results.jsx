import Result from './Result.jsx';
import styles from './Results.module.css';
import searchbarStyles from '../search-bar/Searchbar.module.css';

const Results = ({ data }) => {
  const input = document.querySelector(`.${searchbarStyles['search-input']}`);
  if (input && input.value !== "" && data.length > 0) {
    return (
      <div className={styles["results-container"]}>
        {Object.keys(data).map((e, idx) => (<Result key={idx} data={data[e]}/>))}
      </div>
    );
  }
  return (
    <div className={`${styles["results-container"]} empty`} style={{marginBottom: "0px"}}></div>
  );
}

export default Results;