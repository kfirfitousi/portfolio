<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    
    let offsetX = 0;
    let trackWidth = 640;
    let carWidth = 80;
    let windowWidth: number;
    
    export let car = "/car.webp";
    export let years: number[];
    export let yearsText: string[];

    $: selectedYear = years[
        Math.min(
            Math.max(Math.ceil(offsetX / trackWidth * years.length), 0), 
            years.length - 1
        )
    ];
    
    $: position = {
        x: offsetX,
        y: 0
    };

    $: {
        offsetX = 0;
        windowWidth = windowWidth;
    };
</script>

<svelte:window 
    bind:innerWidth={windowWidth}
    on:keydown={(e) => {
        if (document.getElementById("slider") === document.activeElement) {
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                e.preventDefault();
                offsetX = Math.min(offsetX + (trackWidth / years.length), trackWidth - carWidth);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                e.preventDefault();
                offsetX = Math.max(offsetX - (trackWidth / years.length), 0);
            }
        }
    }}
/>

<section aria-label="Timeline">
    <div bind:clientWidth={trackWidth} class="flex items-end w-full h-2 md:h-3 bg-gray-600 mx-auto rounded-t-lg select-none">
        <button 
            class="w-16 md:w-20 h-6 md:h-8 mb-0.5 md:mb-0 bg-cover bg-no-repeat"
            style="background-image: url({ car })"
            id="slider" 
            role="slider"
            aria-valuemin={years[0]}
            aria-valuemax={years[years.length - 1]}
            aria-valuenow={selectedYear}
            aria-label="Racecar Slider"
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
            }}
        />
    </div>
    
    <div class="w-full bg-zinc-50 dark:bg-zinc-500 rounded-b-lg">
        <div 
            class="
                w-16 md:w-20 mb-0.5 py-0.5 md:text-lg leading-5 md:leading-5 
                bg-rose-700 dark:bg-pink-900 text-zinc-100 text-center select-none
            "
            class:rounded-bl-lg={offsetX !== 0}
            class:rounded-br-lg={offsetX !== trackWidth - carWidth}
            style="transform: translateX({ offsetX }px)"
            aria-label="Year"
        >
            {selectedYear}
        </div>

        <label for="slider">
            <p class="text-sm text-center text-gray-600 dark:text-gray-300">
                Drag the racecar across the track to progress through the timeline
            </p>
        </label>
        
        <p class="text-lg py-4 px-8 text-zinc-800 dark:text-zinc-100" aria-label="Year Text">
            {@html yearsText[selectedYear - years[0]]}
        </p>
    </div>
</section>