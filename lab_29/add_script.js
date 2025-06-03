/* Створити список
контактів, які зберігаються в LocalStorage. */

window.onload = showContacts;

function addContact() {
   const name = nameInput.value.trim();
   const phone = phoneInput.value.trim();
   if (!name || !phone) return;

   const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
   contacts.push({ name, phone });
   localStorage.setItem("contacts", JSON.stringify(contacts));
   nameInput.value = "";
   phoneInput.value = "";
   showContacts();
}

function showContacts() {
   contactList.innerHTML = "";
   (JSON.parse(localStorage.getItem("contacts")) || []).forEach(c => {
      contactList.innerHTML += `<li>${c.name}: ${c.phone}</li>`;
   });
}

function clearContacts() {
   localStorage.removeItem("contacts");
   showContacts();
}