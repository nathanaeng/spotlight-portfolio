import { getImageURL } from '../../utils/image-util';

const Me = ({ data }) => {
    return (
        <div className="result-box">
                <img className="result-me" src={getImageURL('me.jpg')} alt="me"/>
                <h5 className="result-text">{data[1]}</h5>
                <div className="result-label">{data[0]}</div>
        </div>
    );
}

export default Me