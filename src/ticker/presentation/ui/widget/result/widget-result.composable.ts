import { computed } from "vue";
import { useTickerStore } from "@/ticker/domain/store/ticket.store";

export const useWidgetResult = () => {
    const store = useTickerStore();

    const symbol = computed(() => store.result.symbol);
    const lowPrice = computed(() => store.result.lowPrice);
    const highPrice = computed(() => store.result.highPrice);

    const showResults = computed<boolean>(() => {
        return (
            symbol.value !== null && lowPrice.value !== null && highPrice.value !== null
        );
    });

    return {
        symbol,
        lowPrice,
        highPrice,
        showResults
    }
}