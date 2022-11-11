import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { Ticker } from "@/ticker/domain/interfaces/ticker.interface";

export const useTickerStore = defineStore('ticker', () => {
    const result = reactive<Ticker>({
        symbol: null,
        lowPrice: null,
        highPrice: null,
    });

    const setResult = (value: Ticker): void => {
        result.symbol = value.symbol;
        result.lowPrice = value.lowPrice;
        result.highPrice = value.highPrice;
    };

    const resetResult = (): void => {
        result.symbol = null;
        result.lowPrice = null;
        result.highPrice = null;
    }

    const error = ref<string | null>(null);

    const setError = (message: string | null): void => {
        error.value = message;
    };

    const resetError = (): void => {
        error.value = null;
    };

    return {
        result,
        setResult,
        resetResult,
        error,
        setError,
        resetError
    };
});