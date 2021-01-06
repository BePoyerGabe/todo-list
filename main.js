const input = document.querySelector('#taskField')
const todos = document.querySelector('.todos')


document.querySelector('.add').addEventListener('click', () => {
    const taskDiv = document.createElement('div')
    const taskTitle = document.createElement('h2')
    const paragraph = document.createElement('p')
    const button = document.createElement('button')

    
    let today = new Date()
    today = Intl.DateTimeFormat('pt-BR').format(today)

    todos.appendChild(taskDiv)
    
    let newTask = input.value
    taskTitle.textContent = newTask
    taskDiv.appendChild(taskTitle)

    paragraph.textContent = `Adicionada em ${today}`
    taskDiv.appendChild(paragraph)

    button.textContent = "Done"
    button.classList.add('removeTask')
    taskDiv.appendChild(button)

    button.addEventListener('click', ()=> {
        button.parentElement.remove()
    })

})
