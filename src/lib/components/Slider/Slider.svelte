<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    
    export let car = "/car.webp";
    export let offsetX = 0;
    export let trackWidth = 0;
    let windowWidth: number;

    $: position = {
        x: offsetX,
        y: 0
    };

    $: {
        offsetX = 0;
        windowWidth = windowWidth;
    }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div bind:clientWidth={trackWidth} class="flex items-end w-full h-2 md:h-3 bg-gray-600 mx-auto rounded-t-lg select-none">
    <div class="w-16 h-6 mb-0.5 md:w-20 md:h-8 md:mb-0 bg-cover bg-no-repeat"
        style="background-image: url({ car })"
        use:draggable={{
            axis: 'x',
            bounds: 'parent',
            position,
            onDrag: (e) => {
                offsetX = e.offsetX;
            }
        }}>
    </div>
</div>
