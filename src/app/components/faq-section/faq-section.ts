import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  imports: [CommonModule],
  template: `
  <section class="w-full bg-gradient-to-b from-[#2B2B2B] to-black text-white py-20 px-6 md:px-20">

    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold text-[#686E76]">Invest in bonds with</h2>
      <h3 class="text-3xl md:text-5xl font-bold mt-2">9-12% Fixed Returns</h3>
      <!-- decorative underline (as requested) -->
      <div class="w-60 h-1 bg-[linear-gradient(90deg,#626262_0%,#C4C3C3_50%,#626262_100%)] rounded-full mx-auto mt-3"></div>

      <p class="text-gray-400 text-sm mt-3">
        SEBI Registered | Start with just ₹1,000 today | Sell Anytime
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      <h3 class="text-xl font-semibold mb-6">Frequently Asked Questions</h3>

      <div *ngFor="let item of faqs; let i=index" class="mb-4">
        <div
          (click)="toggle(i)"
          class="flex justify-between items-center bg-[#2b2b2b] hover:bg-[#333] transition-all
                 px-6 py-4 rounded-xl cursor-pointer"
        >
          <p class="font-medium">{{ item.question }}</p>
          <span class="text-2xl">{{ openedIndex === i ? '−' : '+' }}</span>
        </div>

        <div
          *ngIf="openedIndex === i"
          class="bg-[#2b2b2b] px-6 py-4 rounded-xl border-t border-gray-700 text-gray-300 text-sm"
        >
          {{ item.answer }}
        </div>
      </div>
    </div>

  </section>
  `,
  styleUrls: ['./faq-section.css']
})
export class FaqSection {
  faqs: FaqItem[] = [
    {
      question: 'Can I use Spline for free?',
      answer:
        'Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.'
    },
    {
      question: 'Why should I upgrade to Super or Super Team?',
      answer:
        'Upgrading unlocks more projects, higher limits and advanced collaboration features perfect for growing teams.'
    },
    {
      question: 'What payment methods can I use?',
      answer:
        'We support major credit and debit cards, UPI, and popular net banking options depending on your region.'
    },
    {
      question: 'How does team billing work?',
      answer:
        'You pay for the total number of active seats in your workspace. Seats can be reassigned anytime.'
    },
    {
      question: 'How can I cancel my subscription?',
      answer:
        'You can cancel anytime from your billing settings. Your plan will remain active until the end of the billing period.'
    },
    {
      question: 'Can I change from monthly to yearly?',
      answer:
        'Yes, you can switch between monthly and yearly billing cycles from your account settings.'
    },
    {
      question: 'How can I ask other questions about pricing?',
      answer:
        'Reach out to our support team via chat or email and we’ll be happy to help.'
    },
    {
      question: 'Interested in Spline for Education?',
      answer:
        'We offer special plans and discounts for educational use. Contact us with your institute details.'
    }
  ];

  openedIndex: number | null = null;

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
