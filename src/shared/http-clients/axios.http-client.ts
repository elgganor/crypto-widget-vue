import type { HttpClient } from "@/shared/interfaces/http-client.interface";
import axios from "axios";

export class AxiosHttpClient implements HttpClient {
    async get(url: string): Promise<unknown> {
        const response = await axios.get(url);
        return response.data;
    }
}