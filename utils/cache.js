export default class Cache {
    constructor() {
        this.limit = 10_000;
        this.store = {};
    }

    get length() {
        return Object.keys(this.store).length;
    }

    add(id, data) {
        if (this.length >= this.limit) return this.freeSpace();
        this.store[id] = {
            data,
            expires: Date.now() + 3_600_000
        };
    }

    freeSpace() {
        const now = Date.now();
        for (const [id, resource] of Object.entries(this.store)) {
            if (now > resource.expires) {
                delete this.store[id];
            }
        }
    }

    get(id) {
        const resource = this.store[id];
        return resource ? resource.data : null;
    }
}
