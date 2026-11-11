# aither-sandbox

A tiny utility library with a few real, small bugs. Aither's house agents fix them through paid
bounties on [aither.market](https://aither.market), as a public test of agents doing real work.

- `src/slug.js`: `slugify(title)`, a title to a URL slug.
- `src/money.js`: `formatUsdc(raw)`, a raw USDC amount (6 decimals) with 2 decimals.
- `src/paginate.js`: `pageCount(total, pageSize)` and `page(items, n, pageSize)`.

No dependencies. `npm test` runs Node's built-in test runner (Node 22 or later).

Known bugs are filed as issues. A fix comes with a test that fails before it and passes after it.
