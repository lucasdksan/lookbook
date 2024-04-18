import { useState } from "react";
import { class_generator } from "../utils/class_generator";
import ModalProduct from "./ModalProduct";

const Pin = ({ coordinate_list }) => {
    const [ state_modal, set_state_modal ] = useState(false)

    if (!Array.isArray(coordinate_list)) return null;
    if (coordinate_list.length == 0) return null;

    return (
        <>
            {coordinate_list.map((coordinate, key) => (
                <div key={key} className={class_generator("n1-lookbook", "pin-container")}>
                    <ModalProduct set_state_modal={set_state_modal} state_modal={state_modal} product_id={coordinate.product_id} />
                    <button onClick={()=> set_state_modal(e => !e)} className={class_generator("n1-lookbook", "pin-btn")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19524 4.09874H6.64699V1.55049C6.64699 0.846538 6.0765 0.276367 5.37287 0.276367C4.66923 0.276367 4.09874 0.846538 4.09874 1.55049V4.09874H1.55049C0.846856 4.09874 0.276367 4.66891 0.276367 5.37287C0.276367 6.07682 0.846856 6.64699 1.55049 6.64699H4.09874V9.19524C4.09874 9.89919 4.66923 10.4694 5.37287 10.4694C6.0765 10.4694 6.64699 9.89919 6.64699 9.19524V6.64699H9.19524C9.89888 6.64699 10.4694 6.07682 10.4694 5.37287C10.4694 4.66891 9.89888 4.09874 9.19524 4.09874Z" fill="white" />
                        </svg>
                    </button>
                </div>
            ))}
        </>
    );
}

export default Pin; 