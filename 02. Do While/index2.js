// Hacer un programa que permita al usuario escribir una lista de 20 tareas 
// con un selector con el que el ususario pueda indicar si está "To do", "Doing" o "Done"
const task = document.getElementById('task')
const tasklistContainer = document.getElementById('task-list')

let cont = 0
do {
    console.log(cont)
    tasklistContainer.appendChild(task.cloneNode(true))
    cont++
} while (cont < 20)