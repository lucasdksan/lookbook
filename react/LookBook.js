import BannerElement from "./components/BannerElement";
import { schema } from "./utils/schema";
import styles from "./styles/look-book/styles.css";

const LookBook = ({ banner_list, VtexSlider, pin_icon }) => {
    if (!Array.isArray(banner_list)) return null;
    if (banner_list.length == 0) return null;

    return (
        <div className={styles["look-book--container"]}>
            <VtexSlider>
                {banner_list.map((banner, key) => (
                    <BannerElement pin_icon={pin_icon} banner={banner} key={key} />
                ))}
            </VtexSlider>
        </div>
    );
}

LookBook.schema = schema;

export default LookBook;    