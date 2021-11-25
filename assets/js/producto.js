//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre, tamanio, edad, peso, precio, img, marcas) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.tamanio = tamanio;
            this.edad = edad;
            this.peso = parseFloat(peso);
            this.precio = parseFloat(precio);
            this.img = img;
            this.cantidad = 1;
            this.marcas = marcas;
    }
    agregarCantidad(valor){
        this.cantidad += valor;
    }
    subtotal(){
        return this.cantidad * this.precio;
    }
}