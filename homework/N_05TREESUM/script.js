const arr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8];


function treeSumRecursion (arr){
    let sum = 0;
    for (let item of arr){

        (Array.isArray(item)) ? sum += treeSumRecursion(item):sum += item;

    }
    return sum;

}



    console.log(treeSumRecursion(arr));


