import { useRef } from "react";
import { useRuntime } from "vtex.render-runtime";
import { get_coordinate } from "../utils/get_coordinate";

import Pin from "./Pin";

import styles from "../styles/banner-element/styles.css";

const BannerElement = ({ banner })=>{
    const containerRef = useRef(null); 
    const { deviceInfo: { isMobile } } = useRuntime();

    const { image, image_mobile, alt, coordinate_list } = banner;

    return(
        <div
            className={styles["banner-element-container"]}
            ref={containerRef}
            onClick={(event) => get_coordinate(event, containerRef)}
        >
            <img 
                className={styles["banner-element-banner"]} 
                src={ isMobile ? image_mobile : image } 
                alt={alt} 
            />
            <Pin coordinate_list={coordinate_list} />
        </div>
    );
}

export default BannerElement;