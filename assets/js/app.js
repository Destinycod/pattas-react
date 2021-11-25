//PASAR TODO LO JAVASCRIPT A JQUERY

const contenedorProductos = document.getElementById('productosContenedor');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

function productosUIjQuery(productos, id){
    $(id).empty();
    for (const producto of productos) {
      $(id).append(`<div class="card" style="width: 20rem;">
                      <img src= "${producto.img}" class="card-img-top imgProductos" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p class="card-text">${producto.tamanio}</p>
                        <p class="card-text">${producto.edad}</p>
                        <p class="card-text bottomP">Peso: ${producto.peso}kg</p>
                        <a class="btnAnadirCarrito" id=boton${producto.id}><i class="fas"><img class="anadirCarritoImg" src="../img/plus-sign.png"></i></a>
                      </div>
                    </div>`);
        let boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click',()=>{
            agregarAlCarrito(producto.id);
        });
    }
}

function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(productoR => productoR.id == id);
    if(repetido){
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`;
        actualizarCarrito();
    }else{
        let productoAgregar = productos.find(prod => prod.id == id);
        console.log(productoAgregar);
        carritoDeCompras.push(productoAgregar);
    
        productoAgregar.cantidad = 1;
        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML= `<p>${productoAgregar.nombre}</p>
                        <p>Precio:${productoAgregar.precio}</p>
                        <p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                        <button id=eliminar${productoAgregar.id} class="boton-eliminar"><img src="../img/bin.png" <i class="fas fa-trash-alt"></i></button>`;

        contenedorCarrito.appendChild(div) ; 
        actualizarCarrito();
        let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`);
        botonEliminar.addEventListener('click', ()=>{
            botonEliminar.parentElement.remove();
            carritoDeCompras = carritoDeCompras.filter(el => el.id != productoAgregar.id);
            actualizarCarrito();
        });
    }
    $("#carritoConfirmar").on("click",enviarCompra);
}

function actualizarCarrito() {
   contadorCarrito.innerText = carritoDeCompras.reduce((acc , el)=> acc + el.cantidad,0);
   precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad),0);
}

function enviarCompra() {
    $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(carritoDeCompras),function(respuesta,estado) {
      console.log(estado);
      console.log(respuesta);
      if(estado == "success"){
        //Vacio el carrito
        $('#carrito-contenedor').empty();
        contadorCarrito.innerText = 0;
        precioTotal.innerText = 0;
        agradecimiento('#carrito-contenedor');
      }else{
        console.log('Los datos no se enviaron correctamente');
      }    
  
    })  
}

function agradecimiento(id){
  $(id).append(`<div>
              <h3>¡Gracias por su compra!</h3>
                </div>`);
}


const botonEnviar = document.getElementsByClassName("boton--enviar");
const modal = document.getElementsByClassName("modal");
function Enviar(){
  botonEnviar.addEventListener('click', ()=> {
    modal.classList.toggle('modal-active');
  });
}
