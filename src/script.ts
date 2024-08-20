// GENERICS

const addID = <T extends {
    name: string;
    age: number;

}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
});

// // let user = "Mashrafi";

addID(user);

// ENUM

enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN}
interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: 'test'
};

console.log(response1);

//==========================================

// TUPLES

let a = [3, 'hello', {p: 3}];

let b: [number, string, object,] = [4, 'Hello', {t: 1}];      //fixed thakte hbe

b.push();

