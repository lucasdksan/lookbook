export const get_position = (coordinate_x, coordinate_y)=>{
    if(!coordinate_x && !coordinate_y) return {}

    const x = parseFloat(coordinate_x.split("%")[0]);
    const y = parseFloat(coordinate_y.split("%")[0]);
    const default_style = {
        bottom: "50%",
        left: "-50%",
        transform: "translate(-35%, -10px)"
    };

    if(x >= 0 && x <= 30) {
        if(y >= 0 && y <= 20) {
            return {
                left: "0px",
                top: "20px",
                transform: "translate(0px, 0px)"
            };
        } else {
            return {
                left: "0px",
                bottom: "50%",
                transform: "translate(0px, -10px)"
            }
        }
    } else if(x >= 70 && x <= 100) {
        if(y >= 0 && y <= 25) {
            return {
                right: "0px",
                top: "20px",
                transform: "translate(0px, 0px)"
            };
        } else {
            return {
                right: "0px",
                bottom: "50%",
                transform: "translate(0px, -10px)"
            }
        }
    } else if(y >= 0 && y <= 20){
        return {
            left: "-50%",
            top: "20px",
            transform: "translate(-35%, 0px)"
        };
    } else {
        return default_style;
    }
}