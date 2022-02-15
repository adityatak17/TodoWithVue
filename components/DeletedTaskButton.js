app.component("deleted-task-button",{
    props:{
        deleteform:{
            type:Boolean,
            required:true
        }
    },
    template:
    /*html*/
    `
    <div id="deleted-task-div">
        <button @click="buttonClicked" 
                class="button" 
                id="deleted-task-button">
                <p v-if="deleteform">Hide all the Deleted Tasks</p>
                <p v-else>Show all the Deleted Tasks</p>
        </button>
    </div>
    ` ,
    data(){
        return {

        }
    } ,
    methods:{
        buttonClicked(){
            this.$emit("deleted-task-button-clicked")
        }
    }
})