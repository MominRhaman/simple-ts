"use strict";
// GENERICS
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh"
});
// // let user = "Mashrafi";
addID(user);
// ENUM
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: 'test'
};
console.log(response1);
//==========================================
// TUPLES
let a = [3, 'hello', { p: 3 }];
let b = [4, 'Hello', { t: 1 }]; //fixed thakte hbe
b.push();
