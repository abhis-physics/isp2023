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
