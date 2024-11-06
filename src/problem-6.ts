
interface Profile{
    name: string;
    age: number;
    email: string;
}

const updateProfile = (myProfile: Profile, update: Partial<Profile>) : Profile =>{
    return {...myProfile, ...update};
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
