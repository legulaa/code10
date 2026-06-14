function calculateFinalPrice (num1, num2, num3,) {
    let procent = num2 / 100;
    let num4 = num1 - (num1 * procent);
    let finalPrice = num4 + (num4 * num3);
    return finalPrice
}
console.log(calculateFinalPrice(100, 10, 0.2))


function checkAccess (user, password) {
    if(user == 'admin' && password == '123456') {
        return 'Доступ разрешен!'
    } else {
        return 'Достур запрещен!'
    }
}
console.log(checkAccess('admin', '123456'))


function getTimeOfDay (num) {
    if (num >= 0 && num <=5 ) {
        return 'Ночь'
    } else if (num >= 6 && num <= 11) {
        return 'Утро'
    } else if ( num >= 12 && num <= 17) {
        return 'День'
    } else if ( num >= 18 && num <=23) {
        return 'Вечер'
    } else {
        return 'Некорректное время!'
    }
}
console.log(getTimeOfDay(18))

function findFirstEven (start, end) {
    let num1 = start;
    let num2 = end;
    for( let i = num1; i <= num2; i++) {
        if(i % 2 === 0) {
            return i
        } else {
            return 'Нет четных чисел!'
        }
    }
} 
console.log(findFirstEven(1, 1))
