"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time through your account settings. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add custom information to your invoices including your business details and any additional notes.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually, depending on your preference. All plans are billed in advance.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email through your account settings. We'll send a verification email to confirm the change.",
  },
];

export function FAQ() {
  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">ACE YOUR INTERVIEWS WITH</h2>
        <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
          Flexible Plans
        </h3>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}