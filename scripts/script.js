'use strict'

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

one.addEventListener('click', (e) => {
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
    let num = prompt('Введите параметр спиральной матрицы');


    let matrix = (num) => {
        let arr = [];
        
        for (let i = 0; i < num; i++){
            arr[i] = [];
            for (var j = 0; j < num; j++) {
                arr[i][j] = 1;
            };
        };

        let pushArr = (arr) => {
            let steps = num - 1;
            let x = 0;
            let y = 0;

            for(let i = 1; i <= Math.pow(num, 2); i++) {
                arr[x][y] = i;

                if(x == steps && y == num - steps - 1) steps--;
                if((y >= x && y < steps) || (x - 1 == y && x == num - steps - 1)) y++;
                else if(y <= x && y >= num - steps) y--;
                else if(x <= y && x < steps) x++;
                else if(x >= y && x >= num - steps) x--;
            };

            return arr;
        };

        return pushArr(arr);
    };

    console.log(matrix(num));
});