let arr = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8];

function treeSum(arr) {

    let newArr = arr.flat(Infinity);
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];


    }

    return alert(sum)

}

function treeSumloop(arr) {

    let newArr = [];
    let sum = 0;

       for (const item of arr) {
           if (Array.isArray(item) ){
                for (const subItem of item){
                    if (subItem === [] && subItem.length === 0){
                        continue;

                    }
                    newArr.push(subItem);

                }
            }else  newArr.push(item);







        }


    for (let i=0; i< newArr.length;i++){
        sum+=newArr[i];



    }
        alert(newArr);
        /*alert(sum);*/
}



/*treeSum(arr);*/
treeSumloop(arr);