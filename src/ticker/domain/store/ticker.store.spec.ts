import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia';
import { useTickerStore } from "./ticket.store";

describe('Ticker Store', () => {
    let store: any;

    beforeEach(() => {
        setActivePinia(createPinia());
        store = useTickerStore();
    })

    it('should be defined', () => {
        expect(store).toBeDefined();
    });

    describe('result', () => {
        it('should be defined', () => {
            expect(store.result).toBeDefined();
        });

        it('should have symbol, lowPrice and highPrice properties', () => {
            expect(store.result).toHaveProperty('symbol');
            expect(store.result).toHaveProperty('lowPrice');
            expect(store.result).toHaveProperty('highPrice');
        });

        it('should have all its properties as null initially', () => {
            expect(store.result.symbol).toEqual(null);
            expect(store.result.lowPrice).toEqual(null);
            expect(store.result.highPrice).toEqual(null);
        });
    });

    describe('setResult', () => {
        it('should be defined', () => {
            expect(store.setResult).toBeDefined();
        });

        it('should update result with new values passed as argument', () => {
            const newResultValue = {
                symbol: 'ETHBTC',
                lowPrice: '0.01234',
                highPrice: '0.01245'
            };

            store.setResult(newResultValue);

            expect(store.result).toEqual(newResultValue);
        });
    });

    describe('resetResult', () => {
        it('should be defined', () => {
            expect(store.resetResult).toBeDefined();
        });

        it('should set all value of result as null', () => {
            const newResultValue = {
                symbol: 'ETHBTC',
                lowPrice: '0.01234',
                highPrice: '0.01245'
            };
            store.setResult(newResultValue);
            expect(store.result).toEqual(newResultValue);

            store.resetResult();
            expect(store.result.symbol).toEqual(null);
            expect(store.result.lowPrice).toEqual(null);
            expect(store.result.highPrice).toEqual(null);
        });
    });

    describe('error', () => {
        it('should be defined', () => {
            expect(store.error).toBeDefined();
        });

        it('should be null initially', () => {
            expect(store.error).toEqual(null);
        });
    });

    describe('setError', () => {
        it('should be defined', () => {
            expect(store.setError).toBeDefined();
        });

        it('should update error with new value', () => {
            store.setError('Unable to fetch data');
            expect(store.error).toEqual('Unable to fetch data');
        });
    });

    describe('resetError', () => {
        it('should be defined', () => {
            expect(store.resetError).toBeDefined();
        });

        it('should set error as null', () => {
            store.setError('Unable to fetch data');
            expect(store.error).toEqual('Unable to fetch data');

            store.resetError();
            expect(store.error).toEqual(null);
        });
    });
});