import { property, southLocation } from "./property";

// Extended-stay FAQs. Only facts confirmed by the property — no rates,
// check-in times or pet policy until the owner supplies them.
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does an extended stay cost?",
    a: `Rates depend on the length of your stay. Call us at ${property.phone.display} for current pricing.`,
  },
  {
    q: "How do I book?",
    a: `Extended stays are booked directly with us by phone at ${property.phone.display}. You can also send an inquiry through our contact form and we'll reach out. There is no online booking for this location.`,
  },
  {
    q: "What's included in the room?",
    a: "Rooms include Wi-Fi and wired internet, a Smart TV with cable, a refrigerator, microwave, coffee maker and air-conditioning.",
  },
  {
    q: "Is there laundry on-site?",
    a: "Yes. An on-site laundry facility is available to guests.",
  },
  {
    q: "I only need a night or two. Can I stay here?",
    a: `For nightly stays, book at our sister property, ${southLocation.name}, at ${southLocation.address}. It has online booking and a lakefront setting.`,
  },
];
