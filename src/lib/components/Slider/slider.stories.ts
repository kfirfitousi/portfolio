import Slider from './Slider.svelte';
import '$src/app.css';

export default {
    title: "Slider",
    component: Slider
}

export const Default = () => ({
    Component: Slider,
    props: {
        car: "/static/car.webp"
    }
})