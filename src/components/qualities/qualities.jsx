import { useMemo } from "react";
import styles from "./qualities.module.css"
import { getImageUrl } from "../../helpers/utils";

const Qualities = () => {
    const list = useMemo(() => [
        {
            img: "slide.png",
            header: "Outdoor Play",
            text: "Essential for their physical, cognitive, and social-emotional development",
        },
        {
            img: "motor.png",
            header: "Fine Motor Skills",
            text: "Helps develop the small muscles in a child's hands and fingers, which are essential",
        },
        {
            img: "music.png",
            header: "Music & Movement",
            text: "Helps to stimulate their senses, improve coordination, and foster creativity",
        },
        {
            img: "teacher.png",
            header: "Best Teachers",
            text: "Essential for their physical, cognitive, and social-emotional development",
        },
    ], [])
    return (
        <div className={styles.qualities}>
            <h2>Providing Good Qualities For Your Loving Kids</h2>
            <div>
                {list.map((item, index)=>{
                    return <div key={index}>
                    <img src={getImageUrl(item.img)} alt={item.header} />
                    <p>{item.header}</p>
                    <span>{item.text}</span>
                </div>
                })}
            </div>
        </div>
    );
}

export default Qualities;
