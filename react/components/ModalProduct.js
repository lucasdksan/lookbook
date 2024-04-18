import { useState } from "react";
import { useQuery } from "react-apollo";

import GET_PRODUCT from "../graphql/get_product.gql";

const ModalProduct = ({ product_id, state_modal, set_state_modal }) => {
    const [product, set_product] = useState();

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id: product_id },
    });

    useEffect(() => {
        if (!!data) {
            const { product: product_data } = data;
            set_product(product_data);
        }
    }, [data]);

    console.log("product: ", product);

    if (error) return null;
    if (!product) return null;

    return (
        <div className={class_generator("n1-lookbook", "modal-product")} >
            <button onClick={()=> set_state_modal(false)} className={class_generator("n1-lookbook", "close-btn")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8.71311 3.20276L2.9043 9.01157" stroke="black" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.9043 3.20276L8.71311 9.01157" stroke="black" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            { state_modal && (
                <div className={class_generator("n1-lookbook", "product-data")}>

                </div>
            ) }
        </div>
    );
}

export default ModalProduct;