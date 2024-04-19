export const is_environment_stable = () => {
    if(window.location) {
        const { href } = window.location;
        return href.includes("myvtex") || href.includes("vtexcommercestable");
    }
};