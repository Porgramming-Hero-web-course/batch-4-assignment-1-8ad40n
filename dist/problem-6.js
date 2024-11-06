"use strict";
const updateProfile = (myProfile, update) => {
    return Object.assign(Object.assign({}, myProfile), update);
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
