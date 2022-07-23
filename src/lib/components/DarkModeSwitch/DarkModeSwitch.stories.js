import DarkModeSwitch from './DarkModeSwitch.svelte';
import '/src/app.css';

export default {
    title: 'Dark Mode Switch',
    component: DarkModeSwitch,
};

export const Normal = () => ({
    Component: DarkModeSwitch
});