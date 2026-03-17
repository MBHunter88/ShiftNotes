import { sampleClient, sampleEvents, sampleShift, sampleSummary } from "@/domain/sampleData";
import { createInMemoryDatabase } from "@/storage/database";

describe("createInMemoryDatabase", () => {
  it("stores and returns clients, shifts, events, and summaries", async () => {
    const database = createInMemoryDatabase();

    await database.clients.upsert(sampleClient);
    await database.shifts.upsert(sampleShift);
    await database.events.upsert(sampleEvents[0]);
    await database.summaries.upsert(sampleSummary);

    await expect(database.clients.list()).resolves.toEqual([sampleClient]);
    await expect(database.shifts.list()).resolves.toEqual([sampleShift]);
    await expect(database.events.listByShiftId(sampleShift.id)).resolves.toEqual([
      sampleEvents[0]
    ]);
    await expect(database.summaries.getByShiftId(sampleShift.id)).resolves.toEqual(
      sampleSummary
    );
  });

  it("removes only the targeted event from a shift timeline", async () => {
    const database = createInMemoryDatabase();

    await database.events.upsert(sampleEvents[0]);
    await database.events.upsert(sampleEvents[1]);

    await database.events.remove(sampleEvents[0].id);

    await expect(database.events.listByShiftId(sampleShift.id)).resolves.toEqual([
      sampleEvents[1]
    ]);
  });
});
