// class player {
//     name: string;
//     age: number;
//     country: string;
//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play() {
//         console.log(`${this.name} from ${this.country} is playing`);
//     }
// }
// const mashrafi = new player('Mashrafi', 40, 'Bangladesh');
// const Sakib = new  player('Sakib', 38, 'Bangladesh');
// const players: player[] = [];
// players.push(Sakib);
// players.push(mashrafi);
//
import { player } from "./classes/Player.js";
const mashrafi = new player('Mashrafi', 40, 'Bangladesh');
let Sakib;
Sakib = new player("Sakib", 38, "Bangladesh");
// Sakib.name = "Mashrafi", 40, "Bangladesh";
// Sakib.age = 40;
// Sakib.country = 'England';
// console.log(sakib.name);
// console.log(Sakib.age);
console.log(Sakib.country);
const players = [];
players.push(Sakib);
players.push(mashrafi);
//===========================================
//Object
// interface RectangleOptions {
//     width: number;
//     length: number;
//     }
// let threeDoptions = {
//     width: 30,
//     length: 20,
//     height: 10,
// }
// function drawRectangle(options: RectangleOptions) {
//     let width = options.width;
//     let length = options.length;
// }
// drawRectangle(threeDoptions);
// ===================================================
// GENERIC
// interface APIResponse<T> {
//     status: number;
//     type: string;
//     data: T;
// }
// const response1: APIResponse<string> = {
//     status: 200,
//     type: 'Good',
//     data: 'test'
// };
//ENUM
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: 'test'
};
console.log(response1);
