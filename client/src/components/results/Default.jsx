import { getImageURL } from '../../utils/image-util';

const Default = ({ data }) => {
    const info = data[1];
    let thumbnail;
    if (info === "Georgia Institute of Technology") {
        thumbnail = <img className="thumbnail-gt" src={getImageURL('GT.png')} alt="thumbnail" width="50px" />;
    }

    return (
        <div className="result-box">
            {thumbnail}
            <h5 className="result-text">{data[1]}</h5>
            <span className="result-label">{data[0]}</span>
        </div>
    );
}

export default Default