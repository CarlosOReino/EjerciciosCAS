var ordenar=["burro", "gato", "loro", "perro", "armadillo", "camaleon", "caballo"];
function burbuja(arreglo){
    for(i=0;i<(arreglo.length-1); i++)

    for(j=0;j<(arreglo.length-i); j++){

        if(arreglo[j]>arreglo[j+1]){
            aux=arreglo[j];
            arreglo[j]=arreglo[j+1];
            arreglo[j+1]=aux;
        }
    }
    return arreglo;
}
ordenar=burbuja(ordenar);
alert(ordenar);