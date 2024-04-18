export const schema = {
    title: "Lista dos Banners",
    type: "object",
    properties: {
        banner_list: {
            title: "Lista de banners",
            type: "array",
            default: [],
            items: {
                title: "Banner",
                type: "object",
                properties: {
                    image: {
                        title: "Image (URL)",
                        type: "string",
                        widget: {
                            "ui:widget": "image-uploader",
                        },
                        default: ""
                    },
                    image_mobile: {
                        title: "Image (URL) Mobile",
                        type: "string",
                        widget: {
                            "ui:widget": "image-uploader",
                        },
                        default: ""
                    },
                    alt: {
                        title: "Texto alternativo da image",
                        type: "string",
                        default: ""
                    },
                    coordinate_list: {
                        title: "Lista de Coordenadas",
                        type: "array",
                        default: [],
                        items: {
                            title: "Coordenadas",
                            type: "object",
                            properties: {
                                coordinates: {
                                    title: "Coordenadas do point",
                                    type: "string",
                                    default: ""
                                },
                                product_id: {
                                    title: "Id do produto",
                                    type: "string",
                                    default: ""
                                }
                            }
                        }
                    }
                },
            },
        },
    }
};
