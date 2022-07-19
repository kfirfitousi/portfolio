<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    import { base } from '$app/paths'; 

    export let offsetX = 0;
    export let trackWidth;
    $: position = {
        x: offsetX,
        y: 0
    };
</script>

<svelte:window 
  on:resize={() => {
    offsetX = 0;
  }}
/>


<div bind:clientWidth={trackWidth} class="flex items-end w-full h-2 md:h-3 bg-gray-500 mx-auto rounded-t-lg select-none">
    <div class="w-16 h-6 mb-0.5 md:w-20 md:h-8 md:mb-0 bg-[url({base}/car.png)] bg-cover bg-no-repeat"
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
