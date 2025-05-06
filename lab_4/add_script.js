/* Програма приймає оцінку студента (від 0 до 100) і виводить відповідну оцінку за шкалою:
90-100: "Відмінно"
70-89: "Добре"
50-69: "Задовільно"
0-49: "Не склав" */

let rating = 14;
if (rating >= 0 && rating <=49)
   console.log("Не склав");
else if (rating >= 50 && rating <= 69)
   console.log("Задовільно");
else if (rating >= 70 && rating <= 89)
   console.log("Добре");
else if (rating >= 90 && rating <= 100)
   console.log("Відмінно");
else console.log("Немає такої оцінки");