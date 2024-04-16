document.addEventListener("DOMContentLoaded", () => {
  
  const anotherTaskForm = document.querySelector('form');

  //Event listener for submit button
  anotherTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const anotherTask = e.target.querySelector('#new-task-description').value
    buildToDo(anotherTask);

    anotherTaskForm.reset();
     })
    });

  function buildToDo(anotherTask){

    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'delete';

    listItem.textContent = anotherTask;

    listItem.appendChild(deleteButton);

    document.querySelector('#tasks').appendChild(listItem);
  
  
    //fAdd click event
    deleteButton.addEventListener('click', handleDelete);
  }

  function handleDelete(e){
    e.target.parentNode.remove();
  }
