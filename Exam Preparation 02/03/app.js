const baseURL = 'http://localhost:3030/jsonstore/tasks/';
let currentId = null;

const foodInputElement = document.getElementById("food");
const timeInputElement = document.getElementById("time");
const caloriesInputElement = document.getElementById("calories");

const addBtn = document.getElementById("add-meal");
const editBtn = document.getElementById("edit-meal");

const loadMealsBtn = document.getElementById("load-meals");
const inputListItemsField = document.getElementById("list");

loadMealsBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', addItem);
editBtn.addEventListener('click', onEdit);

function createRecord(record) {
    const container = document.createElement('div');
    container.className = 'meal';

    container.innerHTML = `
        <h2>${record.food}</h2> 
        <h3>${record.time}</h3> 
        <h3>${record.calories}</h3> 
        <div id="meal-buttons">
            <button class="change-meal">Change</button>
            <button class="delete-meal">Delete</button>
        </div>`;
    
    container.querySelector('.change-meal').addEventListener('click', () => editRecord(record));
    container.querySelector('.delete-meal').addEventListener('click', () => onDelete(record._id, container));
    
    return container;
}

async function onLoad() {

    inputListItemsField.innerHTML = "";
    const response = await fetch(baseURL);
    const data = await response.json();

    Array.from(Object.values(data)).forEach(record => {
        inputListItemsField.appendChild(createRecord(record)); 
    });
}

async function addItem() {
    const newRecord = {
        food: foodInputElement.value,
        time: timeInputElement.value,
        calories: caloriesInputElement.value
    };

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
    });

    if (response.ok) {
        foodInputElement.value = '';
        timeInputElement.value = '';
        caloriesInputElement.value = '';

        onLoad(); 
    }
}

function editRecord(record) {
    currentId = record._id; 
    foodInputElement.value = record.food; 
    timeInputElement.value = record.time; 
    caloriesInputElement.value = record.calories;
    
    editBtn.disabled = false;
    addBtn.disabled = true; 
}

async function onEdit() {
    const updatedRecord = {
        food: foodInputElement.value, 
        time: timeInputElement.value, 
        calories: caloriesInputElement.value 
    };

    const response = await fetch(baseURL + currentId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord)
    });

    if (response.ok) {
        foodInputElement.value = '';
        timeInputElement.value = '';
        caloriesInputElement.value = '';

        addBtn.disabled = false;
        editBtn.disabled = true; 
        currentId = null;

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