import { useMemo } from "react";
import styles from "./offers.module.css"
import { getImageUrl } from "../../helpers/utils";
import PropTypes from "prop-types";

const Offers = ({targetRef}) => {
    const list = useMemo(() => [
        {
            img: "timetable.png",
            header: "Activity Timetable",
            description: "Flexible, engaging schedule tailored to children’s developmental needs.",
            action: "View Timetable",
            link: `${window.location.origin}/schedule.pdf`
        },
        {
            img: "menu.png",
            header: "Snack & Meals",
            description: "Nutritious, delicious meals fostering healthy eating habits.",
            action: "View Menu",
            link: `${window.location.origin}/menu.pdf`
        },
        {
            img: "reg.png",
            header: "Our Regulations",
            description: "Safe, secure, and structured environment promoting children's well-being.",
            action: "View Regulations",
            link: `${window.location.origin}/regulation.pdf`
        },
        {
            img: "tuition.png",
            header: "Tuition",
            description: "Affordable, transparent pricing with flexible payment options available.",
            action: "View Tuition",
            link: `${window.location.origin}/fees.pdf`
        },
    ], [])
    return (
        <div ref={targetRef} className={styles.offers}>
            <img className={styles.planet} src={getImageUrl("planet.png")} alt="planet" />
            <img className={styles.abc} src={getImageUrl("abc.png")} alt="abc" />
            <p>Educational Plan</p>
            <h2>Learn More About Our Offers</h2>
            <div >
                {list.map((item, index)=>{
                    return <div key={index} className={styles.offer}>
                    <img src={getImageUrl(item.img)} alt={item.header} />
                    <div>
                        <p>{item.header}</p>
                        <span>{item.description}</span>
                        <div onClick={()=>window.open(item.link)}>
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
Offers.propTypes = {
    targetRef: PropTypes.object
}