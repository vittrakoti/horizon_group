import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faFacebookF, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


// Add icons to the library
library.add(faFacebookF, faTiktok, faXTwitter, faAngleDown)

// Create the Vue app instance first
const app = createApp(App)

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Mount the app
app.mount('#app')


