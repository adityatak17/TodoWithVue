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
    <div class="task-details">
        <h1>Todo Tasks</h1>
        <ul class="flexbox-vertical clearfix">
            <li v-for=" (task,index) in todotaskslist" :key="index">
                <div id="center">
                    <p>Title: {{task.title}}</p>
                    <p>Description: {{task.description}}</p>
                </div>
                <div class="float-left">
                    <button class="button" @click="moveToOngoing(task,index,instanceNumber)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task,index,instanceNumber)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToDeleted(task,index,instanceNumber)">Delete This Task</button>
                </div>
                <br>
            </li>
        </ul>
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