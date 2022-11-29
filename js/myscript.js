// const tasks = [
//     { text: 'Fare i compiti', done: false }, 
//     { text: 'Fare la spesa', done: true }, 
//     { text: 'Fare il bucato', done: false }
// ];

const app = Vue.createApp({
    data(){
        return {
            tasks: [
                { text: 'Fare i compiti', done: false }, 
                { text: 'Fare la spesa', done: true }, 
                { text: 'Fare il bucato', done: false }
            ],
            input: '',
        }
    },
    methods: {
        add(){
            this.tasks.push({ text: this.input, done: false });
            this.input = '';
            
        }
    },
})

app.mount('#app')
