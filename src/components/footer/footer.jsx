import styles from "./footer.module.css"
import { getImageUrl } from '../../helpers/utils';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={getImageUrl("logo2.png")} alt="logo" />
            <h2>Little Explorers</h2>
            <p>Welcome to Little Explorers! 🌟 Safe, secure, nurturing environment for growth. Experienced staff, early learning, flexible hours, cozy naps, fun play, nutritious meals. Enroll now!</p>
            <a href="#">Terms And Conditions</a>
            <div>
                <p>@copyright {new Date().getFullYear()} all right reserved by Little Explorers</p>
            </div>
        </div>
    );
}

export default Footer;
