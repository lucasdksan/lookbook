import styles from "../styles/grid-area/styles.css";
import { group_by } from "../utils/group_by";
import BannerElement from "./BannerElement";

const GridArea = ({ config_grid, banner_list, pin_icon }) => {
    const grouped_banner_list = group_by(banner_list, "direct_col");

    return (
        <div
            className={styles["grid-area--container"]}
            style={{
                gridGap: `${config_grid.grid_gap ? config_grid.grid_gap : 0}px`,
                gridTemplateColumns: `repeat(${config_grid.template_col && config_grid.template_col <= 4 && config_grid.template_col > 0 ? config_grid.template_col : 1}, 1fr)`
            }}
        >
            {
                grouped_banner_list.map((banner_list_g, index) => {
                    return (
                        <div className={styles["grid-area--children"]} style={{ gap:`${config_grid.grid_gap ? config_grid.grid_gap : 0}px` }} key={index}>
                            {banner_list_g.map((banner, key) => (
                                <BannerElement
                                    pin_icon={pin_icon}
                                    banner={banner}
                                    key={key}
                                />
                            ))}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default GridArea;