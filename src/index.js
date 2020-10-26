import { tracking } from "./tracking";

window.addEventListener('load', () => {
  tracking();
});
const contacts = document.getElementById("contacts");
const trackings = document.getElementById("trackings");

if (contacts) {
  fetch("http://localhost:3000/api/v1/contacts")
  .then(response => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item)
      const contact = `<li class=contact> ${item.name} - ${item.email} </li>`;
      contacts.insertAdjacentHTML("beforeend", contact);
    });
  });
}

if (trackings) {
  fetch("http://localhost:3000/api/v1/trackings")
  .then(response => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item)
      const tracking = `<tr class="tracking">
      <td> ${item.uuid} </td>
      <td> ${item.page} </td>
      <td> ${item.created_at} </td>
    </tr>`;
      trackings.insertAdjacentHTML("beforeend", tracking);
    });
  });
}

const thisForm = document.getElementById('addContact');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://localhost:3000/api/v1/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});


