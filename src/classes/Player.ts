export class player {
    constructor(
          private name: String,
          public age: number,
          readonly country: string
      ) {}
  
      play() {
          console.log(`${this.name} from ${this.country} is playing`);
      }
  }
  