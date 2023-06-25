<svelte:options tag="user-data" />

<script lang="ts">
    import { user, userData } from "../../stores/user";
    export let field: "email" | "photoUrl" | "name" | "uid" | "role";

    let src;

    $: {
        src = $user?.photoURL ?? "/img/avatar.svg";
    }
</script>

{#if field === "email"}
    {$user?.email}
{/if}
{#if field === "photoUrl"}
    <img
        {src}
        alt="avatar"
        referrerpolicy="no-referrer"
        style="max-width: 100%; border-radius: 9999px;"
        on:error={() => (src = "/img/avatar.svg")}
    />
{/if}
{#if field === "name"}
    {$user?.displayName}
{/if}
{#if field === "uid"}
    {$user?.uid}
{/if}
{#if field === "role"}
    {$userData?.role}
{/if}

