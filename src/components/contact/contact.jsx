import { useMemo } from "react";
import styles from "./contact.module.css"
import { getImageUrl } from '../../helpers/utils';

const Contact = () => {
    const list = useMemo(() => [
        {
            img: "whatsapp.png",
            text: "Chat Us On WhatsApp",
            link: "http://wa.me/250795303566"
        },
        {
            img: "messenger.png",
            text: "Chat Us On Messenger",
            link: "https://www.facebook.com/people/Little-Explorers/61562028847692"
        },
        {
            img: "email.png",
            text: "Send An Email",
            link: "mailto:hello@littleexplorers.rw"
        },
        {
            img: "call.png",
            text: "Call In",
            link: "tel:+250795303566"
        },

    ], [])
    return (
        <div className={styles.contact}>
            <p>No 2, KG 327. Behind MTN Center. Nyarutarama, Kigali, Rwanda</p>
            <h2>Needs Help? Let’s Get in Touch</h2>
            <div>
                {list.map((item, index) => {
                    return <div onClick={()=>window.open(item.link)} key={index} className={styles.item}>
                        <img src={getImageUrl(item.img)} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Contact;
