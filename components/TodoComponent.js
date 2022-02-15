app.component("todo-component",{
    props: {

        todotaskslist: {
            type:Array,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <div v-show="todotaskslist.length">
        
            <li v-for=" (task,index) in todotaskslist" :key="index">
                <p>Title:   {{task.title}}</p>
                <p>Description: {{task.description}}</p>
                <div class="form-buttons">
                    <button class="button" @click="moveToOngoing(task,index,instanceNumber)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task,index,instanceNumber)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToDeleted(task,index,instanceNumber)">Delete This Task</button>
                </div>
                <br>
            </li>
        
    </div>
    ` ,
    data(){
        return {
            instanceNumber:0   
        }
    } ,
    methods: {
        moveToOngoing(task,index,instanceNumber){
            this.$emit("move-to-ongoing",task,index,instanceNumber)
        },
        moveToCompleted(task,index,instanceNumber){
            this.$emit("move-to-completed",task,index,instanceNumber)
        },
        moveToDeleted(task,index,instanceNumber){
            this.$emit("move-to-deleted",task,index,instanceNumber)
        }
    } ,
    computed: {

    }
})