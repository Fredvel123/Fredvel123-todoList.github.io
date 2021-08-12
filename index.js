// get variables to start.
let text = document.querySelector("#text-value");
let sendBtn = document.querySelector("#send-btn");
let textFoot = document.querySelector("p");
let listToCreate = document.querySelector("ul");
// to create a function to automate.
function addTask(e){
    e.preventDefault();
    const textAutomate = () => {
        const tasks = text.value;
        if(tasks !== ""){
            const paragraph = document.createElement("p");
            paragraph.textContent = tasks;
            const listTask = document.createElement("li");
            listTask.appendChild(paragraph);
            listToCreate.appendChild(listTask);
            text.value = "";
            textFoot.style.display = "none"
            let btnDelete =()=>{
                const btn = document.createElement("button");
                btn.textContent = "X";
                listTask.appendChild(btn);
                const deleteItems  =(e)=>{
                    const item = e.target.parentElement;
                    listToCreate.removeChild(item);
                    const items = document.querySelectorAll("li");
                    if (items.length === 0) {
                        textFoot.style.display = "block";
                      }
                }
                btn.addEventListener("click", deleteItems);
            }
            btnDelete();
        }
    }
    textAutomate();
}
sendBtn.addEventListener("click", addTask)