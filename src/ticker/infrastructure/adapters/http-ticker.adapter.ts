import type { Ticker } from "@/ticker/domain/interfaces/ticker.interface";

export class HttpTickerAdapter {
    public static adapt(data: any): Ticker {
        return {
            symbol: data.symbol ?? null,
            lowPrice: data.lowPrice ?? null,
            highPrice: data.highPrice ?? null
        }
    }
}