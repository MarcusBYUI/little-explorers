import { useMemo } from "react";
import styles from "./contact.module.css"
import { getImageUrl } from '../../helpers/utils';

const Contact = () => {
    const list = useMemo(() => [
        {
            img: "whatsapp.png",
            text: "Chat Us On WhatsApp",
            link: "http://#"
        },
        {
            img: "messenger.png",
            text: "Chat Us On Messenger",
            link: "https://#"
        },
        {
            img: "email.png",
            text: "Send An Email",
            link: "#"
        },
        {
            img: "call.png",
            text: "Call In",
            link: "#"
        },

    ], [])
    return (
        <div className={styles.contact}>
            <p>No 2, #</p>
            <h2>Needs Help? Let’s Get in Touch</h2>
            <div>
                {list.map((item, index) => {
                    return <div onClick={() => window.open(item.link)} key={index} className={styles.item}>
                        <img src={getImageUrl(item.img)} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Contact;
