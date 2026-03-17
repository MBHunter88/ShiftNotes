import { sampleClient, sampleEvents, sampleShift, sampleSummary } from "@/domain/sampleData";
import { createInMemoryDatabase } from "@/storage/database";

const database = createInMemoryDatabase();

let isSeeded = false;

export async function seedRepository() {
  if (isSeeded) {
    return;
  }

  await database.clients.upsert(sampleClient);
  await database.shifts.upsert(sampleShift);

  for (const event of sampleEvents) {
    await database.events.upsert(event);
  }

  await database.summaries.upsert(sampleSummary);
  isSeeded = true;
}

export const appRepository = database;
