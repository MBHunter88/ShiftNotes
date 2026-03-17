import { Client, Shift, ShiftEvent, ShiftSummary } from "@/domain/models";

export const sampleClient: Client = {
  id: "client-demo",
  name: "Taylor Family",
  contact: {
    phone: "555-0100",
    email: "taylor@example.com"
  },
  infantProfiles: [
    {
      id: "infant-1",
      name: "Noah"
    }
  ],
  createdAt: "2026-03-16T05:00:00.000Z",
  updatedAt: "2026-03-16T05:00:00.000Z"
};

export const sampleShift: Shift = {
  id: "shift-demo",
  clientId: sampleClient.id,
  type: "overnight",
  startTime: "2026-03-16T04:00:00.000Z",
  endTime: "2026-03-16T12:00:00.000Z",
  status: "active",
  headlineNote: "Quiet shift with two feedings and steady sleep blocks.",
  createdAt: "2026-03-16T04:00:00.000Z",
  updatedAt: "2026-03-16T06:30:00.000Z"
};

export const sampleEvents: ShiftEvent[] = [
  {
    id: "event-1",
    shiftId: sampleShift.id,
    type: "feed",
    timestamp: "2026-03-16T04:30:00.000Z",
    details: {
      infantId: "infant-1",
      method: "bottle",
      amountOz: 3
    },
    createdAt: "2026-03-16T04:30:00.000Z",
    updatedAt: "2026-03-16T04:30:00.000Z"
  },
  {
    id: "event-2",
    shiftId: sampleShift.id,
    type: "diaper",
    timestamp: "2026-03-16T04:45:00.000Z",
    details: {
      infantId: "infant-1",
      diaperType: "wet"
    },
    createdAt: "2026-03-16T04:45:00.000Z",
    updatedAt: "2026-03-16T04:45:00.000Z"
  }
];

export const sampleSummary: ShiftSummary = {
  id: "summary-demo",
  shiftId: sampleShift.id,
  generatedAt: "2026-03-16T12:00:00.000Z",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: "Calm overnight shift with routine feeding and diaper care."
    },
    {
      id: "feeding",
      title: "Feeding",
      content: "Noah took one 3 oz bottle feed during the sample timeline."
    }
  ],
  plainText:
    "Overview: Calm overnight shift with routine feeding and diaper care.\n\nFeeding: Noah took one 3 oz bottle feed during the sample timeline."
};
