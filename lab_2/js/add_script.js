/* Оголоси змінну message та запиши в неї повідомлення про покупку,
рядок у форматі: "You picked <имя товара>, price per item is <цена товара> credits".
 Де <имя товара> це <цена товара> значення змінних productName і pricePerItem.
  Використовуй синтаксис шаблонних рядків.

  const productName = "Droid";
  const pricePerItem = 3500;
*/

const productName = "Droid";
const pricePerItem = 3500;
let message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message); 
