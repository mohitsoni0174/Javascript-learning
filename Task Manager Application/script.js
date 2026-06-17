const taskForm =
document.querySelector("#taskForm");

const taskTitle =
document.querySelector("#taskTitle");

const category =
document.querySelector("#category");

const taskContainer =
document.querySelector("#taskContainer");

const themeBtn =
document.querySelector("#themeBtn");


// THEME TOGGLE

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

    }
);


// CREATE TASK

taskForm.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const task =
        taskTitle.value.trim();

        const selectedCategory =
        category.value;

        if(task === ""){
            return;
        }

        const card =
        document.createElement("div");

        card.classList.add(
            "task-card"
        );

        card.dataset.id =
        Date.now();

        card.dataset.status =
        "pending";

        card.dataset.category =
        selectedCategory;


        const title =
        document.createElement("h3");

        title.textContent =
        task;


        const categoryText =
        document.createElement("p");

        categoryText.textContent =
        `Category: ${selectedCategory}`;


        const editBtn =
        document.createElement("button");

        editBtn.textContent =
        "Edit";

        editBtn.classList.add(
            "edit-btn"
        );


        const completeBtn =
        document.createElement("button");

        completeBtn.textContent =
        "Complete";

        completeBtn.classList.add(
            "complete-btn"
        );


        const deleteBtn =
        document.createElement("button");

        deleteBtn.textContent =
        "Delete";

        deleteBtn.classList.add(
            "delete-btn"
        );


        const actions =
        document.createElement("div");

        actions.classList.add(
            "task-actions"
        );

        actions.append(
            editBtn,
            completeBtn,
            deleteBtn
        );

        card.append(
            title,
            categoryText,
            actions
        );

        taskContainer.appendChild(
            card
        );

        taskTitle.value = "";

    }
);


// EVENT DELEGATION

taskContainer.addEventListener(
    "click",
    (e) => {

        const card =
        e.target.closest(
            ".task-card"
        );

        if(!card) return;


        // DELETE

        if(
            e.target.classList.contains(
                "delete-btn"
            )
        ){

            card.remove();

        }


        // COMPLETE

        if(
            e.target.classList.contains(
                "complete-btn"
            )
        ){

            const title =
            card.querySelector("h3");

            title.classList.toggle(
                "completed"
            );

            if(
                card.dataset.status ===
                "pending"
            ){

                card.dataset.status =
                "completed";

            }else{

                card.dataset.status =
                "pending";

            }

        }


        // EDIT

        if(
            e.target.classList.contains(
                "edit-btn"
            )
        ){

            const title =
            card.querySelector("h3");

            const updatedTask =
            prompt(
                "Edit Task",
                title.textContent
            );

            if(
                updatedTask !== null &&
                updatedTask.trim() !== ""
            ){

                title.textContent =
                updatedTask;

            }

        }

    }
);