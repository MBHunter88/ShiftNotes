import { Client, Shift, ShiftEvent, ShiftSummary } from "@/domain/models";

export interface DatabaseContract {
  clients: {
    list: () => Promise<Client[]>;
    upsert: (client: Client) => Promise<void>;
  };
  shifts: {
    list: () => Promise<Shift[]>;
    upsert: (shift: Shift) => Promise<void>;
  };
  events: {
    listByShiftId: (shiftId: string) => Promise<ShiftEvent[]>;
    upsert: (event: ShiftEvent) => Promise<void>;
    remove: (eventId: string) => Promise<void>;
  };
  summaries: {
    getByShiftId: (shiftId: string) => Promise<ShiftSummary | null>;
    upsert: (summary: ShiftSummary) => Promise<void>;
  };
}

// This in-memory adapter keeps the app runnable during architecture work.
// Stage 5+ can replace it with a SQLite-backed implementation behind the same contract.
export function createInMemoryDatabase(): DatabaseContract {
  const clients = new Map<string, Client>();
  const shifts = new Map<string, Shift>();
  const events = new Map<string, ShiftEvent>();
  const summaries = new Map<string, ShiftSummary>();

  return {
    clients: {
      async list() {
        return Array.from(clients.values());
      },
      async upsert(client) {
        clients.set(client.id, client);
      }
    },
    shifts: {
      async list() {
        return Array.from(shifts.values());
      },
      async upsert(shift) {
        shifts.set(shift.id, shift);
      }
    },
    events: {
      async listByShiftId(shiftId) {
        return Array.from(events.values()).filter((event) => event.shiftId === shiftId);
      },
      async upsert(event) {
        events.set(event.id, event);
      },
      async remove(eventId) {
        events.delete(eventId);
      }
    },
    summaries: {
      async getByShiftId(shiftId) {
        return (
          Array.from(summaries.values()).find((summary) => summary.shiftId === shiftId) ?? null
        );
      },
      async upsert(summary) {
        summaries.set(summary.id, summary);
      }
    }
  };
}
