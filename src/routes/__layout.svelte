<script>
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="flex flex-col h-screen">
	<slot />
	<Footer />
</div>
