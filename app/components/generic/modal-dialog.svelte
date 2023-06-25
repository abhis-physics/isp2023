<svelte:options tag="modal-dialog" />

<script lang="ts">
  import { modal } from '../../stores/modal';
  export let name = 'default';
  export let esc = false;

  function closeModal() {
    modal.set(null);
  }
</script>

<div class="backdrop" class:show={$modal === name} on:click={closeModal}>
  <div
    on:click|stopPropagation
    class="inner"
    class:inner-show={$modal === name}
  >
    {#if esc}
      <kbd class="esc" on:click={closeModal}>esc</kbd>
    {/if}
    <slot />
  </div>
</div>

<style>
  .backdrop {
    @apply inset-0 fixed bg-opacity-90 bg-neutral z-[99] invisible opacity-0 flex flex-col items-center pt-20;
  }
  .show {
    @apply visible opacity-100;
  }

  .inner {
    /* md:min-w-[480px] md:max-w-3xl */
    @apply w-3/4 md:w-auto md:min-w-[480px] scale-75 opacity-0 bg-accent px-8 py-12 shadow-2xl rounded-md mx-5 max-w-full  h-auto transition-all overflow-y-auto;
  }

  .inner-show {
    @apply scale-100 opacity-100 transition-all duration-200;
  }
  .esc {
    @apply cursor-pointer absolute top-6 right-6 text-xs text-black  border border-solid drop-shadow-md rounded-md border-error bg-opacity-50 p-1.5 hover:bg-error hover:text-white transition-all;
  }
</style>