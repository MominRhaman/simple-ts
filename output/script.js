"use strict";
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new player('Mashrafi', 40, 'Bangladesh');
const Sakib = new player('Sakib', 38, 'Bangladesh');
const players = [];
players.push(Sakib);
players.push(mashrafi);
console.log(players);
