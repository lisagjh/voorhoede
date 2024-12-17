<script>
    let { showModal = $bindable(), content } = $props();

    let dialog = $state();

    $effect(() => {
        if (showModal) dialog.showModal();
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div>
		{@render content?.()}
		<!-- svelte-ignore a11y_autofocus -->
	</div>
</dialog>

<style>

	dialog {
		border: none;
        background-color: inherit;
        position: fixed;
        top: 20%;
        left: 5%;
        right: 5%;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.65);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
    @keyframes zoom {
		from {
			transform: scale(0.75);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

    @media(min-width: 400px){
        dialog{
            top: 25%;
            left: 40%;
        }
    }

</style>