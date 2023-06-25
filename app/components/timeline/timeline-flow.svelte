<svelte:options tag="timeline-flow" />

<script lang="ts">
  import {
    DocumentData,
    QuerySnapshot,
    collection,
    getDocs,
    query,
  } from "firebase/firestore";
  import { db } from "../../util/firebase";
  import { writable } from "svelte/store";
  import { router } from "../../main";

  interface Milestone {
    title: string;
    hours: string;
    intensity: string;
    difficulty: string;
    description: string;
    index: number;
  }

  interface WeekDocument {
    week: string;
    milestones: Milestone[];
    id: string;
  }

  interface NewMilestone {
    title: string;
    hours: string;
    intensity: string;
    difficulty: string;
    description: string[];
    index: number;
  }

  interface NewWeekDocument {
    week: string;
    milestones: NewMilestone[];
    id: string;
  }

  let runSpinner = true;

  export const timeline = writable<NewWeekDocument[]>([]);

  const collectionRef = collection(db, "week");

  const fetchData = async (): Promise<void> => {
    try {
      const snapshot: QuerySnapshot<DocumentData> = await getDocs(
        query(collectionRef)
      );
      const weekDocuments: WeekDocument[] = [];

      snapshot.forEach((doc) => {
        const weekDocument: WeekDocument = {
          id: doc.id,
          week: doc.data().week,
          milestones: doc.data().milestones,
        };
        weekDocuments.push(weekDocument);
      });

      weekDocuments.sort((a, b) => {
        const weekA = parseInt(a.week);
        const weekB = parseInt(b.week);

        return weekA - weekB;
      });

      const newWeekDocuments = weekDocuments.map((weekDocument) => ({
        ...weekDocument,
        milestones: weekDocument.milestones.map((milestone) => ({
          ...milestone,
          description: milestone.description
            .split(/\d./gm)
            .map((d) => d.trim())
            .filter((d) => d != ""),
        })),
      }));

      timeline.set(newWeekDocuments);
      runSpinner = false;
    } catch (error) {
      // Handle any errors that occur during data fetching
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
</script>

{#if runSpinner}
  <span class="loading loading-infinity loading-lg spinner" />
{/if}

<section class="sectionContainer">
  <div class="sectionInnerContainer">
    {#each $timeline as weekDocument (weekDocument.id)}
      <div class="weekContainer">
        <div class="weekColumnContainer">
          <div class="weekInnerColumnContainer">
            <h3 class="weekHeading">
              Week {weekDocument.week}
            </h3>
            <span class="weekSubheading">Minimum 42 Hours</span>
          </div>
        </div>
        <div class="milestonesContainer">
          <div class="milestoneInnerContainer">
            {#each weekDocument.milestones as milestone (milestone.index)}
              <div class="milestoneContainer">
                <div class="triangleCone">
                  <div class="triangleInner" />
                </div>
                <div class="milestoneTitleContainer">
                  <div class="milestoneIndex">{milestone.index + 1}</div>
                  <div class="milestoneTitleAndHours">
                    <h3
                      class="milestoneTitle"
                      on:click={() =>
                        router.go(
                          `/week/${weekDocument.week}/milestone-${
                            milestone.index + 1
                          }`
                        )}
                    >
                      {milestone.title}
                    </h3>
                    {#if milestone.hours != ""}
                      <p class="milestoneHours">{milestone.hours} Hours</p>
                    {/if}
                  </div>
                </div>
                <ol class="milestoneDescription">
                  {#each milestone.description as milestoneItem}
                    <li>{milestoneItem}</li>
                  {/each}
                </ol>
                {#if milestone.intensity != ""}
                  <div class="ratingContainer">
                    <div class="rating rating-sm rating-half my-2">
                      <input
                        type="radio"
                        name="rating-10"
                        class="rating-hidden"
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-1"
                        checked={Number(milestone.intensity) * 2 == 1}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-2"
                        checked={Number(milestone.intensity) * 2 == 2}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-1"
                        checked={Number(milestone.intensity) * 2 == 3}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-2"
                        checked={Number(milestone.intensity) * 2 == 4}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-1"
                        checked={Number(milestone.intensity) * 2 == 5}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-2"
                        checked={Number(milestone.intensity) * 2 == 6}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-1"
                        checked={Number(milestone.intensity) * 2 == 7}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-2"
                        checked={Number(milestone.intensity) * 2 == 8}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-1"
                        checked={Number(milestone.intensity) * 2 == 9}
                      />
                      <input
                        type="radio"
                        name={`rating-${weekDocument.week}-${milestone.index}`}
                        class="bg-green-500 mask mask-star-2 mask-half-2"
                        checked={Number(milestone.intensity) * 2 == 10}
                      />
                    </div>
                    <div class="m-1">{milestone.intensity} Intensity</div>
                  </div>
                {/if}
                {#if milestone.difficulty != ""}
                  <p class="milestoneDifficulty">
                    {milestone.difficulty} difficulty
                  </p>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .sectionContainer {
    @apply bg-gray-800 text-gray-100 ml-6 mr-3;
  }

  .sectionInnerContainer {
    @apply container max-w-5xl md:px-4 py-12 mx-auto;
  }

  .weekContainer {
    @apply grid gap-4 mx-0 md:mx-4 grid-cols-12 mb-5;
  }

  .weekColumnContainer {
    @apply col-span-12 sm:col-span-3;
  }

  .weekInnerColumnContainer {
    @apply text-center md:text-left mt-3 md:mb-14 
    before:content-[''] before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-indigo-400;
  }

  .weekHeading {
    @apply text-3xl font-semibold my-0;
  }

  .weekSubheading {
    @apply text-sm font-bold uppercase text-gray-400;
  }

  .milestonesContainer {
    @apply relative col-span-12 px-0 md:px-4 space-y-6 md:col-span-9;
  }

  .milestoneInnerContainer {
    @apply col-span-12 space-y-12 relative px-0 md:px-4 sm:col-span-8 sm:space-y-8 
    before:content-[''] before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-6 md:before:-left-3 before:bg-gray-700;
  }

  .milestoneContainer {
    @apply bg-base-200 p-4 flex flex-col gap-2 relative 
    before:content-[''] before:absolute before:top-3 before:w-4 before:h-4 before:rounded-full before:left-[-31px] md:before:left-[-35px] before:z-[1] before:bg-indigo-400;
  }

  .triangleCone {
    @apply w-4 overflow-hidden inline-block absolute -ml-8 -mt-2;
  }

  .triangleInner {
    @apply h-8 bg-base-200 -rotate-45 transform origin-top-right;
  }

  .milestoneTitleContainer {
    @apply flex flex-row items-center;
  }

  .milestoneIndex {
    @apply flex-none text-5xl mr-4;
  }

  .milestoneTitleAndHours {
    @apply flex-1;
  }

  .milestoneTitle {
    @apply text-xl font-semibold my-0 cursor-pointer;
  }

  .milestoneHours {
    @apply text-xs uppercase text-gray-400 my-0;
  }

  .milestoneDescription {
    @apply mt-3 mb-0;
  }

  .milestoneDifficulty {
    @apply my-0;
  }

  .ratingContainer {
    @apply flex flex-row -ml-2 gap-2;
  }

  input {
    margin: 0;
  }

  .mask {
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
  }

  .mask-half-1 {
    -webkit-mask-size: 200%;
    mask-size: 200%;
    -webkit-mask-position: left;
    mask-position: left;
  }

  .mask-half-2 {
    -webkit-mask-size: 200%;
    mask-size: 200%;
    -webkit-mask-position: right;
    mask-position: right;
  }

  .rating {
    position: relative;
    display: inline-flex;
  }

  .rating :where(input) {
    cursor: pointer;
    border-radius: 0px;
    animation: rating-pop var(--animation-input, 0.25s) ease-out;
    height: 1.5rem;
    width: 1.5rem;
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: 1;
  }

  .mask-star-2 {
    -webkit-mask-image: url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e");
    mask-image: url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e");
  }

  .rating input {
    appearance: none;
    -webkit-appearance: none;
  }

  .rating .rating-hidden {
    width: 0.5rem;
    background-color: transparent;
  }

  .rating input:checked ~ input{
    --tw-bg-opacity: 0.2;
  }

  .rating input:focus-visible {
    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-0.125em);
  }

  .rating input:active:focus {
    animation: none;
    transform: translateY(-0.125em);
  }

  .rating-half :where(input:not(.rating-hidden)) {
    width: 0.75rem;
  }

  @keyframes rating-pop {
    0% {
      transform: translateY(-0.125em);
    }

    40% {
      transform: translateY(-0.125em);
    }

    100% {
      transform: translateY(0);
    }
  }

  .rating-half.rating-sm input:not(.rating-hidden) {
    width: 0.5rem;
  }
  
  .bg-green-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(34 197 94 / var(--tw-bg-opacity));
  }

  .loading {
    pointer-events: none;
    display: inline-block;
    aspect-ratio: 1 / 1;
    width: 1.5rem;
    background-color: currentColor;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='%23000' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate(360deg)%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class='spinner_V8m1'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3'%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='%23000' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate(360deg)%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class='spinner_V8m1'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3'%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }

  .loading-infinity {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cpath fill='none' stroke='%230a0a0a' stroke-width='10' stroke-dasharray='205.271142578125 51.317785644531256' d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z' stroke-linecap='round' style='transform:scale(0.8);transform-origin:50px 50px'%3E%3Canimate attributeName='stroke-dashoffset' repeatCount='indefinite' dur='2s' keyTimes='0;1' values='0;256.58892822265625'%3E%3C/animate%3E%3C/path%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cpath fill='none' stroke='%230a0a0a' stroke-width='10' stroke-dasharray='205.271142578125 51.317785644531256' d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z' stroke-linecap='round' style='transform:scale(0.8);transform-origin:50px 50px'%3E%3Canimate attributeName='stroke-dashoffset' repeatCount='indefinite' dur='2s' keyTimes='0;1' values='0;256.58892822265625'%3E%3C/animate%3E%3C/path%3E%3C/svg%3E");
  }

  .loading-lg {
    width: 4.5rem;
  }

  .spinner {
    @apply text-secondary flex mx-auto;
  }
</style>
