import { createApp } from 'vue';

import He from './components/hello-world.vue';

let a: number = 1;
console.log(a);

createApp(He).mount('#app');
