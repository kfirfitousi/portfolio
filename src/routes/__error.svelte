<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ fetch }) => {
        const response = await fetch('/quote');
        const { quote } = await response.json();
        return {
            props: {
                quote
            }
        }
    }
</script>

<script lang="ts">
    export let quote: string;
</script>

<p class="text-8xl text-center text-zinc-200 mt-10 mb-4">404</p>
{#if quote}
<p class="text-xl text-center text-zinc-200">"{quote}"</p>
{/if}