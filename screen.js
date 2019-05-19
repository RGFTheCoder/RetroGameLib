import {
    canvas,
    size
} from "./canvas";

let sizeConfig = [32, 32, 16];

size(sizeConfig[0] * sizeConfig[2], sizeConfig[1] * sizeConfig[2]);

export function pixel(x, y, color) {
    canvas.fillStyle = color;
    canvas.fillRect(x * sizeConfig[2], y * sizeConfig[2], sizeConfig[2], sizeConfig[2]);
    canvas.fillStyle = "#000000";
}

export function rect(x, y, w, h, color) {
    canvas.fillStyle = color;
    canvas.fillRect(x * sizeConfig[2], y * sizeConfig[2], w * sizeConfig[2], h * sizeConfig[2]);
    canvas.fillStyle = "#000000";
}

export function background(color) {
    rect(0, 0, sizeConfig[0], sizeConfig[1], color);
}