<script>
    import { onDestroy } from "svelte";
    let seconds = 0;
    const interval = setInterval(() => (seconds += 1), 1000);

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="card svelte">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a>
        <h2>
            Svelte
            <span>&rarr;</span>
        </h2>
        <p class="flex justify-center items-center">
            Has been counting for: {seconds} seconds.
        </p>
    </a>
</div>
