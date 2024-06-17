import Me from './results/Me.jsx';
import Project from './results/Projects.jsx';
import WorkExperience from './results/WorkExperience.jsx';
import Song from './results/Song.jsx';
import Link from './results/Link.jsx';
import FavoriteMedia from './results/FavoriteMedia.jsx';
import Default from './results/Default.jsx';
import Resume from './results/Resume.jsx';

const Result = ({ data }) => {
    const type = data[0];

    switch (type) {
        case 'resume':
            return <Resume />;
        case 'me':
            return <Me data={data} />;
        case 'projects':
            return <Project data={data} />
        case 'work experience':
        case 'research':
            return <WorkExperience data={data} />
        case 'links':
            return <Link data={data} />
        case 'favorite songs':
            return <Song data={data} />
        case 'favorite books':
        case 'favorite movies':
            return <FavoriteMedia data={data} />
        default:
            return <Default data={data} />
    }
}

export default Result