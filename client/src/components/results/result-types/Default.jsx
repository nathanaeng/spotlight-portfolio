import { getImageURL } from '../../../utils/image-util';
import styles from '../Results.module.css';

const Default = ({ data }) => {
    const info = data.info;
    let thumbnail;
    if (info === 'Georgia Institute of Technology') {
        thumbnail = <img className={styles['thumbnail-gt']} src={getImageURL('GT.png')} alt="thumbnail" width="50px" />;
    }

    return (
        <div className={styles['result-box']}>
            {thumbnail}
            <h5 className={styles['result-text']}>{data.info}</h5>
            <span className={styles['result-label']}>{data.label}</span>
        </div>
    );
};

export default Default;