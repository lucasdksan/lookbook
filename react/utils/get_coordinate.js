import { is_environment_stable } from "./is_environment_stable";

export const get_coordinate = (event, containerRef) => {
    const myvtex = is_environment_stable();

    if (myvtex) {
        const container = containerRef.current.getBoundingClientRect();
        const x = event.clientX - container.left;
        const y = event.clientY - container.top;

        const width = container.width;
        const height = container.height;

        const percentageX = ((x / width) * 100).toFixed(2);
        const percentageY = ((y / height) * 100).toFixed(2);

        const result = `(${percentageX}%-${percentageY}%)`;

        navigator.clipboard.writeText(result).then(() => {
            console.log("Resultado copiado para a área de transferência: " + result);
        }).catch((err) => {
            console.error("Erro ao copiar resultado: ", err);
        });
    }
}