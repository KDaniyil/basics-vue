const app =  Vue.createApp({
    data(){
        return {
            counter: 0,
            title: "List of notes",
            placeholderStr: "Please enter your notes...",
            inputValue: "",
            notes: []
        }
    },
    methods: {
        resetCounter(){
            this.counter = 0
        },
        incrementCounter(){
            this.counter += 1
        },
        decrementCounter(){
            if(this.counter > 0){
                this.counter -= 1
            }
        },
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue =""
        },
        deleteNote(index){
            this.notes.splice(index,1)
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        doubleCount(){
            console.log("double count")
            return this.notes.length *2
        }
    },
    computed:{
        doubleCountComputed(){
            console.log("double count computed")
            return this.notes.length *2
        }
    },
    watch:{
        inputValue(value){
            if(value.length > 10){
                this.inputValue = ''
            }
            console.log('input', value)
        }
    }
}).mount("#appVue")
