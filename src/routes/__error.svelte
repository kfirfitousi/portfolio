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
    import ThemeSwitcher from '$lib/components/ThemeSwitcher';

    export let quote: string;
</script>

<svelte:head>
    <title>Kfir Fitousi | Front End Developer</title>
</svelte:head>

<main class="conatiner max-w-2xl mx-auto px-4">
    <div class="absolute inset-y-6">
        <ThemeSwitcher />
    </div>

    <p class="text-9xl text-center text-primary mt-16 mb-4 neon:animate-neon-text">404</p>
    {#if quote}
        <p
            class="text-xl italic text-center text-primary neon:animate-neon-text neon:tracking-wider"
        >
            "{quote}"
        </p>
    {/if}
</main>
