'use strict'

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

one.addEventListener('click', (e) => {
    // Написать рекурсивную функцию вычисления чисел Фибоначчи. На вход функции подавать длину конечного массива чисел.

    let num = prompt('Сколько чисел вывести?');
    let arr = [0, 1,];
    
    let feb = (num) => {
        if(arr.length < num) {
            arr.push((arr[arr.length - 1]) + (arr[arr.length - 2]));
            feb(num);
        } else {
            console.log(arr);
        };
    };

    (num !== '' && num !== null && !isNaN(Number(num))) ? feb(+num) : alert('Введите число!');  
});

two.addEventListener('click', (e) => {
    // Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию.
    // Встроенный метод массивов flat использовать нельзя.

    const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

    let flat = (arr) => {
        let arrNew = [];

        let getElem = (arr) => {
            arr.forEach(elem => {(Array.isArray(elem)) ? getElem(elem) : arrNew.push(elem)});
        };

        getElem(arr);
        return arrNew;
    }

    console.log(flat(arr)); 
});

three.addEventListener('click', (e) => {
    // Написать функцию, которая принимает целочисленный num и рисует спиральную матрицу num * num, где num - входной параметр.

    let num = prompt('Введите параметр спиральной матрицы');

    let matrix = (num) => {
        let arr = [];
        
        for (let i = 0; i < num; i++){
            arr[i] = [];
            for (var j = 0; j < num; j++) {
                arr[i][j] = 0;
            };
        };

        let pushArr = (arr) => {
            let long = Math.pow(num, 2);
            let step = 'right';
            let x = 0;
            let y = 0;

            let getLast = (val) => {
                switch (val) {
                    case 'left':
                        return 'up';
                    
                    case 'right':
                        return 'down';
                    
                    case 'up':
                        return 'right';
                    
                    case 'down':
                        return 'left';
                };
            };

            for(let i = 1; i <= long; i++) {
                arr[x][y] = i;
                
                switch (step) {
                    case 'left':
                        if(y < num && y >= 0) {
                            if(y == num - 1 || y == 0) {
                                step = getLast(step);
                                x = x - 1;
                                break;
                            } else {
                                if(arr[x][y - 1] == 0) {
                                    y = y - 1;
                                    break;
                                } else {
                                    step = getLast(step);
                                    x = x - 1;
                                    break;
                                };
                            };
                        } else {
                            step = getLast(step);
                            break;
                        };

                    case 'right':
                        if(y < num && y >= 0) {
                            if(y == num - 1) {
                                step = getLast(step);
                                x = x + 1;
                                break;
                            } else {
                                if(arr[x][y + 1] == 0) {
                                    y = y + 1;
                                    break;
                                } else {
                                    step = getLast(step);
                                    x = x + 1;
                                    break;
                                };
                            };
                        } else {
                            step = getLast(step);
                            break;
                        };

                    case 'up':
                        if(x < num && x >= 0) {
                            if(x == num - 1) {
                                step = getLast(step);
                                y = y + 1;
                                break;
                            } else {
                                if(arr[x - 1][y] == 0) {
                                    x = x - 1;
                                    break;
                                } else {
                                    step = getLast(step);
                                    y = y + 1;
                                    break;
                                };
                            };  
                        } else {
                            step = getLast(step);
                            break;
                        };

                    case 'down':
                        if(x < num && x >= 0) {
                            if(x == num - 1) {
                                step = getLast(step);
                                y = y - 1;
                                break;
                            } else {
                                if(arr[x + 1][y] == 0) {
                                    x = x + 1;
                                    break;
                                } else {
                                    step = getLast(step);
                                    y = y - 1;
                                    break;
                                };
                            };
                        } else {
                            step = getLast(step);
                            break;
                        };
                };
            };

            return arr;
        };

        return pushArr(arr);
    };

    console.log(matrix(num));
});


// if(x == step && y == num - step - 1) { //--------------------------------------- a так выглядит логика основного цикла нормального человека.
//     step = step - 1;
// };

// if((y >= x && y < step) || (x - 1 == y && x == num - step - 1)) {
//     y = y + 1;
// } else if(y <= x && y >= num - step) {
//     y = y - 1;
// } else if(x <= y && x < step) {
//     x = x + 1;
// } else if(x >= y && x >= num - step) {
//     x = x - 1;
// };