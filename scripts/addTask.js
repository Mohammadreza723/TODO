let addTaskBtn = document.getElementById("addTask")
let text = document.getElementById("setTask");
let taskContainer = document.querySelector(".task");
text.addEventListener("focus", ()=>{
    window.addEventListener("keydown", (e)=>{
        if (e.keyCode == "13") {
            if (text.value != "") {
                let task = document.createElement("div");
                task.innerHTML = `
                            <div>
                                <button class="remove-task">remove</button>
                                <span class="paragraf">
                                    <p><h5>${text.value}</h5></p>
                                </span>
                                <button class="done-task">
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </button>
                                <button class="option">
                                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                </button>
                            </div>
                            `
                taskContainer.appendChild(task);
            }
            text.value = "";
        }
    })
})
addTaskBtn.addEventListener("click", ()=>{
    if (text.value != "") {
        let task = document.createElement("div");
        task.innerHTML = `
                    <div>
                        <button class="remove-task">remove</button>
                        <span class="paragraf">
                            <p><h5>${text.value}</h5></p>
                        </span>
                        <button class="done-task">
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </button>
                        <button class="option">
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </button>
                    </div>
                    `
        taskContainer.appendChild(task);
    }
    text.value = "";
    
})


