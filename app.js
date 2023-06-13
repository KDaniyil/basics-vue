const app =  Vue.createApp({
    data(){
        return {
            counter: 0,
            title: "List of notes",
            placeholderStr: "Please enter your notes...",
            inputValue: "",
            notes: [],
            person:{
                name: "Daniyil",
                surname: "Kudryavtsev",
                age: 33
            },
            items:[1,2,3,4,5]
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
        },
        addItem(){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value =" "
        }
        
    },
    computed:{
        doubleCountComputed(){
            console.log("double count computed")
            return this.notes.length *2
        },
        evenItems(){
            return this.items.filter(i=> i % 2 === 0)
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
