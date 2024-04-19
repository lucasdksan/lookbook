import BannerElement from "./components/BannerElement";
import { is_environment_stable } from "./utils/is_environment_stable";
import { schema } from "./utils/schema";
import styles from "./styles/look-book/styles.css";

const LookBook = ({ banner_list, VtexSlider }) => {
    if (!Array.isArray(banner_list)) return null;
    if (banner_list.length == 0) return null;

    return (
        <div className={styles["look-book--container"]}>
            <VtexSlider>
                {banner_list.map((banner, key) => (
                    <BannerElement banner={banner} key={key} />
                ))}
            </VtexSlider>
        </div>
    );
}

LookBook.schema = schema;

export default LookBook;    