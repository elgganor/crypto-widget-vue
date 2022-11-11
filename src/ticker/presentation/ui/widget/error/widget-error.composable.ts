import { computed } from "vue";
import { useTickerStore } from "@/ticker/domain/store/ticket.store";

export const useWidgetError = () => {
    const store = useTickerStore();

    const errorMessage = computed(() => store.error);
    const showErrorMessage = computed(() => { return store.error !== null });

    return {
        errorMessage,
        showErrorMessage
    }
}