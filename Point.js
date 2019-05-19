export class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(p) {
        return new Point(this.x + p.x, this.y + p.y);
    }

    sub(p) {
        return new Point(this.x - p.x, this.y - p.y);
    }

    mul(n) {
        return new Point(this.x * n, this.y * n);
    }

    div(n) {
        return new Point(this.x / n, this.y / n);
    }
}