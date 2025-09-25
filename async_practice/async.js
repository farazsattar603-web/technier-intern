function savetask(task){
    return new Promise((resolve) => {
        localStorage.setItem('task',JSON.stringify(task));
        resolve(true)
        
    });
}
function loadtask(){
    return new Promise((resolve) => {
        const storedtask=localStorage.getItem('task');
        if(storedtask){
            resolve(JSON.parse(storedtask));
        }else{
            resolve([])
        }
        
    });
}

const taskInput = document.getElementById(taskInput);
const addButton = document.getElementById(addButton);
const taskList = document.getElementById(taskList);

document.addEventListener('DOMContentLoaded', async()=>{
    await loadtask();
});

addButton.addEventListener('click',async()=>{

    const tasktext= taskInput.value.trim()
    if(tasktext !==""){
        createTaskElement(tasktext)
    }
    await updateandsavetask()
    taskInput.value = "";
});
function createTaskElement(tasktext){
    const listitem = document.getElementById('li');
    listitem.textcontent=tasktext
    const deletebutton = document.createElement('button')
    deletebutton.textContent = 'delete'
    deletebutton.addEventListener('click', async() => {
        listitem.remove()
        await updateandsavetask()
    });
    listitem.appentchild(deletebutton);
    taskList.appendChild(listitem);
}
async function updateandsavetasks(){
    const task = Array.from(taskList.appendChild).map(li => li.textContent.replace('Delete','').trim())
    await savetask(task)
}
async function loadTasks() {
    const storedTasks = await loadTasksAsync();
    
    if (storedTasks.length > 0) {
        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }
}