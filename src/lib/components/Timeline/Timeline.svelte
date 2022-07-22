<script lang="ts">
    import Slider from '$lib/components/Slider';
    
    let offsetX = 0;
    let trackWidth = 640;

    export let years: number[];
    export let yearsText: string[];

    $: selectedYear = years[Math.floor((offsetX + 80) / trackWidth * years.length) - 1];
</script>

<p class="w-10 md:w-14 h-5 mx-3 mb-3.5 text-xs md:text-base leading-5 md:leading-5 bg-pink-900 text-zinc-50 text-center rounded-lg select-none"
    style="transform: translateX({ offsetX }px)"
>
    {selectedYear}
</p>

<Slider bind:offsetX bind:trackWidth />

<div class="w-full bg-zinc-50 pt-1 rounded-b-lg">
    <p class="text-sm text-center text-gray-600">
        Drag the racecar across the track to progress through the timeline
    </p>
    <p class="py-4 px-8 text-zinc-800">
        {@html yearsText[selectedYear - years[0]]}
    </p>
</div>