const baseURL = 'http://localhost:3030/jsonstore/games/';
let currentId = null;

const nameInputElement = document.getElementById("g-name");
const typeInputElement = document.getElementById("type");
const playersInputElement = document.getElementById("players");

const addBtn = document.getElementById("add-game");
const editBtn = document.getElementById("edit-game");

const loadGamesBtn = document.getElementById("load-games");
const gamesListItemsField = document.getElementById("games-list");

loadGamesBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', addItem);
editBtn.addEventListener('click', onEdit);

function createRecord(record) {
    const container = document.createElement('div');
    container.className = 'board-game';

    container.innerHTML = `
        <div class="content">
        <p>${record.name}</p> 
        <p>${record.players}</p> 
        <p>${record.type}</p>
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

    gamesListItemsField.innerHTML = "";
    const response = await fetch(baseURL);
    const data = await response.json();

    Array.from(Object.values(data)).forEach(record => {
        gamesListItemsField.appendChild(createRecord(record));
    });
}

async function addItem() {
    const newRecord = {
        name: nameInputElement.value,
        players: playersInputElement.value,
        type: typeInputElement.value
    };

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
    });

    if (response.ok) {
        nameInputElement.value = '';
        playersInputElement.value = '';
        typeInputElement.value = '';

        onLoad(); 
    }
}

function editRecord(record) {
    currentId = record._id;
    nameInputElement.value = record.name;
    playersInputElement.value = record.players;
    typeInputElement.value = record.type;
    
    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function onEdit() {
    const updatedRecord = {
        name: nameInputElement.value,
        players: playersInputElement.value, 
        type: typeInputElement.value 
    };

    const response = await fetch(baseURL + currentId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord)
    });

    if (response.ok) {
        nameInputElement.value = '';
        playersInputElement.value = '';
        typeInputElement.value = '';

        editBtn.disabled = true;
        addBtn.disabled = false;
        currentId = null;

        onLoad(); // if response is true load edited data by user from server again
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