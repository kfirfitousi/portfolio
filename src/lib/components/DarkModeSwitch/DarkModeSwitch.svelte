<script lang="ts">
    import { onMount } from 'svelte';
    import { draggable } from '@neodrag/svelte';

    export let theme = 'dark';
    let x = 0;
    let y = 0;

    let dragged = false;
    let border = false;
    let timeoutId: NodeJS.Timeout;

    const originalPosition = { x, y };
    $: position = { x, y };

    onMount(() => {
        theme = localStorage.theme;
    });

    const toggleDarkMode = () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        localStorage.theme = theme;

        theme === 'dark'
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    };
</script>

<svelte:window
    on:resize={() => {
        x = originalPosition.x;
        y = originalPosition.y;
    }}
/>

<button
    on:click={dragged ? null : toggleDarkMode}
    type="button"
    aria-label="Dark Mode Switch"
    class="visible text-zinc-600 dark:text-zinc-300 rounded-xl text-sm p-2.5 border-zinc-600 dark:border-zinc-300"
    class:cursor-move={dragged}
    class:border
    use:draggable={{
        axis: 'both',
        position,
        bounds: 'body',
        onDrag: (e) => {
            x = e.offsetX;
            y = e.offsetY;
        },
        onDragStart: () => {
            border = true;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                dragged = true;
            }, 300);
        },
        onDragEnd: () => {
            border = false;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                dragged = false;
            }, 300);
        }
    }}
>
    <svg
        class="w-5 h-5"
        class:hidden={theme === 'dark'}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-label="Switch to dark mode"
    >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
    <svg
        class="w-5 h-5"
        class:hidden={theme === 'light'}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-label="Switch to light mode"
    >
        <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0
        018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 
        1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 
        1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 
        11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 
        1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 
        011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        />
    </svg>
</button>
