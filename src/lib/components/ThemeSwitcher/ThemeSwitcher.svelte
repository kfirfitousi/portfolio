<script lang="ts">
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate';
    import { fly, slide, crossfade } from 'svelte/transition';
    const [send, receive] = crossfade({});

    const themes = ['dark', 'light', 'bw', 'sky', 'neon'] as const;

    type Theme = typeof themes[number];

    const themeNames: {
        [key in Theme]: string;
    } = {
        dark: 'Dark',
        light: 'Light',
        bw: 'Grayscale',
        sky: 'Sky Blue',
        neon: 'Neon'
    };

    let activeThemes: [Theme] = ['dark'];
    let inactiveThemes: Theme[];
    $: currentTheme = activeThemes[0];

    let menuOpen = false;
    let debouncing = false;
    let timeoutId: NodeJS.Timeout;

    let themeSwitcherElement: HTMLElement;

    onMount(() => {
        document.documentElement.className = localStorage.theme;
        activeThemes = [localStorage.theme];
        inactiveThemes = themes.filter((theme) => localStorage.theme !== theme);
    });

    const selectTheme = (theme: Theme) => {
        document.documentElement.className = theme;
        localStorage.theme = theme;
        inactiveThemes = [...inactiveThemes.filter((t: Theme) => t !== theme), currentTheme];
        activeThemes = [theme];
    };

    const debounce = () => {
        debouncing = true;
        setTimeout(() => {
            debouncing = false;
        }, 400);
    };

    const touchHandler = (e: TouchEvent) => {
        if (!themeSwitcherElement.contains(e.target as HTMLElement)) {
            menuOpen = false;
            debounce();
        }
    };
</script>

<svelte:window on:touchstart={touchHandler} />

<svelte:head>
    <script>
        if (!('theme' in localStorage)) {
            localStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        document.documentElement.className = localStorage.theme;
    </script>
</svelte:head>

<div
    bind:this={themeSwitcherElement}
    on:mouseenter={() => {
        clearTimeout(timeoutId);
        if (debouncing) return;
        menuOpen = true;
        debounce();
    }}
    on:mouseleave={() => {
        timeoutId = setTimeout(() => {
            menuOpen = false;
            debounce();
        }, 300);
    }}
    class="p-5 -m-5 select-none"
>
    <div
        class="flex flex-col border border-accent dark:border-primary
            {menuOpen ? 'rounded-[0.9rem]' : 'rounded-full'}"
        style="transition: border-radius 0.1s step-end 0.1s;"
    >
        {#each activeThemes as theme (theme)}
            <button
                class="flex flex-row h-9 sm:h-7 {menuOpen ? 'w-20 sm:w-24' : 'w-14 sm:w-12'}"
                style="transition: width 0.3s"
                animate:flip={{ duration: 400 }}
                in:receive={{ key: theme, duration: 400 }}
                out:send={{ key: theme, duration: 0 }}
                on:click={() => {
                    if (debouncing) return;
                    menuOpen = !menuOpen;
                    debounce();
                }}
                on:touchstart|preventDefault={() => {
                    if (debouncing) return;
                    menuOpen = !menuOpen;
                    debounce();
                }}
            >
                <label for="button" class="sr-only">Theme Switcher</label>
                {#if menuOpen}
                    <span
                        class="w-6 {menuOpen
                            ? 'order-1 rounded-tl-[0.83rem] basis-3/4 sm:basis-4/5'
                            : 'order-2 rounded-l-full basis-1/2'}"
                    >
                        <p
                            class="text-sm sm:text-base leading-9 sm:leading-7 text-primary text-center neon:animate-neon-text-subtle select-none"
                            in:fly={{ x: 5, duration: 100, opacity: 0 }}
                        >
                            {themeNames[currentTheme]}
                        </p>
                    </span>
                {/if}
                <span
                    class="bg-accent {menuOpen
                        ? 'order-2 rounded-tr-[0.83rem] basis-1/4 h-9 sm:h-7 sm:basis-1/5'
                        : 'order-1 rounded-full basis-1/2 h-7 sm:h-6 my-1 sm:my-0.5 ml-1 sm:ml-0.5'}"
                    style="transition: border-radius 0.4s"
                />
            </button>
        {/each}

        {#if menuOpen}
            {#each inactiveThemes as theme, index (theme)}
                {@const last = index === inactiveThemes.length - 1}
                <div
                    class={theme}
                    animate:flip={{ duration: 400 }}
                    in:receive={{ key: theme, duration: 400 }}
                    out:send={{ key: theme, duration: 400 }}
                >
                    <button
                        class="w-full h-9 sm:h-7 flex flex-row"
                        on:click={() => {
                            if (debouncing) return;
                            selectTheme(theme);
                            debounce();
                        }}
                        on:touchstart|preventDefault={() => {
                            if (debouncing) return;
                            selectTheme(theme);
                            debounce();
                        }}
                        in:slide={{ duration: 200, delay: 200 }}
                        out:slide={{ duration: 100, delay: 200 }}
                    >
                        <span
                            class="bg-primary w-6 basis-3/4 sm:basis-4/5 
                                {last ? 'rounded-bl-[0.83rem]' : ''}"
                        >
                            <p
                                class="text-sm sm:text-base leading-9 sm:leading-7 text-primary text-center select-none 
                                    {theme === 'neon' ? 'animate-neon-text-subtle' : ''}"
                            >
                                {themeNames[theme]}
                            </p>
                        </span>
                        <span
                            class="h-9 sm:h-7 text-accent-contrast bg-accent basis-1/4 sm:basis-1/5 
                                {last ? 'rounded-br-[0.83rem]' : ''}"
                        />
                    </button>
                </div>
            {/each}
        {/if}
    </div>
</div>
