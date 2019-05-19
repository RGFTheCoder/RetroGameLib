const keyTable = {};

const keyGet = new Proxy(keyTable, {
    get(obj, name) {
        return obj[name] || false;
    },

    set(obj, name, val) {

    }
});

export {
    keyGet as keys
}

addEventListener("keydown", (e) => {
    keyTable[e.key] = true;

});

addEventListener("keyup", (e) => {
    keyTable[e.key] = false;
});