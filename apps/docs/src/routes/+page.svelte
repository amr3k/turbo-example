<script lang="ts">
	import { PUBLIC_EXAMPLE_VAR } from '$env/static/public';
	import { MyCounterButton } from '@repo/ui';

	export let data;
</script>

<h1>Docs</h1>
<MyCounterButton />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Public variable</h2>
<pre>{PUBLIC_EXAMPLE_VAR}</pre>
<h2>Private variable</h2>
<pre>{data.variable}</pre>
