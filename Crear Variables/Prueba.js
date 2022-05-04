// Variables necesarias

//Variable Altura (Numero)
var altura = 110;

//Variable Edad (Numero)
var edad = 15;

//Variable de estatus(Booleano)

var estatus = false;

//  Condicional para cambiar el estatus del la persona
    if(altura > 100 && edad > 10) {

        //En caso de contar con los requerimientos, su estado pasa a ser "True"
        estatus = true;

        }
    
    //  Condicional en caso de tener los requerimientos para entrar a la atraccion
    if(estatus) {
        console.log("¡Súbete, chico!");
    }
    //  Condicional en caso de no tener los requerimientos para entrar a la atraccion
    else if(!estatus){
        console.log("Lo siento, chico. Tal vez el próximo año");
    }
    //  En caso de contar con error, se mostrara en consola
    else{
        console.log("Error")
    }