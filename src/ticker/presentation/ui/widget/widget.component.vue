<script setup lang="ts">
import WidgetSearch from './search/widget-search.component.vue';
import WidgetResult from './result/widget-result.component.vue';
import WidgetError from './error/widget-error.component.vue';
</script>

<template>
  <div class="widget" data-test-id="widget">
    <widget-search />
    <widget-result />
    <widget-error />
  </div>
</template>

<style scoped>
.widget {
  width: fit-content;
  padding: 16px;

  border: solid 1px #cbd5e1;
  border-radius: 8px;
}
</style>