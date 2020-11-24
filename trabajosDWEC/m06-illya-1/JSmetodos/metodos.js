function text(){
    var elemento = document.getElementById("primero")
    var palabra = 'Esternocleidomastoideo'
    var long = palabra.length
    elemento.innerHTML = ('La palabra ')+ palabra+ (' tiene ')+ long+ (' letras')
}
function num(){
    var numero = 2222
    var elemento = document.getElementById("segundo")
    var reConvertir = numero.toString()

    elemento.innerHTML= ('El numero ')+ numero +(' ha sido convertido en String : ')+ reConvertir
}
function matriu(){
var array = ['primero','segundo','tercero']
document.getElementById('tercero').innerHTML = array.toString()
}
function orderMatriu(){
    var Yearpersonas = ['25','22','18','30','15'];
    var savePoint = " "
    Yearpersonas.sort(function(a,b){return a - b})
    Yearpersonas.forEach(element => savePoint += element + "<br>")

        document.getElementById('cuarto').innerHTML = savePoint   
    
}