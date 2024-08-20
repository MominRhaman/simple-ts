"use strict";
// GENERICS
// const addID = <T extends {
//     name: string;
//     age: number;
// }>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// };
// let user = addID({
//     name: "Mashrafi",
//     age: 40,
//     country: "Bangladesh"
// });
// // let user = "Mashrafi";
// addID(user);
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
