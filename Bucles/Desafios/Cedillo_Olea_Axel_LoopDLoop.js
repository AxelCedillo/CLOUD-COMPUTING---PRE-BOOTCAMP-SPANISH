//  ¿Qué variables necesitamos?
//  R. Dos variables numericas, un contador para almacenar los caramelos arrojados por el dispositivo.
//  y la otra donde se almacene la distancia recorrida por el atleta

var caramelos = 0;
var kilometro = 0;

//  ¿Cómo sabemos que necesitamos un bucle aquí?
//  R. Debi a que el corredor va a realizar una tarea ciclica, es nesesario representar su actividad con un bucle.

//  ¿Cuál es el punto de partida del bucle?
//  R. Cuando el corredor empieze su trayecto en el kilometro 0.
while(kilometro <= 10){
    //  ¿Cómo sabrá parar?
    //  R. Cuando la condicion (kilometro <= 10) no se cumpla, ya que estamos superando el limite en donde
    //  el dispositivo dejara de arrojar caramelos.

    if((kilometro % 3 == 0) &&  (kilometro != 0)){
        caramelos ++;
        console.log("Arrojar Caramelo!!")
        console.log("Kilometro: " + kilometro)
        console.log("Caramelos: " + caramelos)
        console.log("----------------------------")
    }

    //¿Cuál es el incremento para cada iteración del bucle?
    //Se incrementara la distancia recorrida 1 kilometro por cada ciclo del loop.

    kilometro++;
    
}