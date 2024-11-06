const getProperty = <T, K extends keyof T>(obj: T, key: K)=>{
    return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));