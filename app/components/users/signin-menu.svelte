<svelte:options tag="signin-menu" />

<script lang="ts">
    import { firebaseSignOut } from "../../util/firebase";
    import { user } from "../../stores/user";
</script>

{#if $user}
    <li on:click={firebaseSignOut}>Logout</li>
{:else}
    <li><modal-action name="login">Login</modal-action></li>
{/if}

<style>
    li{
        position: relative;
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: stretch;
        @apply px-3 py-1;
    }
</style>
