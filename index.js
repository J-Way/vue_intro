var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var notices = new Vue({
    el: '#notice',
    data: {
        notice1: 'notice1',
        notice2: 'notice2'
    }
})

var hover = new Vue({
    el: "#hover",
    data: {
        span_message: " You loaded this page on " + new Date().toLocaleString()
    }
})

var hover_if = new Vue({
    el: "#vue_if",
    data: {
        seen: false
    }
})

// not sure why this works with the spelling difference but it does
// todo (.html) VS. todos (.js)
var vue_for = new Vue({
    el: "#vue_for",
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Learn Something else' }
        ]
    }
})

var vue_binding = new Vue({
    el: "#vue_binding",
    data: {
        message: 'Change Me!?'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})