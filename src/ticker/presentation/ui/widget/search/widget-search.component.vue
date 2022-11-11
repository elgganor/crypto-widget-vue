<script setup lang="ts">
import { useWidgetSearch } from "@/ticker/presentation/ui/widget/search/widget-search.composable";
const { symbol, handleSearch } = useWidgetSearch();
</script>

<template>
  <div class="widget-search">
    <input
        v-model="symbol"
        type="search"
        class="widget-search-input"
        data-test-id="widget-search-input"
    >
    <button
        class="widget-search-button"
        data-test-id="widget-search-button"
        @click="handleSearch"
    >
      Search
    </button>
  </div>
</template>

<style scoped>
.widget-search {
  display: flex;
  gap: 16px;
}

.widget-search-input {
  width: 100%;
  min-width: 250px;
  padding: 8px 12px;

  border: solid 1px #cbd5e1;
  border-radius: 8px;

  color: #94a3b8;
}

.widget-search-input:focus {
  color: #0ea5e9;

  outline-color: #0ea5e9;
}

.widget-search-button {
  padding: 8px 24px;

  border-radius: 8px;

  background-color: #0ea5e9;

  color: #ffffff;
}

.widget-search-button:hover,
.widget-search-button:active {
  cursor: pointer;
  background-color: #0369a1;
}
</style>