import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { RetrievePricesFromSymbolUseCase } from "./retrieve-prices-from-symbol.use-case";
import { useTickerStore } from "@/ticker/domain/store/ticket.store";
import type { TickerRepository } from "@/ticker/domain/repositories/ticker.repository";
import type { Ticker } from "@/ticker/domain/interfaces/ticker.interface";

class InMemorySuccessTickerRepository implements TickerRepository {
    getBySymbol(symbol: string): Promise<Ticker> {
        const ticker: Ticker = {
            symbol: 'ETHBTC',
            lowPrice: '0.01234',
            highPrice: '0.01245'
        };
        return Promise.resolve(ticker);
    }
}

class InMemoryErrorTickerRepository implements TickerRepository {
    getBySymbol(symbol: string): Promise<Ticker> {
        return Promise.reject('Unable to fetch data');
    }
}

describe('RetrievePricesFromSymbol', () => {
    let store: any;

    beforeEach(() => {
        setActivePinia(createPinia());
        store = useTickerStore();
    });

    it('should have an execute function', () => {
        const useCase = new RetrievePricesFromSymbolUseCase(new InMemorySuccessTickerRepository());
        expect(useCase.execute).toBeDefined();
    });

    it('should not have result initially', () => {
        expect(store.result)
            .toEqual({
                symbol: null,
                lowPrice: null,
                highPrice: null
            });
    });

    it('should have result in the store after a call with a valid symbol', async () => {
        const useCase = new RetrievePricesFromSymbolUseCase(new InMemorySuccessTickerRepository());

        await useCase.execute('ETHBTC');

        expect(store.result)
            .toEqual({
                symbol: 'ETHBTC',
                lowPrice: '0.01234',
                highPrice: '0.01245'
            });
    });

    it('should set an error when symbol is invalid', async () => {
        const useCase = new RetrievePricesFromSymbolUseCase(new InMemoryErrorTickerRepository());

        await useCase.execute('BLABLABLA');

        expect(store.error).toEqual('Unable to fetch data');
    });

    it('should reset result when symbol is invalid', async () => {
        const useCase = new RetrievePricesFromSymbolUseCase(new InMemoryErrorTickerRepository());

        store.setResult({ symbol: 'ETHBTC', lowPrice: '0.01234', highPrice: '0.01245' });

        await useCase.execute('BLABLABLA');

        expect(store.result)
            .toEqual({
                symbol: null,
                lowPrice: null,
                highPrice: null
            });
    });
});