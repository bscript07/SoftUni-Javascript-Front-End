const baseURL = 'http://localhost:3030/jsonstore/tasks/';
let currentEditId = null;

// DOM elements selected by "id" attribute
const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');
const addBtn = document.getElementById('add-weather');
const editBtn = document.getElementById('edit-weather');
const listDiv = document.getElementById('list');
const loadHistoryBtn = document.getElementById('load-history');

// Load the weather history
loadHistoryBtn.addEventListener('click', loadHistory);

// Add a new weather record
addBtn.addEventListener('click', addWeather);

// Edit a weather record
editBtn.addEventListener('click', editWeather);

async function loadHistory() {
    listDiv.innerHTML = '';
    const response = await fetch(baseURL);
    const data = await response.json();
    
    Array.from(Object.values(data)).forEach(record => {
        listDiv.appendChild(createRecordElement(record));
    });
}

function createRecordElement(record) {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h2>${record.location}</h2>
        <h3>${record.date}</h3>
        <h3 id="celsius">${record.temperature}</h3>
        <div id="buttons-container">
            <button class="change-btn">Change</button>
            <button class="delete-btn">Delete</button>
        </div>`;
    
    container.querySelector('.change-btn').addEventListener('click', () => loadEditForm(record));
    container.querySelector('.delete-btn').addEventListener('click', () => deleteWeather(record._id, container));
    
    return container;
}

function loadEditForm(record) {
    currentEditId = record._id;
    locationInputElement.value = record.location;
    temperatureInputElement.value = record.temperature;
    dateInputElement.value = record.date;
    
    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function addWeather() {
    const newRecord = {
        location: locationInputElement.value,
        temperature: temperatureInputElement.value,
        date: dateInputElement.value
    };

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
    });

    if (response.ok) {
        locationInputElement.value = '';
        temperatureInputElement.value = '';
        dateInputElement.value = '';
        loadHistory();
    }
}

async function editWeather() {
    const updatedRecord = {
        location: locationInputElement.value,
        temperature: temperatureInputElement.value,
        date: dateInputElement.value
    };

    const response = await fetch(baseURL + currentEditId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord)
    });

    if (response.ok) {
        locationInputElement.value = '';
        temperatureInputElement.value = '';
        dateInputElement.value = '';
        addBtn.disabled = false;
        editBtn.disabled = true;
        currentEditId = null;
        loadHistory();
    }
}

async function deleteWeather(id, element) {
    const response = await fetch(baseURL + id, {
        method: 'DELETE'
    });

    if (response.ok) {
        element.remove();
    }
}

// Initial load of the weather history
loadHistory();
