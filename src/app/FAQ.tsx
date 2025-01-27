import React from "react";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is the ceremony an official marriage ceremony?",
      answer:
        "Something we haven't shared widely is that we secretly got legally married in last year due to visa reasons. But this celebration is our chance to honour our love story properly, surrounded by those who mean most to us. We will have a ceremony where we exchange vows and rings to celebrate the commitment we've made and the future we're building together.",
    },
    {
      question: "Why is it on a Monday?",
      answer:
        "We chose to have our wedding on this date because it is the third anniversary of the day we first met! We hope you can join us to celebrate this special day. Luckily, it's a public holiday in Queensland!",
    },
    {
      question: "What is happening after the reception?",
      answer:
        "The reception is expected to finish around 4pm. Afterwards, everyone is invited back to the farm house to continue the celebrations. There will be dancing, a big bonfire, and festivities continuing long into the night!",
    },
    {
      question: "Will there be facilities provided for campers?",
      answer:
        "Yes, a block of showers and toilets will be provided onsite for all camping guests.",
    },
    {
      question: "Will there be cute highland cows?",
      answer:
        "Yes! You'll likely have an opportunity to see several highland cows at the house.",
    },
    {
      question: "How is the weather in Leyburn at that time of year?",
      answer:
        "Early May in Leyburn typically offers pleasant daytime temperatures around 22-24°C, perfect for an outdoor celebration. However, nights can be quite cool, dropping to around 5-11°C, so if you're planning to camp, please bring warm bedding and appropriate camping gear. The weather is generally favourable with mostly sunny or slightly cloudy days.",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-pink-400 mr-4" />
            <h2 className="text-3xl font-serif text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
