app.component("ongoing-component",{
    props: {
        ongoingtaskslist:{
            type:Array,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div class="flexbox-vertical">
        <h1>Ongoing Tasks</h1>
        <ul>
            <li v-for=" (task,index) in ongoingtaskslist" :key="index">
                <div class="task-details">
                    <p>Title: {{task.title}}</p>
                    <br>
                    <p>Description: {{task.description}}</p>
                    <br>
                </div>
                <div class="flexbox-buttons">    
                    <button class="button" @click="moveToCompleted(task,index,instanceNumber)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToDeleted(task,index,instanceNumber)">Delete This Task</button>
                    <button class="button" @click="moveToTodo(task,index,instanceNumber)">Move to Todo List</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
    ` ,
    data(){
        return {
            instanceNumber:1
        }
    } ,
    methods: {
        moveToCompleted(task,index,instanceNumber){
            this.$emit("move-to-completed",task,index,instanceNumber)
        },
        moveToDeleted(task,index,instanceNumber){
            this.$emit("move-to-deleted",task,index,instanceNumber)
        },
        moveToTodo(task,index,instanceNumber){
            this.$emit("move-to-todo",task,index,instanceNumber)
        }

    } ,
    computed: {
        
    }
})