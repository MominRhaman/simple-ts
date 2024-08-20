class player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}

const mashrafi = new player('Mashrafi', 40, 'Bangladesh');
const Sakib = new  player('Sakib', 38, 'Bangladesh');

const players: player[] = [];

players.push(Sakib);
players.push(mashrafi);

console.log(players);