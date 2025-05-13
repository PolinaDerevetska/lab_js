// Створити об'єкт із вкладеним методом та перевірити this.

let user = {
   name: "Поліна",
   greet: function () {
      console.log("Привіт, я " + this.name);
      let inner = function () {
         console.log("Внутрішній this:", this);
      };
      inner();
   }
};
user.greet();