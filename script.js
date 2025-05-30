const first = new Promise((resolve) => {
   setTimeout(() => {
      console.log("Перший проміс");
      resolve(10);
   }, 1000);
});

first
   .then((value1) => {
      console.log("Отримано з першого:", value1);
      return value1 * 2;
   })
   .then((value2) => {
      console.log("Другий проміс, значення:", value2);
      return value2 + 5;
   })
   .then((value3) => {
      console.log("Третій проміс, результат:", value3);
   })
   .catch((error) => {
      console.error("Сталася помилка:", error);
   });