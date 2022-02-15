app.component("completed-component",{
    props: {
        completedtaskslist:{
            type:Array,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div class="flexbox-vertical">
        <h1>Completed Tasks</h1>
        <ul>
            <li v-for=" (task,index) in completedtaskslist" :key="index">
                <div class="task-details">
                    <p>Title: {{task.title}}</p>
                    <br>
                    <p>Description: {{task.description}}</p>
                <br>
                </div>
                <div class="flexbox-buttons">
                    <button class="button" @click="moveToDeleted(task,index,instanceNumber)">Delete This Task</button>
                    <button class="button" @click="moveToTodo(task,index,instanceNumber)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task,index,instanceNumber)">Move to Ongoing Tasks</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
    ` ,
    data(){
        return {
            instanceNumber:2
        }
    } ,
    methods: {
        moveToDeleted(task,index,instanceNumber){
            this.$emit("move-to-deleted",task,index,instanceNumber)
        },
        moveToTodo(task,index,instanceNumber){
            this.$emit("move-to-todo",task,index,instanceNumber)
        },
        moveToOngoing(task,index,instanceNumber){
            this.$emit("move-to-ongoing",task,index,instanceNumber)
        }
    } ,
    computed: {
        
    }
})