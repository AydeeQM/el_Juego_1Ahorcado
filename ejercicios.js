//EJERCICIO 1
//var numUser = prompt("Ingresa Número");
function numCapicua(numUser){
  numUser=numUser.toLowerCase().replace(/\s/g,"");
  var alReves=numUser.split("").reverse().toString();
  for (var i = 0; i < ((alReves.length)-1); i++) {
    alReves=alReves.replace(",","");
      };
      if(numUser==alReves){
        resultado="es un capicua";
      }
      else{
        resultado="no es un capicua";
      }
      alert("El numero: "+resultado);
    }
    //numCapicua(numUser);

//EJERCICIO 2
function potencia (num, expo){
  var resul = Math.pow(num, expo);
  //console.log(resul);
}
potencia(2,3);

//EJERCICIO 3
function contarCaracter(palabra){
  var arr = [];
  var contarLetra='a';
  var contador= 0;
  for(var i = 0; i<palabra.length; i++){
    for(var j=0; j<palabra[i].length; j++){
      arr.push(palabra[i][j].split(''));
      if(arr[i][j]==contarLetra){
      contador ++;
    }
    }
  } 
  console.log(contador);
  console.log(arr);
}
console.log(contarCaracter(['casa', 'mamamia']));