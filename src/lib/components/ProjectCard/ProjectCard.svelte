<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let summary: string;
    export let image: string;
    export let link = '';
    export let github = '';
    export let lazyImage = true;
</script>

<article
    class="rounded-lg max-w-2xl shadow-primary shadow-md sky:shadow-xl neon:shadow-none"
    aria-label={title}
>
    <h1
        class="text-xl h-10 neon:h-0 leading-10 rounded-t-lg text-center bg-accent text-accent-contrast neon:relative z-10"
    >
        {title}
    </h1>
    <div
        class="flex flex-col sm:flex-row neon:border-x-[1.5rem] neon:border-b-[1.5rem] neon:border-t-[3rem] neon:border-accent neon:rounded-t-lg neon:rounded-b-lg neon:animate-neon-subtle"
    >
        <img
            src={image}
            alt={title}
            class="h-full aspect-square sm:h-[22rem] rounded-bl-none sm:rounded-bl-lg neon:rounded-sm neon:animate-neon-subtle bw:grayscale"
            loading={lazyImage ? 'lazy' : null}
        />
        <div
            class="flex flex-col justify-center w-full p-2 sm:w-1/2 bg-secondary neon:bg-accent text-secondary rounded-b-lg sm:rounded-bl-none"
        >
            <p class="text-xl text-center px-2">{subtitle}</p>
            <p class="text-center mb-2">{summary}</p>
            <p class="flex flex-row mx-auto mb-2 sm:mb-0 space-x-2">
                {#if link}
                    <a
                        class="w-16 text-lg text-center text-secondary hover:text-accent-contrast neon:hover:text-accent hover:bg-accent neon:hover:bg-accent-contrast
                            border border-secondary hover:border-accent rounded shadow-primary hover:shadow-md"
                        href={link}
                        target="_blank"
                        alt={title}>Link</a
                    >
                {/if}
                {#if github}
                    <a
                        class="w-16 text-lg text-center text-secondary hover:text-accent-contrast neon:hover:text-accent hover:bg-accent neon:hover:bg-accent-contrast
                            border border-secondary hover:border-accent rounded shadow-primary hover:shadow-md"
                        href={github}
                        target="_blank"
                        alt="{title} on GitHub">Code</a
                    >
                {/if}
            </p>
        </div>
    </div>
</article>
