app.component("new-task-button",{
    props:{

    } ,
    template:
    /*html*/
    `
    <div id="new-task-div">
        <button @click="addTask=true" 
                class="button" 
                id="new-task-button">
            Add a New Task
        </button>
        <new-task-form @new-task-added="newTaskFormSubmit" @task-adding-done="addTask=false" :addTask="addTask"></new-task-form>
        <div id="components">
            <!-- To Do List Component -->
            <todo-component :allTodoTasks="TodoTasks"></todo-component>

            <!-- Ongoing Task Component -->
            <ongoing-component :allOngoingTasks="OngoingTasks"></ongoing-component>

            <!-- COmpleted Task Component -->
            <completed-component :allCompletedTasks="CompletedTasks"></completed-component>
        </div>

    </div>
    ` ,
    data(){
        return {
            addTask:false, 
            TodoTasks:[],
            OngoingTasks:[],
            CompletedTasks:[]
        }
    } ,
    methods: {
        newTaskFormSubmit(newTaskInstance,ButtonId){
            if(ButtonId==0){
                this.TodoTasks.push(newTaskInstance)
            }
            if(ButtonId==1){
                this.OngoingTasks.push(newTaskInstance)
            }
            if(ButtonId==2){
                this.CompletedTasks.push(newTaskInstance)
            }
        }
    },
    computed: {

    }
    }
)