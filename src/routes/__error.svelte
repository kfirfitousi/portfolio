<script context="module" lang="ts">
    import type { Load } from './__types/__error';

    type OutputProps = {
        quote: string;
    };

    export const load: Load<OutputProps> = async ({ fetch }) => {
        const response = await fetch('/quote');
        const { quote } = await response.json();
        return {
            props: {
                quote
            }
        };
    };
</script>

<script lang="ts">
    export let quote: string;
</script>

<p class="text-9xl text-center text-primary mt-10 mb-4">404</p>
{#if quote}
    <p class="text-xl italic text-center text-primary">"{quote}"</p>
{/if}
