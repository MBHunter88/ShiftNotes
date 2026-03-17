# Shift Note Generator

Shift Note Generator is an offline-first cross-platform mobile app for perinatal care professionals to log shift activity in real time and generate structured end-of-shift summaries.

## Project Status

This repository is being built in staged iterations. The current stage establishes the project foundation, repository setup, and core documentation.

## Product Summary

The MVP focuses on postpartum doulas and related newborn care providers who need a faster, more reliable way to document care during a shift.

Core workflow:

Start Shift -> Track Events -> Add Notes -> Generate Summary -> Export or Save

## MVP Scope

Included in MVP:

- Offline-first mobile experience using Expo managed workflow and React Native
- Local data storage
- Client profiles
- Shift setup and active shift tracking
- Structured event logging for feeds, diapers, sleep, soothing, education, and custom events
- Freeform notes
- Rule-based summary generation
- Shift history
- Export/share focused first on copy/share text, with PDF considered a secondary export target
- Event editing and deletion
- Basic support for multiple infants

Excluded from MVP:

- Multi-user collaboration
- Billing
- Complex integrations
- Real-time messaging
- Cloud sync
- AI-generated summaries

## Approved Product Decisions

- Primary target user: postpartum doulas
- Mobile stack: Expo managed workflow with React Native
- Repository host: GitHub
- Storage direction: local-first, with SQLite preferred for structured shift/event data
- Summary generation: structured template-based output

## Planned Build Stages

1. Outline review
2. Project setup
3. Architectural structure
4. First iteration of testing
5. Content and styling
6. Security and vulnerability scan
7. Second iteration of testing and QA
8. Production readiness

## Repository Setup

- Local git repository initialized on `main`
- GitHub remote will point to: `https://github.com/MBHunter88/ShiftNotes.git`

## Next Stage

The next approved build stage will create the architectural skeleton for the Expo app, including placeholder files for key features, shared components, storage, and summary generation.
