
/* eslint-disable */

<template>
    <div>




<div class="min-h-screen flex flex-col">
    <!-- header -->
 <AppHeader/>

  <div class="flex-1 flex flex-col sm:flex-row">
      <!-- content -->
    <main class="flex-1 bg-indigo-100">Content here</main>

    <!-- sidebar -->
    <nav class="order-first sm:w-32 bg-purple-200">Sidebar</nav>

    <!-- right sidebar -->
    <aside class="sm:w-32 bg-yellow-100">Right Sidebar</aside>
  </div>

<!-- footer -->
  <footer class="bg-gray-100">Footer</footer>
</div>



    </div>
</template>

<script setup>

import AppHeader from './AppHeader.vue'

</script>