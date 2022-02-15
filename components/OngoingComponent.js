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
    <h1>Ongoing Tasks</h1>
    <div v-show="ongoingtaskslist.length">
        <ul>
            <li v-for=" (task,index) in ongoingtaskslist" :key="index">
                <p>Title: {{task.title}}</p>
                <p>Description: {{task.description}}</p>
                <div class="form-buttons">    
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