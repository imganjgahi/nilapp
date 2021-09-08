console.log("APP is Working")
const taskForm = document.querySelector(".taskForm");
const titleInput = document.querySelector("#taskTitle");
const leadInput = document.querySelector("#taskLead");
const descriptionInput = document.querySelector("#taskDescription");
const status = document.querySelector("#taskStatus");
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
    imgEl.alt = "assets/images/pic1.jpg"


}