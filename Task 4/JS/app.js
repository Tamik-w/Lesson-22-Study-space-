const firstArray = [5, 3, 8, 5, 3, 2, 1, 2];

const makeUniq = (arr) => {
    const secondArray = new Set(arr);
    return [...secondArray];
}

console.log(makeUniq(firstArray));
