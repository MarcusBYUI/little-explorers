import { getImageUrl } from "../../helpers/utils";
import styles from "./about.module.css"
import PropTypes from "prop-types";

const About = ({targetRef}) => {
    const handleButtonClick = () =>
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    return (
        <>
            <div className={styles.about}>
                <img className={styles.cloud} src={getImageUrl("cloud.png")} alt="cloud" />
                <img className={styles.arr1} src={getImageUrl("arrow.png")} alt="arrow" />
                <img className={styles.arr2} src={getImageUrl("arrow.png")} alt="arrow" />
                <img className={styles.sun} src={getImageUrl("sun.png")} alt="sun" />
                <div>
                    <div className={styles.left}>
                        <p>More About Us</p>
                        <h2>We Accomodate all children between 1 - 6 years</h2>
                        <span>our classrooms are designed to be vibrant, safe, and stimulating environments where children can explore, learn, and grow. Our comprehensive curriculum is tailored to meet the developmental needs of each age group, incorporating a blend of play-based learning, structured activities, and hands-on experiences. We aim to foster creativity, critical thinking, and social skills, ensuring every child builds a strong foundation for future learning.</span>
                        <button onClick={handleButtonClick}>Our Offers</button>
                    </div>
                    <div className={styles.right}>
                        <img src={getImageUrl("about.png")} alt="about" />
                        <div>
                            <div>
                                <span>1</span>
                                <p>Make Inquiries</p>
                            </div>
                            <div>
                                <span>2</span>
                                <p>Visit For A Tour</p>
                            </div>
                            <div>
                                <span>3</span>
                                <p>Enroll Child</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={styles.cloudb} src={getImageUrl("cloud.png")} alt="cloud" />
            </div>
        </>

    );
}

export default About;
About.propTypes = {
    targetRef: PropTypes.object
}