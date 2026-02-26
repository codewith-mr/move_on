"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FAQClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with TBS?",
      answer: "Getting started is easy! Simply create a free account and explore our resources."
    },
    {
      question: "Are the courses self-paced?",
      answer: "Yes, all our courses are completely self-paced. You can learn at your own speed."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all our premium courses."
    }
  ];

  return (
    <>
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Find answers to common questions about our platform.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-heading font-bold text-primary text-lg">{faq.question}</h3>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
              >
                <p className="text-neutral-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-700 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
