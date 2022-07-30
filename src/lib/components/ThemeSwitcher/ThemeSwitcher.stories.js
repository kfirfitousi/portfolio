import ThemeSwitcher from './ThemeSwitcher.svelte';
import '/src/app.css';

export default {
    title: 'Theme Switcher',
    component: ThemeSwitcher
};

export const Normal = () => ({
    Component: ThemeSwitcher
});
