import { Document, Page } from 'react-pdf';
import resume from '../documents/Resume.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = ({ scale }) => {
  return (
    <div className="resume" data-bs-toggle="modal" data-bs-target="#resumeModal">
      <Document file={resume}>
          <Page pageNumber={1} scale={scale}/>
      </Document>
    </div>
  );
}

export default Resume