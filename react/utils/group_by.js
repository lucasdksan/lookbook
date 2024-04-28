export const group_by = (banner_list, property)=> {
    const grouped = {};

    banner_list.forEach((item) => {
        const key = item[property];

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);
    });

    return Object.values(grouped);
}