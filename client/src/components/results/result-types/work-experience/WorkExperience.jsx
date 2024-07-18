import { FaLocationDot } from 'react-icons/fa6';
import workStyles from './WorkExperience.module.css';
import styles from '../../Results.module.css';

const WorkExperience = ({ data }) => {
    return (
        <div className={styles["result-box"]}>
            <h5 className={styles["result-text"]}>{data[1]}</h5>
            <p className={workStyles.position}>{data[5]}</p>
            <p className={workStyles["work-location"]}><FaLocationDot className={workStyles["work-location-icon"]}/>{data[4]}</p>
            <p className={workStyles["work-date"]}>{data[2]} - {data[3]}</p>
            <ul className={workStyles["work-description"]}>{data[6].map((e, idx) => (<li key={idx}>{e}</li>))}</ul>
            <span className={styles["result-label"]}>{data[0]}</span>
        </div>
    );
}

export default WorkExperience;