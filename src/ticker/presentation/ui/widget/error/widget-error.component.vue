<script setup lang="ts">
import { useWidgetError } from "@/ticker/presentation/ui/widget/error/widget-error.composable";

const { errorMessage, showErrorMessage } = useWidgetError();
</script>

<template>
  <div v-if="showErrorMessage" class="widget-error" data-test-id="widget-error">
    {{ errorMessage }}
  </div>
</template>

<style scoped>
.widget-error {
  padding: 8px 16px;
  margin-top: 16px;

  border: solid 1px #ef4444;
  border-radius: 8px;

  background-color: #fee2e2;

  color: #991b1b;

  user-select: none;
}
</style>