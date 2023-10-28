export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error("Персонаж уже добавлен в команду");
      } else {
        this.members.add(character);
      }
    }
  
    addAll(...characters) {
      characters.forEach(character => this.members.add(character));
    }
  
    toArray() {
      const newArray = Array.from(this.members);
      return newArray;
    }
  
    [Symbol.iterator]() {
      let newArray = this.toArray();
      let index = 0;
      let last = newArray.length - 1;
  
      return {
        next() {
          if (index <= last) {
            return {
              value: newArray[index++],
              done: false
            }
          }
  
          return {
            done: true
          }
        }
      }
    }
  }