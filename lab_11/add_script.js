/* Створити об'єкт
"Комп'ютер" з методами увімкнути та вимкнути. */

const computer = {
   isOn: false,
   On() {
      if (!this.isOn) {
         this.isOn = true;
         console.log("Комп`ютер увімкнено");
      } else {
         console.log("Комп`ютер уже увімкнений");
      }
   },
   Off() {
      if (this.isOn) {
         this.isOn = false;
         console.log("Комп`ютер вимкнено");
      } else {
         console.log("Комп`ютер уже вимкнений");
      }
   }
};
computer.On();
computer.Off();