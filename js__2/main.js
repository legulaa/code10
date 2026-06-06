//#1
const x = 33;
if (x % 2 === 0) {
    console.log('Число четное')
} else {
    console.log('Число не четное')
}
//#2
const age = 70;
const discount = age < 18 ? 'Скидка 10%' : age > 65 ? 'Скидка 30%' : 'Скидка 20%';
console.log(discount);
//#2.2
const age_2 = 70;
switch (true) {
    case age_2 < 18:
        console.log('Скидка 10%');
        break;
    case age_2 > 65:
        console.log('Скидка 30%');
        break;
    default:
        console.log('Скидка 20%');
}
//#3
const userName = prompt('Ввод пользователя');
const password = prompt('Пароль пользователя');
if( userName === 'admin' || userName === 'user' && password === '123456'){
    alert('Вы вошли успешно!');
} else {
  alert('Вы отменили ввод');
}
 


