import workStyles from './WorkExperience.module.css';
import styles from '../../Results.module.css';

const WorkExperience = ({ data }) => {
    return (
        <div className={styles['result-box']}>
            <h5 className={styles['result-text']}>{data.name}</h5>
            <p className={workStyles.position}>{data.position}</p>
            <p className={workStyles['work-location']}>{data.location}</p>
            <p className={workStyles['work-date']}>{data['start date']} - {data['end date']}</p>
            <ul className={workStyles['work-description']}>{data.description.map((e, idx) => (<li key={idx}>{e}</li>))}</ul>
            <span className={styles['result-label']}>{data.label}</span>
        </div>
    );
};

export default WorkExperience;