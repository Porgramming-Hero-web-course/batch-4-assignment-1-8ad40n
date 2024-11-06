
const sumArray = (arr : number[]) : void =>{
    let sum : number = 0;
    for (let i of arr){
        sum += i;
        
    }
    console.log(sum); 
}


sumArray([1, 2, 3, 4, 5]);
