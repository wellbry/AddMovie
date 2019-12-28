import App from 'App.js'

Vue.config.devtools = true;
new Vue({
    render: h => h(App)
}).$mount('#app')