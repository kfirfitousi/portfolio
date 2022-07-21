<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import SvelteTooltip from 'svelte-tooltip';
    export let tip: string;
    export let link: string;
    export let Icon: typeof SvelteComponent;
</script>

<div class="text-zinc-200 text-xs">
    <SvelteTooltip tip={tip} color="#831843" bottom>
        <a href={link} target="_blank">
            <svelte:component this={Icon} />
        </a>
    </SvelteTooltip>
</div>