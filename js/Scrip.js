
//FUNCION CREAR
function crearPelicula(obj){
    $.ajax({
        method: 'POST',
        url: '/cgi-bin/Proyecto_arquitectura/App.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
        },
        error: function(response){
            console.log("Error al crear pelicula")
            console.log(JSON.stringify(response))

        }
    }); 
}
$("#BTN_CREAR").click(function(e){
    e.preventDefault();
    var id = $("#id").val();
    var Nombre = $("#nombre").val();
    var Genero = $("#genero").val();
    var Año = $("#Anio").val();
    var Productora = $("#Productora").val();
    var Pais = $("#Pais").val();
    var Duracion = $("#Duracion").val();
    var Idiomas = $("#Idiomas").val();
    var Descripcion = $("#Descripcion").val();
    var obj= {id:id,Nombre:Nombre,Genero:Genero,Anio:Año,Productora:Productora,Pais:Pais,Duracion:Duracion,Idiomas:Idiomas,Descripcion:Descripcion};
    crearPelicula(obj);
})



//FUNCION ACTUALIZAR
function actualizarPelicula(obj){
    $.ajax({
        method: 'PUT',
        url: '/cgi-bin/Proyecto_arquitectura/App.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
        },
        error: function(response){
            console.log("Error al actualizar pelicula")
            console.log(JSON.stringify(response))

        }
    }); 
}


$("#BTN_ACTUALIZAR").click(function(){
    e.preventDefault();
    var id = $("#id").val();
    var Nombre = $("#nombre").val();
    var Genero = $("#genero").val();
    var Año = $("#Año").val();
    var Productora = $("#Productora").val();
    var Pais = $("#Pais").val();
    var Duracion = $("#Duracion").val();
    var Idiomas = $("#Idiomas").val();
    var Descripcion = $("#Descripcion").val();
    var obj= {id:id,Nombre:Nombre,Genero:Genero,Anio:Año,Productora:Productora,Pais:Pais,Duracion:Duracion,Idiomas:Idiomas,Descripcion:Descripcion};
    actualizarPelicula(obj);
})


//FUNCION Borrar
function borrarPelicula(obj){
    $.ajax({
        method: 'DELETE',
        url: '/cgi-bin/Proyecto_arquitectura/App.py',
        data: obj,
        dataType: "json",
        success: function(response) {
            console.log(response)
        },
        error: function(response){
            console.log("Error al eliminar pelicula")
            console.log(JSON.stringify(response))

        }
    }); 
}


$("#BTN_ELIMINAR").click(function(){
    e.preventDefault();
    var id = $("#id").val();
    var Nombre = $("#nombre").val();
    var Genero = $("#genero").val();
    var Año = $("#Año").val();
    var Productora = $("#Productora").val();
    var Pais = $("#Pais").val();
    var Duracion = $("#Duracion").val();
    var Idiomas = $("#Idiomas").val();
    var Descripcion = $("#Descripcion").val();
    var obj= {id:id,Nombre:Nombre,Genero:Genero,Anio:Año,Productora:Productora,Pais:Pais,Duracion:Duracion,Idiomas:Idiomas,Descripcion:Descripcion};
    borrarPelicula(obj);
})









