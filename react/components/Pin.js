import { useState } from "react";
import ModalProduct from "./ModalProduct";

import { encoder_coordinate } from "../utils/encoder_coordinate";

import styles from "../styles/pin/styles.css";
import { get_position } from "../utils/get_position";

const Pin = ({ coordinate_list, pin_icon }) => {
    const [state_pdt, set_state_pdt] = useState(null);

    if (!Array.isArray(coordinate_list)) return null;
    if (coordinate_list.length == 0) return null;

    return (
        <>
            {coordinate_list.map((coordinate, key) => {
                const { coordinate_x, coordinate_y } = encoder_coordinate(coordinate.coordinates);
                const position_modal = get_position(coordinate_x, coordinate_y);

                return (
                    <div style={{ top: coordinate_y, left: coordinate_x }} key={key} className={styles["pin-container"]}>
                        <div className={styles["pin-reference"]}>
                            <ModalProduct position_modal={position_modal} state_pdt={state_pdt} set_state_pdt={set_state_pdt} product_id={coordinate.product_id} />
                            <button onClick={() => set_state_pdt((product_id) => product_id === coordinate.product_id ? null : coordinate.product_id)} className={styles["pin-btn"]}>
                                { pin_icon !== "" && pin_icon !== undefined && pin_icon ? <div dangerouslySetInnerHTML={{ __html: pin_icon }} /> : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19524 4.09874H6.64699V1.55049C6.64699 0.846538 6.0765 0.276367 5.37287 0.276367C4.66923 0.276367 4.09874 0.846538 4.09874 1.55049V4.09874H1.55049C0.846856 4.09874 0.276367 4.66891 0.276367 5.37287C0.276367 6.07682 0.846856 6.64699 1.55049 6.64699H4.09874V9.19524C4.09874 9.89919 4.66923 10.4694 5.37287 10.4694C6.0765 10.4694 6.64699 9.89919 6.64699 9.19524V6.64699H9.19524C9.89888 6.64699 10.4694 6.07682 10.4694 5.37287C10.4694 4.66891 9.89888 4.09874 9.19524 4.09874Z" fill="white" />
                                    </svg>
                                ) }
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Pin; 