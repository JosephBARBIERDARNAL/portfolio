

import {Link} from 'react-router-dom';

const Feeback = () => {
    return (
        <div>
            <h3>Feedback</h3>
            <p>
                Having a different opinion? A nuance to bring? A question to ask?
            </p>
            <p>
                I'm always looking for feedback and/or contributions. The best way to share your thoughts is to open an issue on the <Link to='https://github.com/JosephBARBIERDARNAL/portfolio/issues'>GitHub repository</Link> of the project.
            </p>
        </div>
    );
}

export default Feeback;
