const draws = [];
const onces = [];
let hasRun = false;

export function registerDraw(func) {
    if (!hasRun)
        draws.push(func);
}

export function registerSetup(func) {
    if (!hasRun)
        onces.push(func);
}

export function registerLoop(func, s) {
    if (!hasRun)
        setInterval(func, 1000/s);
}

export async function runLoop() {
    if (!hasRun) {
        for (let i of onces) {
            await i();
        }
        drawLoop();
    }
}

function drawLoop() {
    for (let i of draws) {
        i();
    }
    requestAnimationFrame(drawLoop);
}