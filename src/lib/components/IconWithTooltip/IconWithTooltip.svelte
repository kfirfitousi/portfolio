<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import SvelteTooltip from 'svelte-tooltip';

    export let tip: string;
    export let link: string;
    export let icon: typeof SvelteComponent;
</script>

<div class="text-accent-contrast text-sm">
    <SvelteTooltip {tip} color="rgb(var(--backgroundColor-accent))" bottom>
        <a href={link} target="_blank" aria-label={tip}>
            <svelte:component this={icon} />
        </a>
    </SvelteTooltip>
</div>
