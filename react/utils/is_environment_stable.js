export const is_environment_stable = () => {
    const { href } = window.location;
    return href.includes("myvtex") || href.includes("vtexcommercestable");
};