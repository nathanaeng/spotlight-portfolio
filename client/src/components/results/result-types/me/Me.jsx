import { getImageURL } from '../../../../utils/image-util';
import meStyles from './Me.module.css';
import styles from '../../Results.module.css';

const Me = ({ data }) => {
    return (
        <div className={styles['result-box']}>
            <img className={meStyles['result-me']} src={getImageURL('me.jpg')} alt="me" />
            <h5 className={styles['result-text']}>{data.info}</h5>
            <div className={styles['result-label']}>{data.label}</div>
        </div>
    );
};

export default Me;