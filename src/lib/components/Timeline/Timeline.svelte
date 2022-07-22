<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    
    let offsetX = 0;
    let trackWidth = 640;
    let carWidth = 80;
    let windowWidth: number;
    
    export let car = "/car.webp";
    export let years: number[];
    export let yearsText: string[];

    $: selectedYear = years[Math.round((offsetX + carWidth*1.1) / trackWidth * years.length) - 1];
    
    $: position = {
        x: offsetX,
        y: 0
    };

    $: {
        offsetX = 0;
        windowWidth = windowWidth;
    }
</script>

<svelte:window 
    bind:innerWidth={windowWidth}
    on:keydown={(e) => {
        if (e.key === "ArrowLeft") {
            offsetX = Math.max(offsetX - carWidth, 0);
        } else if (e.key === "ArrowRight") {
            offsetX = Math.min(offsetX + carWidth, trackWidth - carWidth);
        }
    }}
/>

<section aria-label="Timeline">
    <div class="w-10 md:w-14 h-5 mx-3 mb-3.5 text-xs md:text-base leading-5 md:leading-5 bg-pink-900 text-zinc-50 text-center rounded-lg select-none"
        style="transform: translateX({ offsetX }px)"
        aria-label="Year"
    >
        {selectedYear}
    </div>
    
    <div bind:clientWidth={trackWidth} class="flex items-end w-full h-2 md:h-3 bg-gray-600 mx-auto rounded-t-lg select-none">
        <div class="w-16 h-6 mb-0.5 md:w-20 md:h-8 md:mb-0 bg-cover bg-no-repeat"
            style="background-image: url({ car })"
            aria-label="Slider"
            aria-keyshortcuts="ArrowLeft ArrowRight"
            aria-controls="Year Text"
            bind:clientWidth={carWidth} 
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
    
    <div class="w-full bg-zinc-50 pt-1 rounded-b-lg" aria-label="Year Text">
        <p class="text-sm text-center text-gray-600">
            Drag the racecar across the track to progress through the timeline
        </p>
        <p class="py-4 px-8 text-zinc-800">
            {@html yearsText[selectedYear - years[0]]}
        </p>
    </div>
</section>