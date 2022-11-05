function treeSum(){

    let arr = [ 5, 7,
        [ 4, [2], 8, [1,3], 2 ],
        [ 9, [] ],
        1, 8];

    let newArr = arr.flat(Infinity);
    let count = 0;

    for (let i=0; i< newArr.length;i++){
        count+=newArr[i];



    }
    return alert(count)

}