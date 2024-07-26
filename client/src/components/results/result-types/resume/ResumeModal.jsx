import Resume from './Resume.jsx';
import { FiDownload } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import styles from './Resume.module.css';

const ResumeModal = () => {
    const s = (window.innerWidth < 600) ? 1 : 2;
    
    return (
        <div className="modal resume" id="resumeModal" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered ${styles['modal-width']}`}>
                <div className="modal-content">
                    <IconContext.Provider value={{size: '100%'}}>
                    <a className={styles['close-modal']} href="/" data-bs-dismiss="modal" aria-label="Close">
                        <MdClose className={styles['resume-icon']} />
                    </a>
                    <div className="modal-body">
                        <Resume scale={s} />
                        <a className={styles['resume-download']} href="/documents/Resume.pdf" download>
                            <FiDownload className={styles['resume-icon']} />
                        </a>
                    </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;