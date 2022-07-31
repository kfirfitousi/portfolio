<script lang="ts">
    import { draggable } from '@neodrag/svelte';

    let offsetX = 0;
    let trackWidth = 640;
    let carWidth = 80;
    let windowWidth: number;

    export let years: number[];
    export let yearsText: string[];

    $: selectedYear =
        years[
            Math.min(
                Math.max(Math.ceil((offsetX / trackWidth) * years.length), 0),
                years.length - 1
            )
        ];

    let preloadImages = new Set<number>();
    let loadedImages = [years[0]];

    $: {
        if (preloadImages.has(selectedYear) && selectedYear + 1 <= years[years.length - 1]) {
            preloadImages.add(selectedYear + 1);
        }
        selectedYear = selectedYear;
    }

    $: position = {
        x: offsetX,
        y: 0
    };

    $: {
        offsetX = 0;
        windowWidth = windowWidth;
    }
</script>

<svelte:head>
    {#each Array.from(preloadImages) as image}
        <link
            rel="preload"
            href="/cars/{image}.webp"
            as="image"
            on:load={() => (loadedImages = [...loadedImages, image])}
        />
    {/each}
</svelte:head>

<svelte:window
    bind:innerWidth={windowWidth}
    on:keydown={(e) => {
        if (document.getElementById('slider') === document.activeElement) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault();
                offsetX = Math.min(offsetX + trackWidth / years.length, trackWidth - carWidth);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault();
                offsetX = Math.max(offsetX - trackWidth / years.length, 0);
            }
        }
    }}
/>

<section class="rounded-lg shadow-md sky:shadow-xl shadow-primary" aria-label="Timeline">
    <div
        bind:clientWidth={trackWidth}
        class="flex items-end w-full h-2 md:h-3 bg-track mx-auto rounded-t-lg select-none"
    >
        <button
            class="w-16 md:w-20 h-6 md:h-8 mb-0.5 md:mb-0 "
            id="slider"
            role="slider"
            aria-valuemin={years[0]}
            aria-valuemax={years[years.length - 1]}
            aria-valuenow={selectedYear}
            aria-label="Racecar Slider"
            aria-controls="year-text"
            aria-keyshortcuts="ArrowLeft ArrowUp ArrowRight ArrowDown"
            bind:clientWidth={carWidth}
            use:draggable={{
                axis: 'x',
                bounds: 'parent',
                position,
                onDrag: (e) => {
                    offsetX = e.offsetX;
                }
            }}
            on:mouseover={() => {
                preloadImages = preloadImages.add(years[0]);
            }}
            on:focus={() => preloadImages.add(years[0])}
        >
            {#if loadedImages.includes(selectedYear)}
                <div
                    class="w-full h-full bg-contain bg-no-repeat bw:grayscale"
                    style="background-image: url(cars/{selectedYear}.webp)"
                />
            {:else}
                <div
                    class="w-full h-full bg-contain bg-no-repeat bw:grayscale"
                    style="background-image: url(cars/{loadedImages[loadedImages.length - 1]}.webp)"
                />
            {/if}
        </button>
    </div>

    <div class="w-full bg-secondary rounded-b-lg">
        <div
            class="
                w-16 md:w-20 mb-0.5 py-0.5 md:text-lg leading-5 md:leading-5 
                bg-accent text-accent-contrast text-center select-none
            "
            class:rounded-bl-lg={offsetX !== 0}
            class:rounded-br-lg={offsetX !== trackWidth - carWidth}
            style="transform: translateX({offsetX}px)"
            aria-label="Year"
        >
            {selectedYear}
        </div>

        <label for="slider">
            <p class="text-sm text-center text-accent dark:text-light tracking-wide">
                Drag the racecar across the track to progress through the timeline
            </p>
        </label>

        <p class="text-lg py-4 px-8 text-secondary" aria-label="Year Text" id="year-text">
            {@html yearsText[selectedYear - years[0]]}
        </p>
    </div>
</section>
