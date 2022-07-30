<script lang="ts">
    import { onMount } from 'svelte';
    import { flip } from 'svelte/animate';
    import { fly, slide, crossfade } from 'svelte/transition';
    const [send, receive] = crossfade({});

    const themes = ['dark', 'light', 'bw'];
    const themeNames: { [key: string]: string } = {
        dark: 'Dark Theme',
        light: 'Light Theme',
        bw: 'Black & White'
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
    on:mouseover={() => {
        if (debouncing || menuOpen) return;
        menuOpen = true;
    }}
    on:mouseleave={() => (menuOpen = false)}
    on:focus={() => (menuOpen = true)}
    on:blur={() => (menuOpen = false)}
>
    <div class="flex flex-col border border-primary rounded-[0.45rem]">
        {#each activeThemes as theme (theme)}
            <button
                class="flex flex-row h-10 sm:h-6 {menuOpen ? 'w-24 sm:w-32' : 'w-10 sm:w-12'}"
                style="transition: width 0.3s"
                animate:flip={{ duration: 300 }}
                in:receive={{ key: theme }}
                out:send={{ key: theme }}
                on:click={() => {
                    if (menuOpen) {
                        debouncing = true;
                        setTimeout(() => {
                            debouncing = false;
                        }, 300);
                    }
                    menuOpen = !menuOpen;
                }}
                on:touchstart|preventDefault={() => {
                    if (menuOpen) {
                        debouncing = true;
                        setTimeout(() => {
                            debouncing = false;
                        }, 300);
                    }
                    menuOpen = !menuOpen;
                }}
            >
                <span
                    class="bg-primary w-6 
                        {menuOpen
                        ? 'rounded-tl-md basis-3/4 sm:basis-5/6'
                        : 'rounded-l-md basis-1/2'}"
                >
                    {#if menuOpen}
                        <p
                            class="text-xs sm:text-base leading-10 sm:leading-6 text-primary text-center select-none"
                            in:fly={{ x: -10, duration: 500, opacity: 0 }}
                        >
                            {themeNames[currentTheme]}
                        </p>
                    {/if}
                </span>
                <span
                    class="text-accent-contrast text-center bg-accent 
                        {menuOpen
                        ? 'rounded-tr-md basis-1/4 sm:basis-1/6'
                        : 'rounded-r-md basis-1/2'}"
                />
            </button>
        {/each}

        {#if menuOpen}
            <div in:slide={{ duration: 400 }} out:slide={{ duration: 100 }}>
                {#each inactiveThemes as theme, index (theme)}
                    <div
                        class={theme}
                        animate:flip
                        in:receive={{ key: theme }}
                        out:send={{ key: theme }}
                    >
                        <button
                            class="w-full h-10 sm:h-6 flex flex-row"
                            on:click={() => selectTheme(theme)}
                        >
                            <span
                                class="bg-primary w-6 basis-3/4 sm:basis-5/6 
                                {index === inactiveThemes.length - 1 ? 'rounded-bl-md' : ''}"
                            >
                                <p
                                    class="text-xs sm:text-base leading-10 sm:leading-6 text-primary text-center"
                                    in:fly={{ x: -10, duration: 500, opacity: 0 }}
                                >
                                    {themeNames[theme]}
                                </p>
                            </span>
                            <span
                                class="text-accent-contrast bg-accent basis-1/4 sm:basis-1/6
                                {index === inactiveThemes.length - 1 ? 'rounded-br-md' : ''}"
                            />
                        </button>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
