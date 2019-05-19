const canvas = document.createElement("canvas");
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext("2d");

function width(w) {
    if (!w) {
        return canvas.width;
    }
    canvas.width = w;

}

function height(h) {
    if (!h) {
        return canvas.height;
    }
    canvas.height = h;

}

function size(w, h) {
    if (!w) {
        return [canvas.width, canvas.height];
    }
    canvas.width = w;
    canvas.height = h;

}

export {
    ctx as canvas,
    width,
    height, 
    size
};

document.body.appendChild(canvas);