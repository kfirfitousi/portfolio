<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let summary: string;
    export let image: string;
    export let link: string = "";
    export let github: string = "";
</script>

<div class="rounded-lg">
    <p class="h-8 leading-8 text-lg text-center bg-rose-800 text-rose-50 rounded-t-lg">{title}</p>
    <div class="flex flex-col sm:flex-row">
        <img src="/{image}" alt={title} class="h-full aspect-square sm:h-[22rem] rounded-bl-none sm:rounded-bl-lg" />
        <div class="flex flex-col justify-center w-full p-2 sm:w-1/2 bg-rose-50 text-zinc-800 border-rose-800 border-t sm:border-l sm:border-t-0 rounded-b-lg sm:rounded-bl-none">
            <p class="text-lg text-center">{subtitle}</p>
            <p class="text-center mb-2">{summary}</p>
            <p class="flex flex-row mx-auto mb-2 sm:mb-0 space-x-2"> 
                {#if link}
                <button class="w-16 text-lg bg-rose-800 text-rose-50 hover:bg-rose-600 rounded">
                    <a href={link} target="_blank" alt={title}>Link</a>
                </button>
                {/if}
                {#if github}
                <button class="w-16 text-lg bg-rose-800 text-rose-50 hover:bg-rose-600 rounded">
                    <a href={github} target="_blank" alt="{title} on GitHub">Code</a>
                </button>
                {/if}
            </p>
        </div>
    </div>
</div>