let num = 266219;
let massiveNum = Array.from(String(num)).map(i => Number(i));
//console.log(massiveNum) 
let result = 1;
for (let i = 0; i < massiveNum.length; ++i) {
    result *= massiveNum[i];
}
//console.log(result);