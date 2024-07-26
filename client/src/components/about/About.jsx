import { useRef, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styles from './About.module.css';
import searchbarStyles from '../search-bar/Searchbar.module.css';

const About = ({ fetchData }) => {
  const clickEmail = () => {
    const input = document.querySelector(`.${searchbarStyles['search-input']}`);
    input.focus();
    input.value = 'email';
    fetchData('email');
  };

  const aboutRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Fade-in effect on load
    setTimeout(() => {
      aboutRef.current.classList.add('fade-in');
      iconRef.current.setAttribute('data-bs-target', `#${styles['about-more']}`);
      iconRef.current.style.cursor = 'pointer';
    }, 1000);
  }, []);

  return (
    <div ref={aboutRef} className={styles['about']}>
        <span id={styles['about']}>
          {'Type something to learn more about me '}
          <button ref={iconRef} id={styles['about-icon']} data-bs-toggle="collapse">
            <AiOutlineInfoCircle />
          </button>
        </span>
        <div id={styles['about-more']} className="collapse">
          <br />
          This isn't your typical portfolio. Search anything you want to know about me. Well, almost anything.
          <br />
          <br />
          Think I'm missing something? <span id={styles['email-me']} onClick={clickEmail}>Email me!</span>
        </div>
    </div>
  );
};

export default About;