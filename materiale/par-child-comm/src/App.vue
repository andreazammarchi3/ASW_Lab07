<script>

import {defineComponent} from "vue";
import ParentCmp from "@/components/ParentCmp.vue";

export default defineComponent({
    components: {ParentCmp}
})
</script>

<template>
  <div>
      <ParentCmp>

      </ParentCmp>
  </div>
</template>


