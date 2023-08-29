/* Copyright 2023 Marimo. All rights reserved. */
export const Objects = {
  mapValues<T, U, K extends string | number>(
    obj: Record<K, T>,
    mapper: (value: T) => U
  ): Record<K, U> {
    return Objects.fromEntries(
      Objects.entries(obj).map(([key, value]) => [key, mapper(value)])
    );
  },
  /**
   * Type-safe Object.fromEntries
   */
  fromEntries<K extends string | number, V>(obj: Array<[K, V]>): Record<K, V> {
    return Object.fromEntries(obj) as Record<K, V>;
  },
  /**
   * Type-safe Object.entries
   */
  entries<K extends string | number, V>(obj: Record<K, V>): Array<[K, V]> {
    return Object.entries(obj) as Array<[K, V]>;
  },
  /**
   * Type-safe Object.keys
   */
  keys<K extends string | number>(obj: Record<K, unknown>): K[] {
    return Object.keys(obj) as K[];
  },
  /**
   * Type-safe groupBy
   */
  groupBy<T, K extends string | number, V>(
    items: T[],
    toKey: (item: T) => K | undefined,
    toValue: (item: T) => V
  ): Record<K, V[]> {
    const result: Record<K, V[]> = {} as Record<K, V[]>;
    for (const item of items) {
      const key = toKey(item);
      if (key === undefined) {
        continue;
      }
      const value = toValue(item);
      if (key in result) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    }
    return result;
  },
};