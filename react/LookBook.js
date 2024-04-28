import BannerElement from "./components/BannerElement";
import GridArea from "./components/GridArea";
import { schema } from "./utils/schema";
import styles from "./styles/look-book/styles.css";

const LookBook = ({ banner_list, pin_icon, display_mode, config_slider, config_grid, VtexSlider }) => {
    if (!Array.isArray(banner_list)) return null;
    if (banner_list.length == 0) return null;

    if (!display_mode) {
        return (
            <div className={styles["look-book--container"]}>
                <GridArea config_grid={config_grid} pin_icon={pin_icon} banner_list={banner_list} />
            </div>
        )
    }

    return (
        <div className={styles["look-book--container"]}>
            <VtexSlider
                itemsPerPage={{
                    desktop: config_slider.quantity ? config_slider.quantity : 1,
                    tablet: config_slider.quantity ? config_slider.quantity : 1,
                    phone: config_slider.quantity ? config_slider.quantity : 1
                }}
            >
                {banner_list.map((banner, key) => (
                    <BannerElement
                        pin_icon={pin_icon}
                        banner={banner}
                        key={key}
                    />
                ))}
            </VtexSlider>
        </div>
    );
}

LookBook.schema = schema;

export default LookBook;    