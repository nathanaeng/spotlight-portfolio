// import ResumeModal from './ResumeModal';
import { FaRegFilePdf } from 'react-icons/fa6';
import styles from '../../Results.module.css';

const ResumeResult = () => {
    return (
        <>
            <div
                className={`${styles['result-box']} ${styles['resume']}`}
                data-bs-toggle="modal"
                data-bs-target="#resumeModal"
            >
                <span className={styles['thumbnail']}>
                    <FaRegFilePdf size={35} />
                </span>
                <h5 className={styles['result-text']}>click to open</h5>
                <p></p>
                <div className={styles['result-label']}>resume</div>
            </div>
        </>
    );
};

export default ResumeResult;
