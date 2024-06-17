import Resume from './Resume.jsx';
import { FiDownload } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';

const ResumeModal = () => {
    let s = (window.innerWidth < 600) ? 1 : 2;
    
    return (
        <div className="modal resume" id="resumeModal" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-width">
                <div className="modal-content">
                    <IconContext.Provider value={{size: "100%"}}>
                    {/* <button type="button" className="close-modal" data-bs-dismiss="modal" aria-label="Close"><MdClose /></button> */}
                    <a className="close-modal" href="/" data-bs-dismiss="modal" aria-label="Close"><MdClose /></a>
                    <div className="modal-body">
                        <Resume scale={s}/>
                        <a className="resume-download" href="/documents/Resume.pdf" download><FiDownload /></a>
                    </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default ResumeModal