import Result from './Result.jsx';
import '../styles/Results.css';

const Results = ({ data, darkMode }) => {
  let input = document.querySelector('.search-input');

  if (input && input.value !== "" && data.length > 0) {
    return (
      <div className={"results-container " + (darkMode ? "dark" : "")}>
          {Object.keys(data).map((e, idx) => (<Result key={idx} data={data[e]}/>))}
      </div>
    );
  }
  return (
    <div className="results-container empty" style={{marginBottom: "0px"}}></div>
  );
}

export default Results