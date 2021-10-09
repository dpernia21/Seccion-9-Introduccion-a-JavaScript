// Sintaxis más de métodos pero siguiendo siendo functions
// Métodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    borrarCancion: function(id){
        console.log(`Eliminando la canción: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

// reproductor.borrarCancion = function(id) {
//     console.log(`Eliminando la canción: ${id}`)
// } SINTAXIS DE FUNCIÓN

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy metal');
reproductor.reproducirPlaylist('Regueton');