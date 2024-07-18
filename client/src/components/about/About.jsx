import { useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styles from './About.module.css';
import searchbarStyles from '../search-bar/Searchbar.module.css';

const About = ({ fetchData }) => {
  const clickEmail = () => {
    const input = document.querySelector(`.${searchbarStyles['search-input']}`);
    input.focus();
    input.value = 'email';
    fetchData("email");
  }

  useEffect(() => {
    // Fade-in effect on load
    setTimeout(() => {
      document.querySelector(`.${styles['about']}`).classList.add('fade-in');
      document.querySelector(`#${styles['about-icon']}`).setAttribute('data-bs-target', `#${styles['about-more']}`);
      document.querySelector(`#${styles['about-icon']}`).style.cursor = 'pointer';
    }, 1000);
  }, []);

  return (
    <div className={styles["about"]}>
        <span id={styles["about"]}>
          {"Type something to learn more about me "}
          <button id={styles["about-icon"]} data-bs-toggle="collapse">
            <AiOutlineInfoCircle />
          </button>
        </span>
        <div id={styles["about-more"]} className="collapse">
          <br/>
          This isn't your typical portfolio. Search anything you want to know about me. Well, almost anything.
          <br/>
          <br/>
          Think I'm missing something? <span id={styles["email-me"]} onClick={clickEmail}>Email me!</span>
        </div>
    </div>
  );
}

export default About;