const app=Vue.createApp({
    data:function(){
        return {
            addForm:false,
            deleteForm:false,
            TodoTasks:[],
            OngoingTasks:[],
            CompletedTasks:[],
            DeletedTasks:[],
        }
    },
    methods:{
        
        addingNewTask(newTaskInstance,ButtonId){

            if(ButtonId==0){
                this.TodoTasks.push(newTaskInstance)
            }
            if(ButtonId==1){
                this.OngoingTasks.push(newTaskInstance)
            }
            if(ButtonId==2){
                this.CompletedTasks.push(newTaskInstance)
            }
        },
        moveToOngoing(task,index,instanceNumber){
            
            if (instanceNumber==0){
                this.TodoTasks.splice(index, 1)
            }
            else if (instanceNumber==2){
                this.CompletedTasks.splice(index, 1)
            }
            else{
                this.DeletedTasks.splice(index, 1)
            }

            this.OngoingTasks.push(task)
        },
        moveToCompleted(task,index,instanceNumber){

            if (instanceNumber==0){
                this.TodoTasks.splice(index, 1)
            }
            else if (instanceNumber==1){
                this.OngoingTasks.splice(index, 1)
            }
            else{
                this.DeletedTasks.splice(index, 1)
            }

            this.CompletedTasks.push(task)
        },
        moveToDeleted(task,index,instanceNumber){

            if (instanceNumber==0){
                this.TodoTasks.splice(index, 1)
            }
            else if (instanceNumber==1){
                this.OngoingTasks.splice(index, 1)
            }
            else{
                this.CompletedTasks.splice(index, 1)
            }

            this.DeletedTasks.push(task)
        },
        moveToTodo(task,index,instanceNumber){

            if (instanceNumber==1){
                this.OngoingTasks.splice(index, 1)
            }
            else if (instanceNumber==2){
                this.CompletedTasks.splice(index, 1)
            }
            else{
                this.DeletedTasks.splice(index, 1)
            }

            this.TodoTasks.push(task)
        }
    },
    computed:{

    }
})