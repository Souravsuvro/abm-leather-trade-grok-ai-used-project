import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  company: z.string().trim().min(2, "Please enter your company"),
  country: z.string().trim().min(2, "Please enter your country"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(6, "Enter a phone or WhatsApp number"),
  product: z.string().trim().optional(),
  quantity: z.string().trim().optional(),
  sample: z.boolean(),
  intent: z.enum(["quote", "sample", "career", "general"]),
  message: z.string().trim().min(12, "Tell us what you need — at least a sentence"),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export type StoredEnquiry = Enquiry & {
  id: string;
  createdAt: string;
};

const KEY = "abm-enquiries";

export function listEnquiries(): StoredEnquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredEnquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEnquiry(data: Enquiry): StoredEnquiry {
  const record: StoredEnquiry = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [record, ...listEnquiries()].slice(0, 50);
  localStorage.setItem(KEY, JSON.stringify(next));
  return record;
}
