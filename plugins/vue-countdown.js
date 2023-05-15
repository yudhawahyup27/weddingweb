import { createApp } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp({});

app.component(VueCountdown.name, VueCountdown);