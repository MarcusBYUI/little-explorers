import styles from "./hero.module.css"
import { getImageUrl } from '../../helpers/utils';
import PropTypes from "prop-types";

const Hero = ({ targetRef }) => {
    const handleButtonClick = () =>
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    return (
        <>
            <div className={styles.hero}>
                <img src={getImageUrl("drip.png")} alt="drip" />
                <div>
                    <div className={styles.left}>
                        <img src={getImageUrl("logo.png")} alt="logo" />
                        <h1>Welcome to Little Explorers Crèche &  Nursery.</h1>
                        <p>{`Welcome to Little Explorers! 🌟 Safe, secure, and nurturing environment for your child's growth. Experienced staff, early learning, flexible hours. Cozy nap areas, fun play zones, nutritious meals. Enroll now!`}</p>
                        <span>{`No 2, KG 327. Behind MTN Center. Nyarutarama, Kigali, Rwanda`}</span>
                        <button onClick={handleButtonClick}>Our Offers</button>
                    </div>
                    <img className={styles.right} src={getImageUrl("hero.png")} alt="hero" />
                </div>
            </div>
            <img className={styles.herobt} src={getImageUrl("herobt.png")} alt="herobt" />
        </>

    );
}

export default Hero;
Hero.propTypes = {
    targetRef: PropTypes.object
}