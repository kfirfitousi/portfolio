<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let summary: string;
    export let image: string;
    export let link = '';
    export let github = '';
    export let lazyImage = true;
</script>

<article class="rounded-lg max-w-2xl" aria-label={title}>
    <h1
        class="text-xl h-10 leading-10 text-center bg-rose-700 dark:bg-pink-900 text-zinc-100 rounded-t-lg"
    >
        {title}
    </h1>
    <div class="flex flex-col sm:flex-row">
        <img
            src={image}
            alt={title}
            class="h-full aspect-square sm:h-[22rem] rounded-bl-none sm:rounded-bl-lg"
            loading={lazyImage ? 'lazy' : null}
        />
        <div
            class="flex flex-col justify-center w-full p-2 sm:w-1/2 bg-zinc-50 dark:bg-zinc-700 text-rose-700 dark:text-zinc-100 rounded-b-lg sm:rounded-bl-none"
        >
            <p class="text-xl text-center">{subtitle}</p>
            <p class="text-center mb-2">{summary}</p>
            <p class="flex flex-row mx-auto mb-2 sm:mb-0 space-x-2">
                {#if link}
                    <a
                        class="w-16 text-lg text-center hover:bg-rose-700 dark:hover:bg-zinc-100 text-rose-700 dark:text-zinc-100 hover:text-zinc-100 dark:hover:text-zinc-700 border border-rose-700 dark:border-zinc-100 rounded"
                        href={link}
                        target="_blank"
                        alt={title}>Link</a
                    >
                {/if}
                {#if github}
                    <a
                        class="w-16 text-lg text-center hover:bg-rose-700 dark:hover:bg-zinc-100 text-rose-700 dark:text-zinc-100 hover:text-zinc-100 dark:hover:text-zinc-700 border border-rose-700 dark:border-zinc-100 rounded"
                        href={github}
                        target="_blank"
                        alt="{title} on GitHub">Code</a
                    >
                {/if}
            </p>
        </div>
    </div>
</article>
