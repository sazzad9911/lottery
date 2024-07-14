import { LRUCache } from 'lru-cache'
export interface RequestCount {
    quantity: number;
    ref: string;
    amount: number;
    eventId: string;
}
const cache = new LRUCache<string, RequestCount>({
    max: 1000, // Maximum number of items in cache
    ttl: 1000 * 60 * 5,
});
export default cache