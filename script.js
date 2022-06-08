'use strict';
let arr = ['24243', '3252312', '24512', '12345', '532123', '42154521', '321125452'];

arr.forEach(function (element) {
    if (element.startsWith('2') || element.startsWith('4')) {
        console.log(element);
    }
});


let primeNums = function () {

    for (let i = 2; i <= 100; i++) {
        let count = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j !== 0) {
                continue;
            }
            count++;
        }

        if (count === 1) {
            console.log(i + `. Делители этого числа: 1 и ${i}`);
        }
    }
};

primeNums();