<script setup lang="ts">
import {ref} from "vue";
import { RouterView } from "vue-router";
import {Twitter, Github} from '@icon-park/vue-next';

let footerIconWidth = ref(26);

</script>

<template>
  <div
    class="responsive-width bg-amber-200/40"
    @contextmenu.prevent>
    <RouterView class="min-h-screen" />
  </div>
  <footer class="bg-black text-white">
    <div class="responsive-width">

      <div class="clear-both"></div>

      <div class="p-5 align-middle relative float-left">
        <div class="inline-block align-middle">
          <a href="https://dotnet-china.com/all-dnic" class="text-white font-bold border p-2 px-5">All dotnet-china sites</a>
        </div>
      </div>

      <div class="p-5 relative float-right">
        <a href="https://twitter.com/dotnet_china" title=".NET China Community on Twitter" target="_blank" class="align-middle inline-block mx-2">
          <Twitter theme="filled" :size="footerIconWidth" fill="#ffffff"/>
        </a>
        <a href="https://github.com/dotnet-china" title=".NET China Community on GitHub" target="_blank" class="align-middle inline-block mx-2">
          <Github theme="filled" :size="footerIconWidth" fill="#ffffff"/>
        </a>
        <a href="https://gitee.com/dotnet-china" title=".NET China Community on Gitee" target="_blank" class="align-middle inline-block mx-2">
          <svg t="1698644918070" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5596" :width="footerIconWidth" :height="footerIconWidth">
            <path d="M512 992C246.896 992 32 777.104 32 512S246.896 32 512 32s480 214.896 480 480-214.896 480-480 480z m242.952-533.328H482.383a23.712 23.712 0 0 0-23.71 23.712l-0.025 59.256c0 13.08 10.608 23.712 23.688 23.712h165.96c13.104 0 23.712 10.608 23.712 23.688v11.856a71.112 71.112 0 0 1-71.112 71.112H375.68a23.712 23.712 0 0 1-23.688-23.712V423.128a71.112 71.112 0 0 1 71.088-71.112h331.824a23.712 23.712 0 0 0 23.688-23.712l0.072-59.256a23.712 23.712 0 0 0-23.688-23.712H423.08a177.769 177.769 0 0 0-177.769 177.792v331.825c0 13.104 10.609 23.712 23.713 23.712h349.632A159.984 159.984 0 0 0 778.64 618.681V482.36a23.712 23.712 0 0 0-23.712-23.688z" fill="#ffffff" p-id="5597" data-spm-anchor-id="a313x.search_index.0.i8.73f13a81QDVP27" class="selected"></path>
          </svg>
        </a>
      </div>

      <div class="clear-both"></div>

      <hr class="mx-5" />

      <div class="px-5 text-sm my-3.5 leading-10">
        <div class="inline-block float-left">Copyright © 2016-2024 .NET China Community. All rights reserved.</div>
        <div class="inline-block float-right">
          <span class="inline-block align-middle pr-2">Maintained by</span>
          <a class="inline-block align-middle" href="https://ncc.work" target="_blank" title=".NET Core Community">
            <img src="/images/ncc/logo.black.png" width="80" alt="NCC" />
          </a>
        </div>
      </div>

      <div class="clear-both"></div>

      <div class="bg-black" style="height: 10px"></div>

    </div>
  </footer>
</template>

<style src="./App.css" lang="css"></style>
