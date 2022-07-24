<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import SvelteTooltip from 'svelte-tooltip';

    export let tip: string;
    export let link: string;
    export let icon: typeof SvelteComponent;
    export let theme: string;
</script>

<div class="text-zinc-100 text-sm">
    {#if theme === 'dark'}
        <SvelteTooltip {tip} color="#831843" bottom>
            <a href={link} target="_blank" aria-label={tip}>
                <svelte:component this={icon} />
            </a>
        </SvelteTooltip>
    {:else}
        <SvelteTooltip {tip} color="#BE123C" bottom>
            <a href={link} target="_blank" aria-label={tip}>
                <svelte:component this={icon} />
            </a>
        </SvelteTooltip>
    {/if}
</div>
