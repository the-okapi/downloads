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

<h1 class="text-center text-[4em] font-black mt-[13%] title">the Okapi Downloads</h1>

<h1 class="text-center text-[2em] font-black mt-[3%]">
    {#if e.length === 0}<span class="invisible">/</span>{:else if e[0] === '0'}<span class="error">That file does not exist</span>{:else if e[0] === '1'}<span class="error">There was an error</span>{/if}</h1>

<div class="m-auto w-fit align-middle mt-[7%]">
    <form {onsubmit}>
        <Label class="ml-0.5 text-xl" for="download">File ID:</Label>
        <div class="flex mt-1.5">
            <Input id="download" type="text" class="text-xl h-12" placeholder="Rickroll" bind:value={file} />
            <Button type="submit" class="ml-2 text-xl h-12">Go</Button>
        </div>
    </form>
</div>

<style>
    .title {
        text-shadow: 0 0 10px #00BC7D, 0 0 20px #00BC7D, 0 0 30px #00BC7D;
    }
    .error {
        text-shadow: 0 0 10px #E11D48, 0 0 20px #E11D48;
    }
    .invisible {
        color: var(--background);
    }
</style>