
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
    var Año = $("#Año").val();
    var Productora = $("#Productora").val();
    var Pais = $("#Pais").val();
    var Duracion = $("#Duracion").val();
    var Idiomas = $("#Idiomas").val();
    var Descripcion = $("#Descripcion").val();
    var obj= {id:id,Nombre:Nombre,Genero:Genero,Año:Año,Productora:Productora,Pais:Pais,Duracion:Duracion,Idiomas:Idiomas,Descripcion:Descripcion};
    crearPelicula(obj);
})













//FUNCION ACTUALIZAR
$("#BTN_ACTUALIZAR").click(function(){




})
