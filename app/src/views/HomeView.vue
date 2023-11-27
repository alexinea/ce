<script setup lang="ts">
import {setTitle} from "@/hooks/usePageToolkits";

import Anchor from "@/components/basic/AnchorElement.vue";

setTitle("Home");

</script>

<template>

  <div class="responsive-width contribute-together relative">
    <div class="absolute text-7xl text-white font-black left-10 bottom-10">
      COME<br/>TOGETHER
    </div>
  </div>

  <div class="responsive-width contribute-cards">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      <anchor href="/project-join-ncc" route-name="project-join-ncc" title=""
              class="contribute-card cc-01">
        <span class="card-content">
          Project <span class="key-point">Joins NCC</span>
        </span>
        <span class="card-text">
          P
        </span>
      </anchor>

      <anchor href="/contribute-to-project" route-name="contribute-to-project" title=""
              class="contribute-card cc-02">
        <span class="card-content">
          <span class="key-point">Contribute</span> to Member Projects
        </span>
        <span class="card-text">
          C
        </span>
      </anchor>

      <anchor href="/attend-ncc" route-name="attend-ncc" title=""
              class="contribute-card cc-03">
        <span class="card-content">
          <span class="key-point">Attend</span> an Event or Meetup
        </span>
        <span class="card-text">
          A
        </span>
      </anchor>

      <anchor href="/make-ncc-better" route-name="make-ncc-better" title=""
              class="contribute-card cc-04">
        <span class="card-content">
          Make <span class="key-point">TheNCC</span> better
        </span>
        <span class="card-text">
          M
        </span>
      </anchor>

    </div>

  </div>

</template>

<style scoped lang="css">
.contribute-together {
  @apply bg-center bg-cover bg-no-repeat;
  background-image: url("/images/together.webp");
  height: 40rem;
  @apply rounded-2xl;
}

.contribute-cards {

  @apply my-5;
  @apply text-2xl;

  .contribute-card {
    @apply block p-5 rounded-2xl relative;
    @apply h-16 md:h-24 lg:h-36 xl:h-48;
    @apply bg-slate-500/10;
    @apply overflow-hidden;

    .card-text {
      @apply absolute;
      @apply left-0 -bottom-10;
      @apply md:-left-2 md:-bottom-5;
      @apply font-bold text-white/80 dark:text-white/10 italic;
      font-size: 12rem;
      line-height: 1;
    }

    .card-content {
      @apply relative;
      z-index: 1;
    }

    .key-point {
      @apply font-bold underline underline-offset-4 decoration-2;
    }
  }

}

.cc-01:hover {
  @apply bg-pink-900;

  .card-content {
    @apply text-white;
  }

  .card-text{
    @apply text-white/20;
  }
}

.cc-02:hover {
  @apply bg-green-900/90;

  .card-content {
    @apply text-white;
  }

  .card-text{
    @apply text-white/20;
  }
}

.cc-03:hover {
  @apply bg-sky-900/90;

  .card-content {
    @apply text-white;
  }

  .card-text{
    @apply text-white/20;
  }
}

.cc-04:hover {
  @apply bg-purple-900/90;

  .card-content {
    @apply text-white;
  }

  .card-text{
    @apply text-white/20;
  }
}
</style>