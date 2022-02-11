app.component("new-task-form",{
    props:{
        addTask:{
            type:Boolean,
            required:true
        }
    } ,
    template:
    /*html*/
    `
    <form class="new-task-form" autocomplete="off" v-show="addTask" @submit.prevent="newTaskFormSubmit">
                    <fieldset id="field-set">
                        <legend id="legend">
                            Add New Task:
                        </legend>
                        <input type="text"  
                            placeholder="Task Title" 
                            v-model="title"><br>
                        <input 
                            type="text"  
                            placeholder="Task Description"
                            v-model="description"
                        ><br>
                        <div id="addingButtons">
                            <input 
                                type="submit" 
                                id="button0"    
                                @click="buttonid=0"  
                                value="Add to To Do List"
                            ><br>
                            <input 
                                type="submit"
                                id="button1"
                                @click="buttonid=1" 
                                value="Add to Ongoing Tasks"
                            ><br>
                            <input 
                                type="submit"
                                id="button2"
                                @click="buttonid=2"
                                value="Add to Completed"
                            ><br>
                        </div>
                        <input 
                            type="submit"
                            id="button3"
                            value="Done"
                            @click="buttonid=3"
                        ><br>
                    </fieldset>
    </form>
    ` ,
    data(){
        return {
            title:'',
            description:'',
            buttonid:0   
        }
    } ,
    methods: {
        newTaskFormSubmit(){
            if (this.buttonid==3){
                this.$emit("task-adding-done")
                return    
            }

            if(this.title=='' || this.description==''){
                alert("Please Fill Out all the Details")
                return
            }
            
            let ButtonId=this.buttonid

            let newTaskCreated={
                title:this.title,
                description:this.description
            }

            this.$emit('new-task-added',newTaskCreated,ButtonId)
            
            // To Reset the form data
            this.title=''
            this.description=''
            this.buttonid=0
        }
    } ,
    computed: {

    }
})