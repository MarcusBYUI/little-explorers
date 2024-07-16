import { useMemo } from "react";
import styles from "./offers.module.css"
import { getImageUrl } from "../../helpers/utils";

const Offers = () => {
    const list = useMemo(() => [
        {
            img: "timetable.png",
            header: "Activity Timetable",
            description: "Flexible, engaging schedule tailored to children’s developmental needs.",
            action: "View Timetable",
            link: ""
        },
        {
            img: "menu.png",
            header: "Snack & Meals",
            description: "Nutritious, delicious meals fostering healthy eating habits.",
            action: "View Menu",
            link: ""
        },
        {
            img: "reg.png",
            header: "Our Regulations",
            description: "Safe, secure, and structured environment promoting children's well-being.",
            action: "View Regulations",
            link: ""
        },
        {
            img: "tuition.png",
            header: "Tuition",
            description: "Affordable, transparent pricing with flexible payment options available.",
            action: "View Tuition",
            link: ""
        },
    ], [])
    return (
        <div className={styles.offers}>
            <img className={styles.planet} src={getImageUrl("planet.png")} alt="planet" />
            <img className={styles.abc} src={getImageUrl("abc.png")} alt="abc" />
            <p>Educational Plan</p>
            <h2>Learn More About Our Offers</h2>
            <div>
                {list.map((item, index)=>{
                    return <div key={index} className={styles.offer}>
                    <img src={getImageUrl(item.img)} alt={item.header} />
                    <div>
                        <p>{item.header}</p>
                        <span>{item.description}</span>
                        <div>
                            <span>{item.action}</span>
                            <img src={getImageUrl("arr.png")} alt="arr" />
                        </div>
                    </div>
                </div>
                })}
                
            </div>

        </div>
    );
}

export default Offers;
