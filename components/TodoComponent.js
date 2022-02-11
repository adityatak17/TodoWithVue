app.component("todo-component",{
    props: {
        allTodoTasks:{
            type:Array,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div class="tasks-center">
        <h1>Tasks To Do</h1>
        <div :class="{ 'tasks-block': allTodoTasks.length }" >
            <ul>
                <li v-for="(task, index) in allTodoTasks" :key="index">
                    <div class="task-title"> {{task.title}} </div> 
                    <br>
                    <div class="task-description"> {{task.description}} </div>
                    <br>
                    <div class="status-change-button">
                        <button @click="moveToOngoing" 
                                class="button" >
                            Move to Ongoing Tasks
                        </button>
                        <button @click="moveToCompleted" 
                                class="button" >
                            Move to Completed Tasks
                        </button>
                        <button @click="moveToDeleted" 
                                class="button" >
                            Delete This Task
                        </button>
                    </div>
                </li>
                <br>
            </ul>
        </div>
    </div>
    ` ,
    data(){
        return {

        }
    } ,
    methods: {
        moveToOngoing(){

        },
        moveToCompleted(){

        },
        moveToDeleted(){
            
        }
    } ,
    computed: {

    }
})