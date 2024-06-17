import { AiOutlineInfoCircle } from 'react-icons/ai';

const About = ({ fetchData }) => {
  const clickEmail = () => {
    const input = document.querySelector('.search-input');
    input.focus();
    input.value = 'email';
    fetchData("email");
  }

  return (
    <div className="about">
        <span id="about">
          {"Type something to learn more about me "}
          <button id="about-icon" data-bs-toggle="collapse">
            <AiOutlineInfoCircle />
          </button>
        </span>
        <div id="about-more" className="collapse">
          <br/>
          This isn't your typical portfolio. Search anything you want to know about me. Well, almost anything.
          <br/>
          <br/>
          Think I'm missing something? <span id="email-me" onClick={clickEmail}>Email me!</span>
        </div>
    </div>
  );
}

export default About