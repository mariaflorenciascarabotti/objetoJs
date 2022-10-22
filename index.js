class Animal{
    constructor(nombre, dueña,raza,edad,actividades,comida, veterinario, vacunas) {
        this.nombre = nombre; // va asignación porque es una variable
        this.dueña  = dueña;
        this.raza   = raza;
        this.edad   = edad;
        this.actividades = actividades;
        this.comida = comida;
        this.veterinario = veterinario;
        this.vacunas = vacunas;
        
    }
 
}
let gato = new Animal("China","Gise","Común Europeo","4 años","Dormir y controlar el barrio por la ventana","Alimento balanceado y cada tanto pollo o atún","Cada 4 meses","Completas");
console.log(gato);
//inner.html inyecta info en la etiqueta seleccionada
document.querySelector("li").innerHTML = `Nombre: ${gato.nombre} </br> Dueña: ${gato.dueña} </br> Raza: ${gato.raza} </br> Edad: ${gato.edad} </br> Actividades: ${gato.actividades} </br> Comida: ${gato.comida} </br> Visita al veterinario: ${gato.veterinario} </br> Vacunas: ${gato.vacunas}`;