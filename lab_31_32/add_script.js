// Використати async/await для читання файлу (імітація) та обробки вмісту.

function readFileMock() {
   return new Promise((resolve) => {
      setTimeout(() => {
         const fakeContent = "Ім'я: Поліна\nМісто: Кривий Ріг\nФах: Інженерія ПЗ";
         resolve(fakeContent);
      }, 1000);
   });
}

async function processFile() {
   const output = document.getElementById("output");
   output.textContent = "Зчитування файлу...";
   const content = await readFileMock();
   output.textContent = content;
}
processFile();