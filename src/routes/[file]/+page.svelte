<script>
	import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { isFile, downloadFile } from '$lib/appwrite';
    import { Button } from "$components";
	import { onMount } from "svelte";
    
    const file = page.params.file;

    let responded = $state(false);
    let link = $state('');
    onMount(() => {
        const promise = isFile(file);
        promise.then(function (response) {
            if (response.total === 0) {
                goto("/?e=0");
                return;
            }
            link = downloadFile(file);
            responded = true;
        }, function (error) {
            console.error(error);
            goto("/?e=1");
        });
    });
</script>

{#if !responded}
    <h1 class="text-center text-[4em] font-black mt-[20%] title">Loading...</h1>
{:else}
    <a href={link} download><h1 class="text-center text-[4em] font-black mt-[20%] title underline">Download {file}</h1></a>
    <div class="m-auto w-fit mt-[12%]"><Button onclick={() => goto('/')} class="text-xl h-12">Back</Button></div>
{/if}

<style>
    .title {
        text-shadow: 0 0 10px #00BC7D, 0 0 20px #00BC7D, 0 0 30px #00BC7D;
    }
    a {
        outline: none;
    }
</style>
