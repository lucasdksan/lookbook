export const encoder_coordinate = (coordinate)=>{
    const [coordinate_x, coordinate_y] = coordinate.split("#");

    return { coordinate_x, coordinate_y };
}