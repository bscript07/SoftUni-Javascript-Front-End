const baseURL = 'http://localhost:3030/jsonstore/gifts/';
let currentId = null;

const giftInputElement = document.getElementById("gift");
const forInputElement = document.getElementById("for");
const priceInputElement = document.getElementById("price");

const addBtn = document.getElementById("add-present");
const editBtn = document.getElementById("edit-present");

const loadPresentsBtn = document.getElementById("load-presents");
const inputGiftListItems = document.getElementById("gift-list");

loadPresentsBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', addItem);
editBtn.addEventListener('click', onEdit);

function createRecord(record) {
    const container = document.createElement('div'); 
    container.className = 'gift-sock';

    container.innerHTML = `
        <div class="content">
          <p>${record.gift}</p>
          <p>${record.for}</p>
          <p>${record.price}</p>
        </div>
        <div class="buttons-container">
            <button class="change-btn">Change</button>
            <button class="delete-btn">Delete</button>
        </div>`;

    container.querySelector('.change-btn').addEventListener('click', () => editRecord(record));
    container.querySelector('.delete-btn').addEventListener('click', () => onDelete(record._id, container));
    
    return container;
}

async function onLoad() {

    inputGiftListItems.innerHTML = "";
    const response = await fetch(baseURL);
    const data = await response.json();

    Array.from(Object.values(data)).forEach(record => {
        inputGiftListItems.appendChild(createRecord(record));
    });
}

async function addItem() {
    const newRecord = {
        gift: giftInputElement.value,
        for: forInputElement.value,
        price: priceInputElement.value
    };

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
    });

    if (response.ok) {
        giftInputElement.value = '';
        forInputElement.value = '';
        priceInputElement.value = '';

        onLoad(); 
    }
}

function editRecord(record) {
    currentId = record._id; 
    giftInputElement.value = record.gift; 
    forInputElement.value = record.for; 
    priceInputElement.value = record.price;
    
    editBtn.disabled = false; // enable editBtn
    addBtn.disabled = true; // disable addBtn
    editBtn.onclick = () => onEdit(container);
}

async function onEdit() {
    const updatedRecord = {
        gift: giftInputElement.value,
        for: forInputElement.value, 
        price: priceInputElement.value 
    };

    const response = await fetch(baseURL + currentId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord)
    });

    if (response.ok) {
        giftInputElement.value = '';
        forInputElement.value = '';
        priceInputElement.value = '';

        editBtn.disabled = true; // disable editBtn
        addBtn.disabled = false; // enable addBtn
        currentId = null; // empty currentId

        onLoad();
    }
 }

async function onDelete(id, element) {
    const response = await fetch(baseURL + id, {
        method: "DELETE"
    });

    if (response.ok) {
        element.remove();
    }
}