import { getImageURL } from '../../utils/image-util';

const Song = ({ data }) => {
    return (
        <div className="result-box">
            <div className="song-grid">
                <a href={data[3]} target="_blank" rel="noreferrer">
                    <img className="thumbnail-song" src={getImageURL(data[4])} alt="thumbnail" width="100px" />
                </a>
                <div className="song-grid-right">
                    <h5 className="result-text">{data[1]}</h5>
                    <h6 className="result-by">{data[2]}</h6>
                    <div className="result-label">{data[0]}</div>
                </div>
            </div>
        </div>
    );
}

export default Song;