
$('#productosContenedor').hide();

$.get("../js/productos.json", function (respuesta, estado) {
    console.dir(respuesta);   
    console.log(estado);
    if(estado == "success"){
        for (const objeto of respuesta) {            
            productos.push(new Producto(objeto.id, objeto.nombre, objeto.tamanio, objeto.edad, objeto.peso, objeto.precio, objeto.imagen, objeto.marca) );
        }  
        //GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
        productosUIjQuery(productos, '#productosContenedor');
    }else{
        console.log('Los datos no se cargaron correctamente');
    }  
});

$(document).ready(function(){

    $("#arriba").click(function (e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(".header").offset().top
        }, 2000);
    })
});

$(window).on('load', function(){
    $("#cargaImagenes").remove();
    $('#productosContenedor').fadeIn(2000);
});