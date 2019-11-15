// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
// чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
/*let comperison = (a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

let a = parseInt(prompt("a = "));
let b = parseInt(prompt("b = "));

alert(comperison(a, b));*/

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


/*let combining = (x1, x2, x3) => {
    let str = x1 + x2 + x3;
    return parseInt(str);

}
let x1 = prompt("x1 = ");
let x2 = prompt("x2 = ");
let x3 = prompt("x3 = ");

alert(combining(x1, x2, x3));*/

// 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

/*let sqr = (s1, s2) => {
    if (isNaN(s1) || isNaN(s2)) {
        return s1 * s1
    } else {
        return s1 * s2;
    }
}

let s1 = parseInt(prompt("s1 = "));
let s2 = parseInt(prompt("s2 = "));
alert(sqr(s1, s2));*/

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
let num;
let perfect = (num) => {
    let divisors = [];
    let divisor = 0;
    for (i = num - 1; i >= 1; i--) {
        let divisor = i;
        if (num % divisor == 0) {
            divisors.push(divisor);
        }
    }
    let sum = 0;
    for (let number of divisors) {
        sum += number;
    }

    if (sum == num) {
        // return (" It is perfect number");
        return true
    }
    // return (" It is't perfect number");
    return false
}

// let num = parseInt(prompt("введите число"));

console.log(perfect(num));

//6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// ?????находит первое и останавливается

let find_perfect = (min, max) => {
    for (let num = max; num >= min; num--) {
        inspect = perfect(num);
        if (inspect == true) {
            return num;
        }
    }
}

let min = parseInt(prompt("введите число min"));
let max = parseInt(prompt("введите число max"));

console.log(find_perfect(min, max));