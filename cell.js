function Celda(i, j) {
    this.i = i;
    this.j = j;
    this.paredes = [true, true, true, true];
    this.visitada = false;

    this.checkNeighbors = function() {
        var neighbors = [];

        var top = matrix[index(i, j - 1)];
        var right = matrix[index(i + 1, j)];
        var bottom = matrix[index(i, j + 1)];
        var left = matrix[index(i - 1, j)];

        if (top && !top.visitada) {
            neighbors.push(top);
        }
        if (right && !right.visitada) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visitada) {
            neighbors.push(bottom);
        }
        if (left && !left.visitada) {
            neighbors.push(left);
        }

        //Se elige un vecino de forma aleatoria.
        if (neighbors.length > 0) {
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }

    }

    this.resaltar = function() {
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(0, 255, 0);
        rect(x, y, w, w);
    }

    this.show = function() {
        var x = this.i * w;
        var y = this.j * w;

        stroke(255);
        if (this.paredes[0]) {
            line(x, y, x + w, y);
        }
        if (this.paredes[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.paredes[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.paredes[3]) {
            line(x, y + w, x, y);
        }

        if (this.visitada) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }
    }
}
