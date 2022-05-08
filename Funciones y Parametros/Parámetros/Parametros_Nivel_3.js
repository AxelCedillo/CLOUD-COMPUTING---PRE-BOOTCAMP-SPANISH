function greet(name){

    if(name == "Count Dooku"){

        console.log("¡Voy por ti, Dooku!")

    }

    else{

    console.log("¡Buen día, " + name)

    }

    var time = new Date()
    console.log("La hora actual es " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    
    // Codigo de ayuda tomado de: 
    // https://es.javascript.info/date

}

// var nombre = "Axel Cedillo Olea";
var nombre = "Count Dooku";
greet(nombre)