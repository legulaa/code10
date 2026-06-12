
for (let i = 0; i <=25; i++) {
    if (i % 4 === 0) {
        continue;
         console.log(i)
    }
}

let num = +prompt('Введите число');
let fac = 1;
for (let i = 1; i <= num; i++) {
    fac *= i;
}

console.log(fac);

for (let i = 0; i < 8; i++) {
    let chess = '';
    for (let j = 0; j < 8; j++) {
        if ( (i + j) % 2 === 0) {
            chess += '#';
        } else {
            chess += '%';
        }
    }
    console.log(chess);
}