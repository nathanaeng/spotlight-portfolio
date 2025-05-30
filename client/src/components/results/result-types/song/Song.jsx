import { getImageURL } from '../../../../utils/image-util';
import songStyles from './Song.module.css';
import styles from '../../Results.module.css';

const Song = ({ data }) => {
    return (
        <div className={styles['result-box']}>
            <div className={songStyles['song-grid']}>
                <a href={data.link} target="_blank" rel="noreferrer">
                    <img className={songStyles['thumbnail-song']} src={getImageURL(data.image)} alt="thumbnail" width="100px" />
                </a>
                <div className={songStyles['song-grid-right']}>
                    <h5 className={styles['result-text']}>{data.name}</h5>
                    <h6 className={styles['result-by']}>{data.by}</h6>
                    <div className={styles['result-label']}>{data.label}</div>
                </div>
            </div>
        </div>
    );
};

export default Song;