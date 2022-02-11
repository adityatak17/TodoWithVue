app.component("ongoing-component",{
    props: {
        allOngoingTasks:{
            type:Array,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div class="tasks-center">
        <h1>Ongoing Tasks</h1>
        <div :class="{ 'tasks-block': allOngoingTasks.length }">
            <ul>
                <li v-for="(task, index) in allOngoingTasks" :key="index">
                    <div class="task-title"> {{task.title}} </div> 
                    <br>
                    <div class="task-description"> {{task.description}} </div>
                    <br>
                    <div class="status-change-button">
                        <button @click="addTask=true" 
                                class="button" >
                            Move to Completed Tasks
                        </button>
                        <button @click="addTask=true" 
                                class="button" >
                            Delete This Task
                        </button>
                        <button @click="addTask=true" 
                                class="button" >
                            Add to Todo List
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