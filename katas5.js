// implemente aqui as funções de teste
function reverseString(string){
    let array = []
    for (let i = string.length; i >= 0; i--){
        array.push(string[i])
    }
    let stringReverse = array.toString().split(",").join("")
    return stringReverse
}

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testeReverseString2() {
    let result = reverseString("Paulo Dybala");
    let expected = "alabyD oluaP";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
// implemente aqui as funções de teste

// 2.Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. 
// Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:   
// >"bob likes dogs" retorna "dogs likes bob".

function reverseSentence(string){
    let str = string.split(" ").reverse().toString()
    let newStr = str.split(",").join(" ")
    return newStr
}

function testReverseSentence1() {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testReverseSentence2() {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

// 3.Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. 
// Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.

function minimumValue (array){
    let resul = array[0]
    array.forEach(element => {
        if (element < resul) {
            resul = element
        }
    });
    return resul
}

function testMinimumValue1 (){
    let result = minimumValue([1,2,3,4,5]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2 (){
    let result = minimumValue([62,2,1,0,5]);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)    
}

// 4.Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. 
// Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.

function maximumValue (array){
    let resul = array[0]
    array.forEach(element => {
        if (element > resul) {
            resul = element
        }
    });
    return resul
}

function testMaximumValue1 (){
    let result = maximumValue([1,2,3,4,5]);
    let expected = 5;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2 (){
    let result = maximumValue([62,2,1,0,5]);
    let expected = 62;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)    
}

// 5.Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. 
// Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão.

function calculateRemainder (a,b){
    resul = a%b
    return resul
}

function testCalculateRemainder1 () {
    let result = calculateRemainder(2,3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2 () {
    let result = calculateRemainder(5,2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

// 6.Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. 
// Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex: 

function distinctValues(array){
    let indices = []
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i]
        let idx = array.indexOf(elemento);
        if (idx !== -1){
            if (indices.indexOf(elemento) === -1){
                indices.push(elemento)
            }
        }
    }
    return indices.toString()
}

function testDistinctValues1 () {
    let result = distinctValues([5,2,5,7,8,7]);
    let expected = "5,2,7,8"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2 () {
    let result = distinctValues([5,7,8,9,5,49,5,5,4,3,7]);
    let expected = "5,7,8,9,49,4,3"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

