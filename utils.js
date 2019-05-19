export function range(a1, a2, a3 = 1) {
    if (!a2) {
        const out = {};
        for (let i = 0; i < a1; i += a3) {
            out[i] = i;
        }
        return out;
    } else {
        const out = {};
        for (let i = a1; i < a2; i += a3) {
            out[i] = i;
        }
        return out;

    }
}

export function random(a1, a2, a3 = 1) {
    a3 = 1 / a3;
    if (!a2) {
        return Math.floor(Math.random() * a1 * a3) / a3;
    } else {
        return a1 + Math.floor(Math.random() * (a2 - a1) * a3) / a3;


    }
}