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

import { player } from "./classes/Player.js"
const mashrafi = new player('Mashrafi', 40, 'Bangladesh');
const Sakib = new  player('Sakib', 38, 'Bangladesh');

// Sakib.name = "Mashrafi", 40, "Bangladesh";
// Sakib.age = 40;
// Sakib.country = 'England';
// console.log(sakib.name);

console.log(Sakib.age);
console.log(Sakib.country);

const players: player[] = [];

players.push(Sakib);
players.push(mashrafi);

