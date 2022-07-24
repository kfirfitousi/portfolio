<script>
    import Footer from '$lib/components/Footer';
    import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

    import '../app.css';
</script>

<svelte:head>
    <script>
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    </script>
</svelte:head>

<GoogleAnalytics properties={['G-HGJMJDZJ2Q']} />

<div class="flex flex-col h-screen">
    <div class="grow mt-6 mb-4">
        <slot />
    </div>

    <Footer />
</div>
