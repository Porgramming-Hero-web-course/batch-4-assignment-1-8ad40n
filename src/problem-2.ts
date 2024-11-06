const removeDuplicates = (arr : number[]) : number [] =>{
    let newArr: number[] = [...new Set(arr)];
    return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
