import styles from '../Results.module.css';

const FavoriteMedia = ({ data }) => { 
    return (
        <div className={styles['result-box']}>
            <h5 className={styles['result-text']}>{data.name}</h5>
            {data.label === 'favorite books' ?
                    <h6 className={styles['result-by']}>by {data.by}</h6> :
                    <h6 className={styles['result-by']}>Director(s): {data.by}</h6>}
            <span className={styles['result-label']}>{data.label}</span>
        </div>
    );
};

export default FavoriteMedia;