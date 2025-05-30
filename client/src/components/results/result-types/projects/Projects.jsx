import projectStyles from './Projects.module.css';
import styles from '../../Results.module.css';

const Projects = ({ data }) => {
    return (
        <div className={styles['result-box']}>
            <h5 className={styles['result-text']}>{data.name}</h5>
            <p className={projectStyles['project-date']}>Date: {data.date}</p>
            <p className={projectStyles['project-info']}>{data.description}</p>
            <p className={projectStyles['project-info']}><a href={data.url} target="_blank" rel="noreferrer">{data.url}</a></p>
            <p className={projectStyles['project-info']}>tools used: {data['tools used']}</p>
            <span className={styles['result-label']}>{data.label}</span>
        </div>
    );
};

export default Projects;