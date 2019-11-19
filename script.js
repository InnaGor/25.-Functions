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
// или решение 2:
// return a==b?0......... посмотреть

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
/*
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


let find_perfect = (min, max) => {
    let perfect_numbers = [];
    for (let num = max; num >= min; num--) {
        if (perfect(num)) {
            perfect_numbers.push(num);
        }
    }
    return perfect_numbers;
};

let min = parseInt(prompt("введите число min"));
let max = parseInt(prompt("введите число max"));

console.log(find_perfect(min, max));*/

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) 
// и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

/*let h = +prompt("введите число часы", "");
let m = +prompt("введите число минуты");
let s = +prompt("введите число секунды");*/
// let showTime = (h, m, s) => {
//     if (h > 24 || m > 60 || s > 60) alert("введите правильные данные");
//     if (h < 10) h = `0${h}`;
//     if (m < 10) m = `0${m}`;
//     if (s < 10) s = `0${s}`;
//     if (s == undefined) s = `00`;
//     if (m == undefined) m = `00`;
//     return (`${h}:${m}:${s}`);
// }


/*alert(showTime(h, m, s));*/
// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
/*let h = +prompt("введите число часов", "");
let m = +prompt("введите число минут");
let s = +prompt("введите число секунд");*/

// let showSeconds = (h, m, s) => {
//     let seconds = s + m * 60 + h * 60 * 60;
//     return seconds;
// }
// alert(showSeconds(h, m, s));*/


//9.  Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч: мм: сс».




// let calcTime = (sec) => {
//     let hours = Math.floor(sec / 3600); //60 *60
//     let minutes = Math.floor((sec % 3600) / 60);
//     let seconds = Math.floor((sec % 3600) % 60);
//     if (hours < 10) hours = `0${hours}`;
//     if (minutes < 10) minutes = `0${minutes}`;
//     if (seconds < 10) seconds = `0${seconds}`;

//     return `${hours}:${minutes}:${seconds}`;
// }
// let sec = +prompt("введите число секунд", "");
// alert(calcTime(sec));

//10. Написать функцию, которая считает разницу между датами.Функция принимает 6 параметров, которые описывают 2 даты, 
// и возвращает результат в виде строки «чч: мм: сс».  При выполнении задания используйте функции из предыдущих 2 - х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч: мм: сс»

// работает только если время 2 дня больше!!!!!!

// let timeDiference = (h1, m1, s1, h2, m2, s2) => {
//     let seconds10_1 = showSeconds(h1, m1, s1);
//     let seconds10_2 = showSeconds(h2, m2, s2);
//     let secDiffer = seconds10_2 - seconds10_1;
//     return calcTime(secDiffer);
// }


// let h1 = +prompt("введите часы 1го дня", "");
// let m1 = +prompt("введите минуты 1го дня", "");
// let s1 = +prompt("введите секунды 1го дня", "");

// let h2 = +prompt("введите часы 2го дня", "");
// let m2 = +prompt("введите минуты 2го дня", "");
// let s2 = +prompt("введите секунды 2го дня", "");
// alert(timeDiference(h1, m1, s1, h2, m2, s2))

