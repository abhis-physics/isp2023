<svelte:options tag="days-left" />

<script lang="ts">
    let daysLeft = (() => {
        const currentDate = new Date();
        const targetDate = new Date(2023, 8, 15);
        const diffInMilliseconds = targetDate.getTime() - currentDate.getTime();
        const daysDifference = Math.floor(
            diffInMilliseconds / (1000 * 60 * 60 * 24)
        );
        if (daysDifference <= 0) {
            return `Your days are over!`;
        } else if (daysDifference == 1) {
            return `You have 1 day left for mains`;
        } else {
            return `You have ${daysDifference} days left for mains`;
        }
    })();
</script>

<div>
    {daysLeft}
</div>