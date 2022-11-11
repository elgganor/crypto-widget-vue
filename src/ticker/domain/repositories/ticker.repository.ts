import type { Ticker } from "@/ticker/domain/interfaces/ticker.interface";

export interface TickerRepository {
    getBySymbol(symbol: string): Promise<Ticker>;
}