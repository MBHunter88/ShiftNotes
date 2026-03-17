export type ShiftType = "day" | "overnight" | "consultation" | "custom";

export type EventType =
  | "feed"
  | "diaper"
  | "sleep"
  | "soothing"
  | "education"
  | "custom";

export interface ContactInfo {
  phone?: string;
  email?: string;
}

export interface InfantProfile {
  id: string;
  name: string;
  dateOfBirth?: string;
}

export interface Client {
  id: string;
  name: string;
  contact: ContactInfo;
  infantProfiles: InfantProfile[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Shift {
  id: string;
  clientId: string;
  type: ShiftType;
  startTime: string;
  endTime?: string;
  status: "draft" | "active" | "completed";
  headlineNote?: string;
  summaryId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FeedDetails {
  infantId: string;
  method: "breast" | "bottle" | "formula" | "pumped" | "mixed";
  amountOz?: number;
  side?: "left" | "right" | "both";
  durationMinutes?: number;
}

export interface DiaperDetails {
  infantId: string;
  diaperType: "wet" | "dirty" | "both";
  color?: string;
  notes?: string;
}

export interface SleepDetails {
  infantId: string;
  action: "start" | "end";
  location?: string;
}

export interface SoothingDetails {
  infantId?: string;
  action: string;
  durationMinutes?: number;
}

export interface EducationDetails {
  topic: string;
  audience: "parent" | "caregiver" | "family";
  notes?: string;
}

export interface CustomEventDetails {
  label: string;
  notes?: string;
}

export type EventDetails =
  | FeedDetails
  | DiaperDetails
  | SleepDetails
  | SoothingDetails
  | EducationDetails
  | CustomEventDetails;

export interface ShiftEvent<TDetails = EventDetails> {
  id: string;
  shiftId: string;
  type: EventType;
  timestamp: string;
  details: TDetails;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShiftSummarySection {
  id: string;
  title: string;
  content: string;
}

export interface ShiftSummary {
  id: string;
  shiftId: string;
  generatedAt: string;
  sections: ShiftSummarySection[];
  plainText: string;
}
