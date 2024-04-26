import { useRef } from "react";
import { get_coordinate } from "../utils/get_coordinate";

import Pin from "./Pin";

import styles from "../styles/banner-element/styles.css";

const BannerElement = ({ banner, pin_icon })=>{
    const containerRef = useRef(null);
    const { image, alt, coordinate_list } = banner;

    return(
        <div
            className={styles["banner-element-container"]}
            ref={containerRef}
            onClick={(event) => get_coordinate(event, containerRef)}
        >
            <img 
                className={styles["banner-element-banner"]} 
                src={image} 
                alt={alt} 
            />
            <Pin pin_icon={pin_icon} coordinate_list={coordinate_list} />
        </div>
    );
}

export default BannerElement;