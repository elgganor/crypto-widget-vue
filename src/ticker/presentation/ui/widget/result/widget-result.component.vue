<script setup lang="ts">
import { useWidgetResult } from "@/ticker/presentation/ui/widget/result/widget-result.composable";

const { showResults, symbol, lowPrice, highPrice } = useWidgetResult();
</script>

<template>
  <div v-if="showResults" class="widget-result">
    <div class="widget-result-category">
      <div class="widget-result-category-label">
        Symbol
      </div>
      <div class="widget-result-category-value" data-test-id="widget-result-symbol">
        {{ symbol }}
      </div>
    </div>

    <div class="widget-result-category">
      <div class="widget-result-category-label">
        Low Price
      </div>
      <div class="widget-result-category-value" data-test-id="widget-result-low-price">
        {{ lowPrice }}
      </div>
    </div>

    <div class="widget-result-category">
      <div class="widget-result-category-label">
        High Price
      </div>
      <div class="widget-result-category-value" data-test-id="widget-result-high-price">
        {{ highPrice }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.widget-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  margin-top: 16px;
}

.widget-result-category-label {
  font-size: 14px;
  font-weight: 700;
  color: #475569;
  user-select: none;
}

.widget-result-category-value {
  color: #0ea5e9;
}
</style>