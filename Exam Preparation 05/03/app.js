const baseURL = 'http://localhost:3030/jsonstore/tasks/';
let currentId = null;

const courseNameInputElement = document.getElementById("course-name");
const courseTypeInputElement = document.getElementById("course-type");
const courseDescriptionInputElement = document.getElementById("description");
const courseTeacherInputElement = document.getElementById("teacher-name");

const addBtn = document.getElementById("add-course");
const editBtn = document.getElementById("edit-course");

const loadCoursesBtn = document.getElementById("load-course");
const inputListItemsField = document.getElementById("list");

loadCoursesBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', addItem);
editBtn.addEventListener('click', onEdit);

function createRecord(record) {
    const container = document.createElement('div');
    container.className = 'container'; 

    container.innerHTML = `
        <h2>${record.title}</h2>
        <h3>${record.teacher}</h3> 
        <h3>${record.type}</h3>
        <h4>${record.description}</h4>
        <button class="edit-btn">Edit Course</button>
        <button class="finish-btn">Finish Course</button>`;
    
    container.querySelector('.edit-btn').addEventListener('click', () => editRecord(record)); // change or edit button in modal
    container.querySelector('.finish-btn').addEventListener('click', () => onDelete(record._id, container)); // delete button in modal
    
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
        title: courseNameInputElement.value,
        type: courseTypeInputElement.value,
        description: courseDescriptionInputElement.value,
        teacher: courseTeacherInputElement.value
    };

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
    });

    if (response.ok) {
        courseNameInputElement.value = '';
        courseTypeInputElement.value = '';
        courseDescriptionInputElement.value = '';
        courseTeacherInputElement.value = '';

        onLoad(); 
    }
}

function editRecord(record) {
    currentId = record._id;
    courseNameInputElement.value = record.title;
    courseTypeInputElement.value = record.type;
    courseDescriptionInputElement.value = record.description;
    courseTeacherInputElement.value = record.teacher;
    
    editBtn.disabled = false; // enable editBtn
    addBtn.disabled = true; // disable addBtn
}

async function onEdit() {
    const updatedRecord = {
        title: courseNameInputElement.value,
        type: courseTypeInputElement.value,
        description: courseDescriptionInputElement.value, 
        teacher: courseTeacherInputElement.value
    };

    const response = await fetch(baseURL + currentId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord)
    });

    if (response.ok) {
        courseNameInputElement.value = '';
        courseTypeInputElement.value = '';
        courseDescriptionInputElement.value = '';
        courseTeacherInputElement.value = '';

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