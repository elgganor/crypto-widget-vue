import { ref } from "vue";
import { RetrievePricesFromSymbolUseCase } from "@/ticker/application/use-cases/retrieve-prices-from-symbol.use-case";
import { HttpTickerRepository } from "@/ticker/infrastructure/repositories/http-ticker.repository";
import { AxiosHttpClient } from "@/shared/http-clients/axios.http-client";

export const useWidgetSearch = () => {
    const useCase = new RetrievePricesFromSymbolUseCase(
        new HttpTickerRepository(
            new AxiosHttpClient()
        )
    );

    const symbol = ref<string>('');

    const handleSearch = async () => {
        await useCase.execute(symbol.value);
    };

    return {
        symbol,
        handleSearch
    }
}