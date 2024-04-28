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
                description: "Clique na imagem e coloque na região as coordenadas do pin usando ctrl+v",
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
                    alt: {
                        title: "Texto alternativo da image",
                        type: "string",
                        default: ""
                    },
                    border_radius: {
                        type: "number",
                        default: 0,
                        title: "Arredondamento das Imagens",
                        description: "Valor em px"
                    },
                    direct_col: {
                        type: "number",
                        default: 1,
                        title: "Qual coluna?",
                        description: "Essa Prop Só funciona caso o modo Slider estiver desativado."
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
                                    default: "",
                                    description: "Clique na imagem e coloque na região as coordenadas do pin usando ctrl+v",
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
        pin_icon: {
            title: "Ícone SVG",
            type: "string",
            description: "ícone em SVG para o pin",
            widget: {
                "ui:widget": "textarea",
            },
            default: ""
        },
        display_mode:  {
            type: "boolean",
            title: "Ativar Slider?",
            description: "As imagens serão apresentadas em carrossel ou não?",
            default: true,
        },
        config_slider: {
            type: "object",
            title: "Configuração do Slider",
            properties: {
                quantity: {
                    type: "number",
                    default: 1,
                    title: "Quantidade de Elementos no Carrossel."
                }
            }
        },
        config_grid: {
            type: "object",
            title: "Configuração do Grid",
            properties: {
                grid_gap: {
                    type: "number",
                    default: 0,
                    title: "Espaçamento entre as imagens",
                    description: "Valor em px"
                },
                template_col: {
                    type: "number",
                    default: 0,
                    title: "Numéro de Colunas",
                    description: "O maxímo de 4 colunas"
                },
            }
        }
    }
};
