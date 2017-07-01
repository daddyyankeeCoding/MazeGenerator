var colms, filas;
var w = 20;
var matrix = []

//Celda actual
var current;

//Pila de celdas
var stack = [];

//Funcion auxiliar para convertir indices de 2d en 1d.
function index(i, j) {
    if (i < 0 || j < 0 || i > colms - 1 || j > filas - 1) {
        return -1;
    }
    return i + j * colms;
}

function setup() {

    createCanvas(600, 600);
    colms = floor(width / w);
    filas = floor(height / w);
    //frameRate(5);

    for (var j = 0; j < filas; j++) {
        for (var i = 0; i < colms; i++) {
            var celda = new Celda(i, j);
            matrix.push(celda);
        }
    }

    current = matrix[0];
}

function draw() {
    background(51);
    for (var i = 0; i < matrix.length; i++) {
        matrix[i].show();
    }

    current.visitada = true;
    current.resaltar();

    var siguiente = current.checkNeighbors();

    if (siguiente) {
        siguiente.visitada = true;

        stack.push(current);

        quitarPared(current, siguiente);

        current = siguiente;

    } //Backtracking
    else if (stack.length > 0) {
        current = stack.pop();
    }
}

//Quita la pared en medio de 2 celdas
function quitarPared(a, b) {
    var x = a.i - b.i;
    var y = a.j - b.j;

    if (x === 1) {
        a.paredes[3] = false;
        b.paredes[1] = false;
    } else if (x === -1) {
        a.paredes[1] = false;
        b.paredes[3] = false;
    }

    if (y === 1) {
        a.paredes[0] = false;
        b.paredes[2] = false;
    } else if (y === -1) {
        a.paredes[2] = false;
        b.paredes[0] = false;
    }
}
