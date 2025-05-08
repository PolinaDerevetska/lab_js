class Student {
   constructor(name) {
      this.name = name;
   }
   sayHello() {
      console.log("Привіт, я " + this.name);
   }
}
let student1 = new Student("Поліна");
student1.sayHello();