<script setup lang="ts">
import {computed} from "vue";
import {usePreferredDark} from "@vueuse/core";
import {setTitle} from "@/hooks/usePageToolkits";

import BodyBlock from "@/components/blocks/BodyBlock.vue";
import MarkdownWorker from "@/components/markdown/MarkdownWorker.vue";
import PlaceholderBlock from "@/components/blocks/PlaceholderBlock.vue";
import Anchor from "@/components/basic/AnchorElement.vue";
import {RightSmallUp} from "@icon-park/vue-next";

setTitle("about", "i18n");

const currentPrefersDarkMode = usePreferredDark();
const useIconColor = computed(() => {
  return currentPrefersDarkMode.value
      ? "#f8f8f8"
      : "#000000";
});
</script>

<template>

  <body-block>

    <div class="content-text">

      <markdown-worker source="attend/attend-ncc-2f"
                       :i18n="true"
                       fallback-locale="en"
                       :include-file-extension="true"
                       file-extension=".md"
                       :redirect-to404="false"/>

      <anchor href="https://2f.ncc.work/about" :title="`${$t('about')} ${$t('community-2f')}`" target="_blank" mode="classic" class="btn">
        {{ $t("about") }} {{ $t('community-2f') }}
        <right-small-up class="inline-block align-middle" theme="filled" size="24" :fill="useIconColor"/>
      </anchor>

      <anchor href="https://2f.ncc.work/how-to" :title="$t('attend.involved-in')" target="_blank" mode="classic" class="btn">
        {{ $t("attend.involved-in") }}
        <right-small-up class="inline-block align-middle" theme="filled" size="24" :fill="useIconColor"/>
      </anchor>

    </div>

    <div class="content-image">
      <img src="/images/material/on-air.webp" alt="TheNCC 2F"/>
    </div>

  </body-block>

  <div class="responsive-width text-2xl text-black dark:text-white text-center">
    <div class="mt-48">The site is under development.</div>
  </div>

  <placeholder-block height="90px"/>
</template>

<style scoped lang="css">
.btn {
  @apply py-2 w-72 mx-auto my-4 block;
  @apply bg-slate-500/10 hover:bg-slate-500/20 rounded-lg cursor-pointer;
  @apply text-lg text-center;
}

.content-text {
  @apply inline-block align-top;
  @apply md:w-4/6 lg:w-3/6 w-full;
}

.content-image {

  @apply inline-block align-top;
  @apply md:w-2/6 lg:w-3/6 w-0;

  & img {
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzE1IiBoZWlnaHQ9IjU4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQ4LjMyOCA5Ni42OTRjNzUuNTM2IDUwLjEyNiAxMjkuNjM2IDExMS4wMDkgMTQ5LjE2NiAxNzQuOTg0IDE5LjUxNyA2My45MzIgNC41NCAxMzEuMDM2LTU4LjI2MSAxOTMuNzMzLTEyNS42NTcgMTI1LjQ1LTM0OS44NjggMTQ1Ljk0NS01MDAuNzQ0IDQ1Ljc3Mi03NS40MjQtNTAuMDc2LTExOC4yMzUtMTIwLjgyLTEyNi40OTYtMTk0LjY5N0MzLjczIDI0Mi42MSAzMC4wMSAxNjUuNTUxIDkyLjg2NiAxMDIuODI2IDIxOC41MzktMjIuNTg2IDM5Ny40Ny0zLjU2MSA1NDguMzI4IDk2LjY5NFoiIGZpbGw9IiM4Njg2ODYiLz48L3N2Zz4=");
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: contain;
  }

}
</style>