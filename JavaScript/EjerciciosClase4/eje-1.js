let a = prompt("Ingrese tres números enteros: ");
let b = prompt("Ingrese otro número: ");
let c = prompt("Ingrese otro número: ");
let menor;
if (a <= b && a <= c) {
  menor = a;
} else if (b <= a && b <= c) {
    menor = b;
} else {
  menor = c;
}

alert("El número menor es: " + menor);
