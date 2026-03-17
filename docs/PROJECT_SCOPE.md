# Project Scope

## Goal

Build an offline-first mobile app that helps perinatal care professionals capture shift events quickly and generate clean, structured shift summaries.

## Primary User

Postpartum doulas are the primary MVP user. Other perinatal roles may be considered later, but they should not drive early architecture complexity.

## MVP Priorities

- Fast event capture during active care
- Reliable local persistence
- Clear summary generation from structured data
- Clean export/share path
- Calm, mobile-first interface

## Key Product Risks

- Overgeneralizing for too many user types too early
- Using event models that are too flexible and become hard to summarize
- Making export requirements too heavy for the first release
- Failing to support overnight time handling and event correction

## Confirmed Refinements

- Use typed event structures instead of a single loose `details` shape
- Support event edit/delete in MVP
- Explicitly support multiple infants at a basic level
- Prefer SQLite for event-heavy local storage
- Treat copy/share text as the primary export path
- Use structured summary sections instead of only freeform paragraph output

## Immediate Build Direction

The next stage should create an app skeleton that reflects:

- Feature-based organization
- Typed domain models
- Local persistence boundaries
- Summary generation as a dedicated module
- Clear separation between UI, state, and storage
