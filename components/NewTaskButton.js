app.component("new-task-button",{
    template:
    /*html*/
    `
    <div id="new-task-div">
        <button @click="buttonClicked" 
                class="button" 
                id="new-task-button">
            Add a New Task
        </button>
    </div>
    ` ,
    data(){
        return {
        }
    } ,
    methods: {
        buttonClicked(){
            this.$emit('new-task-button-clicked')
        }
    },
    computed: {

    }
    }
)