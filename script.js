const inputField = document.getElementById('inputField');
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function() {
    let task = inputField.value;
    if (task.trim() !== "") { // Empêcher l'ajout de tâches vides ou avec seulement des espaces
        let newToDo = document.createElement('div');
        newToDo.classList.add('todo-item'); // Ajoute une classe pour le style (facultatif)

        let taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.addEventListener('click', toggleComplete); // Ajouter un écouteur d'événement pour barrer la tâche

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', deleteToDo);

        newToDo.appendChild(taskText);
        newToDo.appendChild(deleteButton);
        toDoContainer.appendChild(newToDo);

        inputField.value = ''; // Effacer le champ d'entrée

    } else {
        alert("Veuillez entrer une tâche !"); // Message d'alerte si le champ est vide
    }

});

inputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') { // Simuler un clic sur le bouton "+" quand on appuie sur Entrée
      addToDoButton.click();
    }
  });


function deleteToDo(event) {
    let todoItem = event.target.parentNode; // Remonter au parent (div .todo-item)
    toDoContainer.removeChild(todoItem);
}

function toggleComplete(event) {
    let taskText = event.target;
    taskText.classList.toggle('completed'); // Ajoute ou supprime la classe "completed"
}


// Style CSS (facultatif, mais recommandé pour l'apparence)
const style = document.createElement('style');
style.textContent = `
.todo-item {
    display: flex;
    align-items: center; /* Aligne verticalement */
    justify-content: space-between; /* Espace entre le texte et le bouton */
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
}

.completed {
    text-decoration: line-through;
    color: #888;
}

.todo-item span {
    flex-grow: 1; /* Le texte prend l'espace disponible */
    cursor: pointer; /* Indique que le texte est cliquable */
}

.todo-item button {
    margin-left: 1px;
    background-color: #f44336; /* Rouge */
    color: white;
    border: none;
    padding: ;
    cursor: pointer;
    width: 90px;
}

.full_input{
    display: flex;
}

.full_input input{
    flex-grow: 1;
    padding: 5px;
}

`;
document.head.appendChild(style);