import Slider from '../lib/components/slider.svelte'
import '../app.css'

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