import styles from '../Results.module.css';

const FavoriteMedia = ({ data }) => { 
    return (
        <div className={styles['result-box']}>
            <h5 className={styles['result-text']}>{data[1]}</h5>
            {data[0] === 'favorite books' ?
                    <h6 className={styles['result-by']}>by {data[2]}</h6> :
                    <h6 className={styles['result-by']}>Director(s): {data[2]}</h6>}
            <span className={styles['result-label']}>{data[0]}</span>
        </div>
    );
};

export default FavoriteMedia;