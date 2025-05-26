<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { isFile } from '$lib/appwrite';
	import { Button } from '$components';
	import { onMount } from 'svelte';

	const file = page.params.file;

	let responded = $state(false);
	let link = $state('');
	onMount(async () => {
		const [code, message] = await isFile(file);
		if (code === 1) {
			goto('/?e=0');
			return;
		} else if (code === 2) {
			goto('/?e=1');
			return;
		}
		link = message;
		responded = true;
	});
</script>

{#if !responded}
	<h1 class="title mt-[20%] text-center text-[4em] font-black">Loading...</h1>
{:else}
	<a href={link} download
		><h1 class="title mt-[20%] text-center text-[4em] font-black underline">Download {file}</h1></a
	>
	<div class="m-auto mt-[12%] w-fit">
		<Button onclick={() => goto('/')} class="h-12 text-xl">Back</Button>
	</div>
{/if}

<style>
	.title {
		text-shadow:
			0 0 10px #00bc7d,
			0 0 20px #00bc7d,
			0 0 30px #00bc7d;
	}
	a {
		outline: none;
	}
</style>
