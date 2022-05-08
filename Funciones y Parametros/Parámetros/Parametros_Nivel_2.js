function greet(name){
    console.log("¡Buen día, " + name)
    var time = new Date()
    console.log("La hora actual es " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    
    // Codigo de ayuda tomado de: 
    // https://es.javascript.info/date
}

var nombre = "Axel Cedillo Olea";

greet(nombre)