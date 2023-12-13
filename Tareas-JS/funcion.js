
//Tarea funciones js
function cualEsMayor(num1, num2, num3){
    let mayor
    mayor = num1
    if (num2 > mayor && num2 >= num3){
        mayor = num2 
    } else if (num3 > mayor && num3 >= num2) {
        mayor = num3
    }
    return mayor
}

console.log(cualEsMayor(1,2,3))