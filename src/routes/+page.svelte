<script lang="ts">
	import { goto } from '$app/navigation';
	import { Input, Label, Button } from '$components';
	import { page } from '$app/state';

	let file = $state('');
	function onsubmit(event: Event) {
		event.preventDefault();
		goto(`/${file.toLowerCase()}`);
	}
	let e = page.url.searchParams.getAll('e');
</script>

<h1 class="title mt-[13%] text-center text-[4em] font-black">the Okapi Downloads</h1>

<h1 class="mt-[3%] text-center text-[2em] font-black">
	{#if e.length === 0}<span class="invisible">/</span>{:else if e[0] === '0'}<span class="error"
			>That file does not exist</span
		>{:else if e[0] === '1'}<span class="error">There was an error</span>{/if}
</h1>

<div class="m-auto mt-[7%] w-fit align-middle">
	<form {onsubmit}>
		<Label class="ml-0.5 text-xl" for="download">File ID:</Label>
		<div class="mt-1.5 flex">
			<Input
				id="download"
				type="text"
				class="h-12 text-xl"
				placeholder="Rickroll"
				bind:value={file}
			/>
			<Button type="submit" class="ml-2 h-12 text-xl">Go</Button>
		</div>
	</form>
</div>

<style>
	.title {
		text-shadow:
			0 0 10px #00bc7d,
			0 0 20px #00bc7d,
			0 0 30px #00bc7d;
	}
	.error {
		text-shadow:
			0 0 10px #e11d48,
			0 0 20px #e11d48;
	}
	.invisible {
		color: var(--background);
	}
</style>
