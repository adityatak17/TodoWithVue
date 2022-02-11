app.component("completed-component",{
    props: {
        allCompletedTasks:{
            type:Array,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div class="tasks-center">
        <h1>Completed Tasks</h1>
        <div :class="{ 'tasks-block': allCompletedTasks.length }">
            <ul>
                <li v-for="(task, index) in allCompletedTasks" :key="index">
                    <div class="task-title"> {{task.title}} </div> 
                    <br>
                    <div class="task-description"> {{task.description}} </div>
                    <br>
                    <div class="status-change-button">
                        <button @click="addTask=true" 
                                class="button" >
                            Delete This Task
                        </button>
                        <button @click="addTask=true" 
                                class="button" >
                            Add to Todo List
                        </button>
                        <button @click="addTask=true" 
                                class="button" >
                            Add to Ongoing Tasks
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

    } ,
    computed: {
        
    }
})