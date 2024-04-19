import { useEffect, useState } from "react";
import { useQuery } from "react-apollo";

import GET_PRODUCT from "../graphql/get_product.gql";

import styles from "../styles/modal-product/styles.css";

const ModalProduct = ({ product_id, set_state_pdt, state_pdt }) => {
    const [product, set_product] = useState();

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id: product_id },
    });

    useEffect(() => {
        if (!!data) {
            const { product: product_data } = data;
            const { items, link, productName } = product_data;
            const { images, sellers } = items[0];
            set_product({ link, productName, image: images[0], seller: sellers[0] });
        }
    }, [data]);

    console.log("product: ", product);

    if (error) return null;
    if (!product) return null;
    if (state_pdt !== product_id) return null;

    return (
        <div className={styles["modal-product-container"]} >
            <div className={styles["modal-product-reference"]}>
                <button onClick={() => set_state_pdt(null)} className={styles["modal-product-close-btn"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M8.71311 3.20276L2.9043 9.01157" stroke="black" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.9043 3.20276L8.71311 9.01157" stroke="black" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div className={styles["modal-product-data"]}>
                    <div className={styles["modal-product-image-content"]}>
                        <img className={styles["modal-product-image"]} src={product.image.imageUrl} alt="Product Image" />
                    </div>
                    <div className={styles["modal-product-info"]}>
                        <span className={styles["modal-product-name"]}>{product.productName}</span>
                        <span className={styles["modal-product-list-price"]}>{product.seller.commertialOffer.ListPrice}</span>
                        <span className={styles["modal-product-price"]}>{product.seller.commertialOffer.Price}</span>
                        <a className={styles["modal-product-redirect"]} href={product.link}>ver</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalProduct;