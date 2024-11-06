"use strict";
const getProperty = (obj, key) => {
    return obj[key];
};
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "age"));
