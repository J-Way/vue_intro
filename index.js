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
    el: "#hover_if",
    data: {
        seen: false
    }
})