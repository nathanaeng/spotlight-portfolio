import { BsGithub, BsLinkedin } from 'react-icons/bs';
import styles from '../Results.module.css';

const Link = ({ data }) => {
    return (
        <div className={styles['result-box']}>
            <span className={styles['thumbnail']}>{data.info === 'LinkedIn' ? <BsLinkedin size={35} /> : <BsGithub size={35} />}</span>
            <h5 className={styles['result-text']}><a href={data.url} target="_blank" rel="noreferrer">{data.info}</a></h5>
            <p></p>
            <span className={styles['result-label']}>{data.label}</span>
        </div>
    );
};

export default Link;