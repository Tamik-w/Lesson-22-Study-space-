let firstArray = [5, 3, -4, 25, 32, -16, 6];

let secondArray = [21, -30, 9, 5, 12, -19, 5, 25];

function countNumbers(firstArray, secondArray){

    for(let i = 0; i < secondArray.lenght; i++){
        if(+firstArray[i] > +secondArray[i]){
            return console.log('a')
        }
        else if(+firstArray[i] < +secondArray[i]){
            return console.log('a')
        }
        else if(firstArray[i] == secondArray[i]){
            return 3;
        }
        else{
            return 'error'
        }
    }

}

console.log(countNumbers(firstArray, secondArray));