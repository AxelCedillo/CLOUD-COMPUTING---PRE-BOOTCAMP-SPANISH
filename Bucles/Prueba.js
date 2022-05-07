var caramelos = 0;
var kilometro = 0;
var hora = 0;

while(kilometro <= 10){

    if((kilometro % 3 == 0) &&  (kilometro != 0)){
        caramelos ++;
        console.log("Arrojar Caramelo!!")
        console.log("Kilometro: " + kilometro)
        console.log("Hora: " + hora)
        console.log("Caramelos: " + caramelos)
        console.log("-------------------------------")
    }

    hora++;
    kilometro+=3;
    
}