describe("appRepository seeding", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("loads sample data into the shared repository once", async () => {
    const { appRepository, seedRepository } = require("@/storage/appRepository");
    const { sampleShift } = require("@/domain/sampleData");

    await seedRepository();
    await seedRepository();

    const clients = await appRepository.clients.list();
    const shifts = await appRepository.shifts.list();
    const events = await appRepository.events.listByShiftId(sampleShift.id);
    const summary = await appRepository.summaries.getByShiftId(sampleShift.id);

    expect(clients).toHaveLength(1);
    expect(shifts).toHaveLength(1);
    expect(events).toHaveLength(2);
    expect(summary?.shiftId).toBe(sampleShift.id);
  });
});
