# Testing Strategy

## Stage 4 Scope

The first testing iteration focuses on low-friction validation around architecture and domain behavior instead of full UI interaction coverage.

## Current Test Targets

- Summary generation logic
- In-memory repository behavior
- Shared repository seeding
- Small utility behavior

## Why This Order

- These modules are stable enough to test before navigation and forms exist
- They protect the data and summary contracts that later UI work depends on
- They keep the first test pass fast and easy to maintain

## Planned Future Coverage

- Screen rendering tests for primary workflow states
- Form validation tests for client, shift, and event entry
- Summary review and export behavior
- SQLite adapter tests
- Regression tests for overnight shifts and multi-infant logging
