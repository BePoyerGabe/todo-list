const input = document.querySelector('#taskField')
const todos = document.querySelector('.todos')
// let ctx = document.querySelector('#piechart').getContext('2d')

const numbersTasksSpan = document.querySelectorAll('span')

const tasks = {
    completed: 0,
    inProgress: 0,
    deleted: 0
}

// let chart = new Chart(ctx, {
//     type: 'doughnut',

//     data: {
//         labels: ['Em progresso', 'Concluidas', 'Apagadas'],

//         datasets: [{
        
//             data: [
//                 tasks.completed,
//                 tasks.inProgress,
//                 tasks.deleted
//             ],
        
//             backgroundColor: ['green', 'grey', 'red'],

//             label: 'Teste'       
//         }],        
//     },
//     options: {
//         cutoutPercentage: 50,
//     }
// })


document.querySelector('.add').addEventListener('click', () => {
    const taskDiv = document.createElement('div')
    const taskTitle = document.createElement('h2')
    const paragraph = document.createElement('p')
    const button = document.createElement('button')
    const deleteBtn = document.createElement('button')

    numbersTasksSpan[1].textContent = ++tasks.inProgress

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
        numbersTasksSpan[1].textContent = --tasks.inProgress
        numbersTasksSpan[0].textContent = ++tasks.completed

        button.parentElement.remove()
    })

    deleteBtn.addEventListener('click', ()=> {
        numbersTasksSpan[1].textContent = --tasks.inProgress
        numbersTasksSpan[2].textContent = ++tasks.deleted

        deleteBtn.parentElement.remove()
    })
})
