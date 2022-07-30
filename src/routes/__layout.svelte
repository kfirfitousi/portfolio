<script>
    import Footer from '$lib/components/Footer';
    import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

    import '../app.css';
</script>

<GoogleAnalytics properties={['G-HGJMJDZJ2Q']} />

<div class="flex flex-col h-screen">
    <div class="grow mt-6 mb-4">
        <slot />
    </div>

    <Footer />
</div>
