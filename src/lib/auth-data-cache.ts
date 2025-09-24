// Simple cache implementation for auth data
type CacheEntry<T> = {
  data: T | null;
  timestamp: number;
  isRefetching: boolean;
};

class AuthDataCache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private subscribers: Map<string, Set<() => void>> = new Map();
  private inFlightRequests: Map<string, Promise<any>> = new Map();

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.cache.get(key);
  }

  set<T>(key: string, data: T | null): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      isRefetching: false
    };
    this.cache.set(key, entry);
    this.notifySubscribers(key);
  }

  setRefetching(key: string, isRefetching: boolean): void {
    const entry = this.cache.get(key);
    if (entry) {
      entry.isRefetching = isRefetching;
      this.notifySubscribers(key);
    }
  }

  clear(key?: string): void {
    if (key) {
      this.cache.delete(key);
      this.notifySubscribers(key);
    } else {
      this.cache.clear();
      // Notify all subscribers
      for (const cacheKey of this.subscribers.keys()) {
        this.notifySubscribers(cacheKey);
      }
    }
  }

  subscribe(key: string, callback: () => void): () => void {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }
    this.subscribers.get(key)!.add(callback);

    // Return unsubscribe function
    return () => {
      const subscribers = this.subscribers.get(key);
      if (subscribers) {
        subscribers.delete(callback);
        if (subscribers.size === 0) {
          this.subscribers.delete(key);
        }
      }
    };
  }

  private notifySubscribers(key: string): void {
    const subscribers = this.subscribers.get(key);
    if (subscribers) {
      subscribers.forEach(callback => callback());
    }
  }

  setInFlightRequest<T>(key: string, promise: Promise<T>): void {
    this.inFlightRequests.set(key, promise);
  }

  getInFlightRequest<T>(key: string): Promise<T> | undefined {
    return this.inFlightRequests.get(key);
  }

  removeInFlightRequest(key: string): void {
    this.inFlightRequests.delete(key);
  }
}

export const authDataCache = new AuthDataCache();