import { FaRegFilePdf } from 'react-icons/fa6';

const Resume = () => {
  return (
    <div className="result-box resume" data-bs-toggle="modal" data-bs-target="#resumeModal">
      <span className="thumbnail"><FaRegFilePdf size={35}/></span>
      <h5 className="result-text">click to open</h5>
      <p></p>
      <div className="result-label">resume</div>
    </div>
  );
}

export default Resume