<script lang="ts">
    import { onMount } from 'svelte';

    let quote: string;
    const quotes = [
        "Well, pitter patter, let's get at 'er.",
        "Look if you are coming, you better come correct.",
        "Not my pig, not my farm.",
        "Hard no.",
        "And I suggest you let that one marinate."
    ];

    onMount(() => {
        quote = quotes[Math.floor(Math.random() * quotes.length)]
    })
</script>

<p class="text-8xl text-center text-zinc-200 mt-10 mb-4">404</p>
{#if quote}
<p class="text-xl text-center text-zinc-200">"{quote}"</p>
{/if}