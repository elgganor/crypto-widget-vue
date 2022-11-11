import type { TickerRepository } from "@/ticker/domain/repositories/ticker.repository";
import type { Ticker } from "@/ticker/domain/interfaces/ticker.interface";
import { useTickerStore } from "@/ticker/domain/store/ticket.store";

export class RetrievePricesFromSymbolUseCase {
    constructor(
        private tickerRepository: TickerRepository
    ) {}

    async execute(symbol: string): Promise<void> {
        const store = useTickerStore();
        store.resetResult();
        store.resetError();

        try {
            const ticker: Ticker = await this.tickerRepository.getBySymbol(symbol);

            store.setResult(ticker);
        } catch (error) {
            store.setError('Unable to fetch data');
        }
    }
}