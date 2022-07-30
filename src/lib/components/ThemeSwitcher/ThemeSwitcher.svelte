<script lang="ts">
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate';
    import { fly, slide, crossfade } from 'svelte/transition';
    import { cubicIn, cubicInOut, cubicOut } from 'svelte/easing';
    const [send, receive] = crossfade({});

    const themes = ['dark', 'light', 'bw'];
    const themeNames: { [key: string]: string } = {
        dark: 'Dark',
        light: 'Light',
        bw: 'Grayscale'
    };

    let activeThemes = ['dark'];
    $: inactiveThemes = themes.filter((theme) => !activeThemes.includes(theme));
    $: currentTheme = activeThemes[0];

    let menuOpen = false;
    let debouncing = false;

    onMount(() => {
        document.documentElement.className = localStorage.theme;
        activeThemes = [localStorage.theme];
    });

    const selectTheme = (theme: string) => {
        document.documentElement.className = theme;
        localStorage.theme = theme;
        activeThemes = [theme];
    };

    const debounce = () => {
        debouncing = true;
        setTimeout(() => {
            debouncing = false;
        }, 300);
    };
</script>

<svelte:head>
    <script>
        if (!('theme' in localStorage)) {
            localStorage.theme = 'dark';
        }
        document.documentElement.className = localStorage.theme;
    </script>
</svelte:head>

<div
    on:mouseenter={() => {
        if (debouncing) return;
        debounce();
        menuOpen = true;
    }}
    on:mouseleave={() => {
        if (debouncing) return;
        debounce();
        menuOpen = false;
    }}
    on:focus={() => (menuOpen = true)}
    on:blur={() => (menuOpen = false)}
    class="p-5 -m-5"
>
    <div class="flex flex-col border border-primary rounded-[0.45rem]">
        {#each activeThemes as theme (theme)}
            <button
                class="flex flex-row h-10 sm:h-7 {menuOpen ? 'w-20 sm:w-24' : 'w-10 sm:w-12'}"
                style="transition: width 0.4s"
                animate:flip={{ duration: 100 }}
                in:receive={{ key: theme, duration: 400 }}
                out:send={{ key: theme, duration: 400 }}
                on:click={() => {
                    if (menuOpen) {
                        debounce();
                    }
                    menuOpen = !menuOpen;
                }}
                on:touchstart|preventDefault={() => {
                    if (menuOpen) {
                        debounce();
                    }
                    menuOpen = !menuOpen;
                }}
            >
                <span
                    class="bg-primary w-6 
                        {menuOpen
                        ? 'rounded-tl-md basis-3/4 sm:basis-4/5'
                        : 'rounded-l-md basis-1/2'}"
                    style="transition: all 0.4s"
                >
                    {#if menuOpen}
                        <p
                            class="text-sm sm:text-base leading-10 sm:leading-7 text-primary text-center select-none"
                            in:fly={{ x: -3, duration: 500, opacity: 0 }}
                        >
                            {themeNames[currentTheme]}
                        </p>
                    {/if}
                </span>
                <span
                    class="bg-accent 
                        {menuOpen
                        ? 'rounded-tr-md basis-1/4 sm:basis-1/5'
                        : 'rounded-r-md basis-1/2'}"
                    style="transition: all 0.4s"
                />
            </button>
        {/each}

        {#if menuOpen}
            {#each inactiveThemes as theme, index (theme)}
                {@const last = index === inactiveThemes.length - 1}
                <div
                    class={theme}
                    animate:flip={{ duration: 100 }}
                    in:receive={{ key: theme, duration: 400 }}
                    out:send={{ key: theme, duration: 400 }}
                >
                    <button
                        class="w-full h-10 sm:h-7 flex flex-row"
                        on:click={() => selectTheme(theme)}
                        transition:slide={{ duration: 400 }}
                    >
                        <span
                            class="bg-primary w-6 basis-3/4 sm:basis-4/5 
                                    {last ? 'rounded-bl-md' : ''}"
                        >
                            <p
                                class="text-sm sm:text-base leading-10 sm:leading-7 text-primary text-center"
                                in:fly={{ x: -10, duration: 500, opacity: 0 }}
                            >
                                {themeNames[theme]}
                            </p>
                        </span>
                        <span
                            class="text-accent-contrast bg-accent basis-1/4 sm:basis-1/5
                                    {last ? 'rounded-br-md' : ''}"
                        />
                    </button>
                </div>
            {/each}
        {/if}
    </div>
</div>
