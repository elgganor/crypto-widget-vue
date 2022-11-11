import type { TickerRepository } from "@/ticker/domain/repositories/ticker.repository";
import type { Ticker } from "@/ticker/domain/interfaces/ticker.interface";
import type { HttpClient } from "@/shared/interfaces/http-client.interface";
import {HttpTickerAdapter} from "@/ticker/infrastructure/adapters/http-ticker.adapter";

export class HttpTickerRepository implements TickerRepository {
    private tickerUrl: string = 'https://api2.binance.com/api/v3/ticker/24hr';

    constructor(private httpClient: HttpClient) {}

    async getBySymbol(symbol: string): Promise<Ticker> {
        try {
            const response = await this.httpClient.get(`${this.tickerUrl}?symbol=${symbol}`);
            return HttpTickerAdapter.adapt(response);
        } catch (error) {
            console.error(error); // Remove on production environment
            return Promise.reject('Unable to fetch data');
        }
    }

}