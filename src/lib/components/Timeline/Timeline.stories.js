import Timeline from './Timeline.svelte';
import { years, yearsText } from '/src/lib/data/timeline.json';
import '/src/app.css';

export default {
    title: 'Timeline',
    component: Timeline
};

export const Default = () => ({
    Component: Timeline,
    props: {
        years,
        yearsText
    }
});
