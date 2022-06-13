
/* eslint-disable */

<template>
    <div>




<div class="min-h-screen flex flex-col">
    <!-- header -->
 <AppHeader/>

  <div class="flex-1 flex flex-col sm:flex-row">
      <!-- content -->
        <MainContent/>

    <!-- left sidebar -->

    <LeftSideBar/>

    <!-- right sidebar -->

    <RightSidebar/>

  </div>

<!-- footer -->
<PageFooter/>
</div>



    </div>
</template>

<script setup>

import AppHeader from './panel-components/AppHeader.vue'
import LeftSideBar from './panel-components/LeftSideBar.vue'
import RightSidebar from './panel-components/RightSidebar.vue'
import MainContent from './panel-components/MainContent.vue'
import PageFooter from './panel-components/PageFooter.vue'

</script>