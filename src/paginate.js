/** Splits a list into pages of `pageSize` items. Pages are numbered from 1. */
export function pageCount(total, pageSize) {
  return Math.floor(total / pageSize);
}

export function page(items, n, pageSize) {
  const start = (n - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
