const firstArray = [5, 3, -4, 25, 32, -16, 6];

const secondArray = [21, -30, 9, 5, 12, -19, 5, 25];

firstArray.forEach((item, index, array) => {
    secondArray.forEach((item2, index2, array2) => {
        if(item > +item2){
            console.log(`${item} > ${item2}`);
        }
        else if(item < +item2){
            console.log(`${item} < ${item2}`);
        }
        else if(item === +item2){
            console.log(`${item} = ${item2}`);
        }
        else{
            return 'error'
        }
    });
});