# Architecture Overview

## Direction

This project uses a feature-based source structure within a simple Expo managed workflow app. The current stage intentionally favors clarity over completeness.

## Structure

- `App.tsx`: top-level Expo entry point
- `src/app`: app shell and future navigation boundary
- `src/domain`: typed models and sample data
- `src/features`: feature modules for clients, shifts, events, notes, summaries, and history
- `src/shared`: shared UI primitives, constants, theme tokens, and utilities
- `src/storage`: persistence contracts and repository setup
- `src/testing`: shared test identifiers and future testing helpers

## Architectural Decisions

- Use typed domain models to keep event data structured and summary-friendly
- Keep persistence behind a repository contract so SQLite can replace placeholder storage later
- Keep summary generation in a dedicated feature module rather than embedding logic in screens
- Use placeholders to make responsibilities visible without locking in UI too early

## Planned Next Technical Steps

- Replace in-memory storage with a SQLite-backed adapter
- Introduce navigation and screen routing
- Add form state for client creation, shift setup, and event logging
- Build summary review and export flows
