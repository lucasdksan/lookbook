import BannerElement from "./components/BannerElement";
import { is_environment_stable } from "./utils/is_environment_stable";
import { schema } from "./utils/schema";

const LookBook = ({ banner_list, VtexContainer, VtexSlider }) => {
    if (!Array.isArray(banner_list)) return null;
    if (banner_list.length == 0) return null;

    console.log("WS: ", is_environment_stable())

    return (
        <VtexContainer>
            <VtexSlider>
                {banner_list.map((banner, key) => (
                    <BannerElement banner={banner} key={key} />
                ))}
            </VtexSlider>
        </VtexContainer>
    );
}

LookBook.schema = schema;

export default LookBook;    