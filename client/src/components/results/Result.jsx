import Me from './result-types/me/Me.jsx';
import Projects from './result-types/projects/Projects.jsx';
import WorkExperience from './result-types/work-experience/WorkExperience.jsx';
import Song from './result-types/song/Song.jsx';
import Link from './result-types/Link.jsx';
import FavoriteMedia from './result-types/FavoriteMedia.jsx';
import Default from './result-types/Default.jsx';
import ResumeResult from './result-types/resume/ResumeResult.jsx';

const Result = ({ data }) => {
    const type = data[0];

    switch (type) {
        case 'resume':
            return <ResumeResult />;
        case 'me':
            return <Me data={data} />;
        case 'projects':
            return <Projects data={data} />;
        case 'work experience':
        case 'research':
            return <WorkExperience data={data} />;
        case 'links':
            return <Link data={data} />;
        case 'favorite songs':
            return <Song data={data} />;
        case 'favorite books':
        case 'favorite movies':
            return <FavoriteMedia data={data} />;
        default:
            return <Default data={data} />;
    }
}

export default Result;