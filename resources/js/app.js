import './bootstrap';
import '../css/app.css';

// Import jQuery first (important for Bootstrap and AdminLTE)
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// Import Bootstrap 4.6.1 (matching AdminLTE version)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Import AdminLTE after Bootstrap
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Vue and Inertia imports
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
