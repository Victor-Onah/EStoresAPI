export default class TokenBucketsStore {
    constructor() {
        this.limit = 20_000;
        this.store = {};
    }

    get length() {
        return Object.keys(this.store).length;
    }

    put(id, limit = 100) {
        if (this.length >= this.limit) this.freeSpace();
        this.store[id] = {
            lastRequestTimeStamp: Date.now(),
            tokens: limit,
            limit,
            rate: Math.floor(limit / 60)
        };
    }

    freeSpace() {
        const now = Date.now();
        for (const [id, bucket] of Object.entries(this.store)) {
            if (now - bucket.lastRequestTimeStamp > 3_600_000) {
                delete this.store[id];
            }
        }
    }

    acceptRequest(id) {
        const bucket = this.store[id];
        if (!bucket) return null;

        const now = Date.now();
        const elapsedTimeInSeconds = (now - bucket.lastRequestTimeStamp) / 1000;

        const tokenTopUp = Math.floor(elapsedTimeInSeconds * bucket.rate);
        bucket.tokens = Math.min(bucket.limit, bucket.tokens + tokenTopUp);

        bucket.lastRequestTimeStamp = now;

        if (bucket.tokens >= 1) {
            bucket.tokens -= 1;
            return true;
        }

        return false;
    }
}
