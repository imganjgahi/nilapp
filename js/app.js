console.log("APP is Working")
const taskForm = document.querySelector(".taskForm");
const titleInput = document.querySelector("#taskTitle");
const leadInput = document.querySelector("#taskLead");
const descriptionInput = document.querySelector("#taskDescription");
const statusInput = document.querySelector("#taskStatus");
const tasksWrapper = document.querySelector(".tasks");
// const imageInput = document.querySelector("#taskImage");

if(taskForm) {
    taskForm.addEventListener("submit", createNewTask)
}

function createNewTask(event) {
    event.preventDefault();

    const taskEL = document.createElement('div')
    const imgEl = document.createElement('img')
    const infoEl = document.createElement('div')
    const headerEL = document.createElement('div')
    const bodyEL = document.createElement('div')
    const footerEL = document.createElement('div')
    taskEL.className = "taskCard"
    imgEl.className = "taskImg"
    infoEl.className = "taskinfo"
    headerEL.className = "taskHeader"
    bodyEL.className = "taskBody"
    footerEL.className = "taskfooter"
    imgEl.src = "assets/images/pic1.jpg"
    imgEl.alt = "task"
    headerEL.innerText = titleInput.value
    bodyEL.innerText = leadInput.value
    footerEL.innerText = statusInput.value
    infoEl.appendChild(headerEL)
    infoEl.appendChild(bodyEL)
    infoEl.appendChild(footerEL)
    taskEL.appendChild(imgEl)
    taskEL.appendChild(infoEl)
    tasksWrapper.appendChild(taskEL)

}