class user {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  // métodos
  // método privado
  #speak() {
      return 'Hello';
  }
  greeting() {
      return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
      return this.age;
  }
  set #uAge(n) {
      this.age = n;
  }
}

const petra = new user('Petra', '20');
console.log(petra.uAge)
console.log(petra.uAge = 15)