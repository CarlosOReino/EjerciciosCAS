let caja = [
  [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], //billetes
  [0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1],
]; //cantidades en los billetes

let pago = [
  [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], //billetes
  [0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0],
]; //cantidades en los billetes
let importe = 5; // precio del artículo
// este efectivo va devolver
function total(efectivo) {
  let resultado = 0;
  for (let i = 0; i < efectivo[0].length; i++) {
    resultado += efectivo[0][i] * efectivo[1][i];
  }
  resultado = parseFloat(resultado.toFixed(2));
  efectivo[0].push(resultado);
  return efectivo;
}
// función para buscar un elemento del array
function buscar(efectivo, cambio) {
  let pos = 0;
  while (efectivo[0][pos] >= cambio) {
    pos++;
  }
  if (efectivo[0][pos - 1] == cambio) {
    return pos - 1;
  } else 
        return pos;
}

function hayCambio(efectivo, cambio) {
  let pos = buscar(efectivo, cambio);
  let nBilletes;
  console.log("cambio: " + cambio);
  console.log("pos: " + pos);
  console.log("efectivo[1].length: " + efectivo[1].length);
  while (cambio > 0 && pos < efectivo[1].length) {
    console.log("cambio: " + cambio);
    console.log("pos: " + pos);
    nBilletes = Math.trunc(cambio / efectivo[0][pos]);
    if (nBilletes <= efectivo[1][pos] && nBilletes >= 1) {
      cambio -= efectivo[0][pos] * nBilletes;
      pos = buscar(efectivo, cambio);
    } else {
      pos++;
    }
  }
  return cambio == 0;
}
//-----------------------------------------------------------------------
pago = total(pago);
caja = total(caja);
alert(hayCambio(caja, 45));

//Caso donde dan el importe justo
/*if (importe - pago[0][pago[0].length - 1] == 0) {
  alert("Importe justo");
} else {
  //Caso donde no hay cambio
  if (pago[0][pago[0].length - 1] - importe > caja[0][caja[0].length - 1]) {
    alert("Cambio no disponible");
  } else {
    //Caso donde me pagan menos de lo que vale
    if (pago[0][pago[0].length - 1] < importe) {
      alert("Falta dinero!");
    } else {
      let cambio = pago[0][pago[0].length - 1] - importe;
    }
  }
}
*/
//alert(total(pago));
