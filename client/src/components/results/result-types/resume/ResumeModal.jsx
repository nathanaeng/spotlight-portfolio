import Resume from './Resume.jsx';
import resumePDF from '../../../../documents/Resume.pdf';
import { FiDownload } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
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
                        <CgClose className={styles['resume-icon']} strokeWidth={0.2} />
                    </a>
                    <div className="modal-body">
                        <Resume scale={s} />
                        <a className={styles['resume-download']} href={resumePDF} download="Resume.pdf">
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