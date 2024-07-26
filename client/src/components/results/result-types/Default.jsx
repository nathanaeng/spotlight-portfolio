import { getImageURL } from '../../../utils/image-util';
import styles from '../Results.module.css';

const Default = ({ data }) => {
    const info = data[1];
    let thumbnail;
    if (info === 'Georgia Institute of Technology') {
        thumbnail = <img className={styles['thumbnail-gt']} src={getImageURL('GT.png')} alt="thumbnail" width="50px" />;
    }

    return (
        <div className={styles['result-box']}>
            {thumbnail}
            <h5 className={styles['result-text']}>{data[1]}</h5>
            <span className={styles['result-label']}>{data[0]}</span>
        </div>
    );
};

export default Default;