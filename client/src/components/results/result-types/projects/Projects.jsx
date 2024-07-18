import projectStyles from './Projects.module.css';
import styles from '../../Results.module.css';

const Projects = ({ data }) => {
    return (
        <div className={styles["result-box"]}>
            <h5 className={styles["result-text"]}>{data[1]}</h5>
            <p className={projectStyles["project-date"]}>Date: {data[2]}</p>
            <p className={projectStyles["project-info"]}>{data[3]}</p>
            <p className={projectStyles["project-info"]}><a href={data[5]} target="_blank" rel="noreferrer">{data[5]}</a></p>
            <p className={projectStyles["project-info"]}>tools used: {data[4]}</p>
            <span className={styles["result-label"]}>{data[0]}</span>
        </div>
    );
}

export default Projects;