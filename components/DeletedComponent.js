app.component("deleted-component",{
    props:{
        deletedtaskslist: {
            type:Array,
            required:true
        },
        deleteform: {
            type:Boolean,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div v-show="deleteform">
        <h1>Deleted Tasks</h1>
        <ul>
            <li v-for=" (task,index) in deletedtaskslist" :key="index">
                Title: {{task.title}}
                <br>
                Description: {{task.description}}
                <br>
                <div class="flexbox-buttons">
                    <button class="button" @click="moveToTodo(task,index,instanceNumber)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task,index,instanceNumber)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task,index,instanceNumber)">Move to Completed Tasks</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
    ` ,
    data(){
        return {
            instanceNumber:3
        }
    } ,
    methods:{
        moveToTodo(task,index,instanceNumber){
            this.$emit("move-to-todo",task,index,instanceNumber)
        },
        moveToOngoing(task,index,instanceNumber){
            this.$emit("move-to-ongoing",task,index,instanceNumber)
        },
        moveToCompleted(task,index,instanceNumber){
            this.$emit("move-to-completed",task,index,instanceNumber)
        }
    }
})