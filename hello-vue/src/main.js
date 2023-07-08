import { createApp } from 'vue';
import App from './App.vue';

// Exporting the hello api files with bunch of methods to use here
import helloAPI from './services/helloAPI';

let app = createApp(App);

// Using the helloAPI file to be used globally in this project
// Because we are exporting this file globally, We can use and make use of hello_api to other components inside the Vue app.
app.config.globalProperties.$hello_api = helloAPI;

app.mount('#app');
