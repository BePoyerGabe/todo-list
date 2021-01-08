const input = document.querySelector('#taskField')
const todos = document.querySelector('.todos')
const numbersTasksSection = document.querySelectorAll('section')

const tasks = {
    completed: 0,
    inProgress: 0,
    deleted: 0
}

document.querySelector('.add').addEventListener('click', () => {
    const taskDiv = document.createElement('div')
    const taskTitle = document.createElement('h2')
    const paragraph = document.createElement('p')
    const button = document.createElement('button')
    const deleteBtn = document.createElement('button')

    numbersTasksSection[1].textContent = ++tasks.inProgress

    taskDiv.classList.add('todo')
    let today = new Date()
    today = Intl.DateTimeFormat('pt-BR').format(today)

    todos.appendChild(taskDiv)
    
    let newTask = input.value
    input.value = ''
    taskTitle.textContent = newTask
    taskDiv.appendChild(taskTitle)

    paragraph.textContent = `Adicionada em ${today}`
    taskDiv.appendChild(paragraph)

    button.textContent = 'Done'
    button.classList.add('completeTask')
    taskDiv.appendChild(button)

    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('deleteBtn')
    taskDiv.appendChild(deleteBtn)



    button.addEventListener('click', ()=> {
        numbersTasksSection[1].textContent = --tasks.inProgress
        numbersTasksSection[0].textContent = ++tasks.completed

        button.parentElement.remove()
    })

    deleteBtn.addEventListener('click', ()=> {
        numbersTasksSection[1].textContent = --tasks.inProgress
        numbersTasksSection[2].textContent = ++tasks.deleted

        deleteBtn.parentElement.remove()
    })
})
